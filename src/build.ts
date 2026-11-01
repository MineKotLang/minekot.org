import * as fs from "fs"
import * as path from "path"
import * as esbuild from "esbuild"

interface BuildConfig {
  entryPoint: string
  outfile: string
  htmlSource: string
  htmlDest: string
  fallbackDest: string
  cssSource: string
  cssDest: string
  llmsSource: string
  llmsDest: string
  robotsSource: string
  robotsDest: string
  sitemapDest: string
  siteUrl: string
  minify: boolean
  sourcemap: boolean
}

interface StaticAsset {
  source: string
  dest: string
}

interface DocSidebarEntry {
  path: string
  indexPath?: string
}

interface DocSidebarCategory {
  entries: DocSidebarEntry[]
}

interface GitHubTreeItem {
  path: string
  type: string
}

const BUILD_CONFIG: BuildConfig = {
  entryPoint: "src/index.tsx",
  outfile: "dist/index.js",
  htmlSource: "src/index.html",
  htmlDest: "dist/index.html",
  fallbackDest: "dist/404.html",
  cssSource: "src/styles/styles.css",
  cssDest: "dist/styles.css",
  llmsSource: "src/llms.txt",
  llmsDest: "dist/llms.txt",
  robotsSource: "src/robots.txt",
  robotsDest: "dist/robots.txt",
  sitemapDest: "dist/sitemap.xml",
  siteUrl: "https://minekot.org",
  minify: true,
  sourcemap: false,
}

const STATIC_ASSETS: StaticAsset[] = [
  {source: BUILD_CONFIG.llmsSource, dest: BUILD_CONFIG.llmsDest},
  {source: BUILD_CONFIG.robotsSource, dest: BUILD_CONFIG.robotsDest},
  {source: "src/manifest.webmanifest", dest: "dist/manifest.webmanifest"},
]

const buildLogPlugin = (name: string): esbuild.Plugin => ({
  name: "build-log-plugin",
  setup(build: esbuild.PluginBuild): void {
    build.onEnd((result) => {
      if (result.errors.length > 0) {
        console.error(`✗ ${name} rebuild failed:`, result.errors)
      } else {
        console.log(`✓ ${name} rebuilt successfully`)
      }
    })
  },
})

function scanDistAssets(): string[] {
  const urls: string[] = ["/"]

  function scan(dir: string): void {
    for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        scan(fullPath)
      } else {
        const urlPath = "/" + path.relative("dist", fullPath).split(path.sep).join("/")
        if (urlPath === "/sw.js") continue       // never self-cache
        if (urlPath.endsWith(".map")) continue    // skip source maps
        urls.push(urlPath)
      }
    }
  }

  scan("dist")
  return urls
}

function writeServiceWorker(): void {
  const template = fs.readFileSync("src/sw.js", "utf-8")
  const assets = scanDistAssets()
  const injected = `const STATIC_ASSETS = ${JSON.stringify(assets, null, 2)}`
  const output = template.replace(/^const STATIC_ASSETS = \[\].*$/m, injected)
  fs.writeFileSync("dist/sw.js", output)
}

/**
 * Builds the site, watching for changes when --watch is passed.
 */
async function build(): Promise<void> {
  const isWatch: boolean = process.argv.includes("--watch")
  const minify: boolean = isWatch ? false : BUILD_CONFIG.minify
  const sourcemap: boolean = isWatch ? true : BUILD_CONFIG.sourcemap

  try {
    if (!fs.existsSync("dist")) {
      fs.mkdirSync("dist", {recursive: true})
    }

    await copyAssets()
    const docUrlPaths: string[] = await copyDocRouteFallbacks()
    writeSitemap(docUrlPaths)
    verifyOutput()

    if (isWatch) {
      console.log("Starting development watch mode...")

      await (
          await esbuild.context({
            entryPoints: [BUILD_CONFIG.entryPoint],
            bundle: true,
            outfile: BUILD_CONFIG.outfile,
            minify,
            sourcemap,
            format: "esm",
            platform: "browser",
            target: ["es2020"],
            plugins: [buildLogPlugin("JS Bundle")],
          })
      ).watch()
      console.log("✓ JS watching enabled")

      await (
          await esbuild.context({
            entryPoints: [BUILD_CONFIG.cssSource],
            bundle: true,
            outfile: BUILD_CONFIG.cssDest,
            minify,
            sourcemap,
            plugins: [buildLogPlugin("CSS Bundle")],
          })
      ).watch()
      console.log("✓ CSS watching enabled")

      fs.watch(BUILD_CONFIG.htmlSource, (eventType: string) => {
        if (eventType === "change") {
          try {
            copyHtml()
            console.log("✓ HTML rebuilt")
          } catch (e) {
            console.error("✗ HTML copy failed:", e)
          }
        }
      })

      if (fs.existsSync("src/images")) {
        fs.watch("src/images", {recursive: true}, () => {
          try {
            copyImages()
            console.log("✓ Images updated")
          } catch (e) {
            console.error("✗ Images copy failed:", e)
          }
        })
      }

      watchStaticAssets(STATIC_ASSETS)
      writeServiceWorker()

      console.log("Watching for changes...")
    } else {
      await esbuild.build({
        entryPoints: [BUILD_CONFIG.entryPoint],
        bundle: true,
        outdir: "dist",
        entryNames: "[name]",
        minify,
        sourcemap,
        format: "esm",
        platform: "browser",
        target: ["es2020"],
        splitting: true,
        chunkNames: "chunks/[name]-[hash]",
      })

      await esbuild.build({
        entryPoints: [BUILD_CONFIG.cssSource],
        bundle: true,
        outfile: BUILD_CONFIG.cssDest,
        minify,
        sourcemap,
      })

      writeServiceWorker()

      console.log("✓ Build complete")
    }
  } catch (error: unknown) {
    const message: string = error instanceof Error ? error.message : String(error)
    console.error("✗ Build failed:", message)
    process.exit(1)
  }
}

/**
 * Reads the page routes that need a generated index.html fallback.
 * @returns Normalized route paths without a trailing slash.
 */
function readRoutePaths(): string[] {
  const routesRaw: string = fs.readFileSync("src/config/routes.json", "utf-8")
  const routes: Record<string, unknown> = JSON.parse(routesRaw) as Record<string, unknown>
  const paths: string[] = []

  Object.values(routes).forEach((routePath: unknown) => {
    if (typeof routePath === "string" && routePath !== "" && routePath !== "/") {
      paths.push(routePath.replace(/\/+$/, ""))
    }
  })

  return paths
}

function copyHtml(): void {
  const htmlContent: string = fs.readFileSync(BUILD_CONFIG.htmlSource, "utf-8")

  // Replace absolute paths with relative for the root index
  const rootHtml: string = htmlContent
      .replace("href=\"/styles.css\"", "href=\"./styles.css\"")
      .replace("src=\"/index.js\"", "src=\"./index.js\"")

  fs.writeFileSync(BUILD_CONFIG.htmlDest, rootHtml)

  const notFoundHtml: string = fs.readFileSync("src/404.html", "utf-8")
  fs.writeFileSync(BUILD_CONFIG.fallbackDest, notFoundHtml)

  readRoutePaths().forEach((routePath: string) => {
    const dirPath: string = `dist${routePath}`
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, {recursive: true})
    }

    const depth: number = routePath.split("/").filter(Boolean).length
    const relativePrefix: string = "../".repeat(depth)

    const nestedHtml: string = htmlContent
        .replace("href=\"/styles.css\"", `href="${relativePrefix}styles.css"`)
        .replace("src=\"/index.js\"", `src="${relativePrefix}index.js"`)

    fs.writeFileSync(`${dirPath}/index.html`, nestedHtml)
  })
}

function copyImages(): void {
  if (fs.existsSync("src/images")) {
    fs.cpSync("src/images", "dist/images", {recursive: true})
  }
}

/**
 * Copies a static root file to its build destination.
 * @param source - Path to the source file.
 * @param dest - Path to the build output file.
 */
function copyStaticFile(source: string, dest: string): void {
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest)
  }
}

function copyAssets(): void {
  copyHtml()
  copyImages()
  STATIC_ASSETS.forEach((asset: StaticAsset) => copyStaticFile(asset.source, asset.dest))
}

/**
 * Copies static assets again whenever they change during watch mode.
 * @param assets - Static root files to watch.
 */
function watchStaticAssets(assets: StaticAsset[]): void {
  assets.forEach((asset: StaticAsset) => {
    if (!fs.existsSync(asset.source)) {
      return
    }

    fs.watch(asset.source, (eventType: string) => {
      if (eventType !== "change") {
        return
      }

      try {
        copyStaticFile(asset.source, asset.dest)
        console.log(`✓ ${asset.source} updated`)
      } catch (e) {
        console.error(`✗ ${asset.source} copy failed:`, e)
      }
    })
  })
}

/**
 * Builds a sitemap from configured routes and generated docs routes.
 * @param extraPaths - Additional URL paths discovered from the docs tree.
 */
function writeSitemap(extraPaths: string[]): void {
  const allPaths: string[] = ["/", ...readRoutePaths(), ...extraPaths]
  const uniquePaths: string[] = [...new Set(allPaths)]
  const urls: string = uniquePaths
      .map((routePath: string) => {
        const normalized: string = routePath.startsWith("/") ? routePath : `/${routePath}`
        return `  <url><loc>${BUILD_CONFIG.siteUrl}${normalized}</loc></url>`
      })
      .join("\n")

  const sitemap: string = [
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
    "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
    urls,
    "</urlset>",
    "",
  ].join("\n")

  fs.writeFileSync(BUILD_CONFIG.sitemapDest, sitemap)
}

/**
 * Fails the build when a required public file is missing.
 */
function verifyOutput(): void {
  const requiredOutputs: string[] = [
    BUILD_CONFIG.htmlDest,
    BUILD_CONFIG.fallbackDest,
    BUILD_CONFIG.llmsDest,
    BUILD_CONFIG.robotsDest,
    BUILD_CONFIG.sitemapDest,
    "dist/sw.js",
    "dist/manifest.webmanifest",
  ]

  requiredOutputs.forEach((output: string) => {
    if (!fs.existsSync(output)) {
      throw new Error(`Missing build output: ${output}`)
    }
  })
}

async function copyDocRouteFallbacks(): Promise<string[]> {
  const htmlContent: string = fs.readFileSync(BUILD_CONFIG.htmlSource, "utf-8")

  // every .md page in runtime docs tree; url matches DocsPage navigation
  let docPaths: string[] = []
  try {
    const res: Response = await fetch("https://api.github.com/repos/MineKotLang/static/git/trees/main?recursive=1")
    if (res.ok) {
      const tree: { tree: GitHubTreeItem[] } = (await res.json()) as { tree: GitHubTreeItem[] }
      docPaths = tree.tree
          .filter(
              (item: GitHubTreeItem) =>
                  item.type === "blob" && item.path.startsWith("documentation/") && item.path.endsWith(".md"),
          )
          .map((item: GitHubTreeItem) => item.path.replace(/^documentation\//, "").replace(/\.md$/, ""))
    }
  } catch {
    // tree unavailable; sidebar and routes.json fallbacks still apply
  }

  // directory overviews are not files; sidebar indexPaths still need a url
  try {
    const res: Response = await fetch(
        "https://raw.githubusercontent.com/MineKotLang/static/main/documentation/sidebar.json",
    )
    if (res.ok) {
      const sidebar: DocSidebarCategory[] = (await res.json()) as DocSidebarCategory[]
      sidebar.forEach((cat: DocSidebarCategory) => {
        cat.entries.forEach((entry: DocSidebarEntry) => {
          docPaths.push(entry.path.replace(/^\/+/, ""))
          if (entry.indexPath) {
            docPaths.push(entry.indexPath.replace(/^\/+/, ""))
          }
        })
      })
    }
  } catch (error: unknown) {
    console.warn("Sidebar paths unavailable, falling back to local list", error)
  }

  // index.md is a directory root
  // modules/ scripts files are served under /docs/<section>
  const docUrlPaths: string[] = [...new Set(docPaths)]
      .filter((p: string) => p && p !== "")
      .map((p: string) => (p.endsWith("/index") ? p.slice(0, -"/index".length) : p))
      .map((p: string) =>
          p.startsWith("modules/") || p === "modules" || p.startsWith("scripts/") || p === "scripts" ? `docs/${p}` : p,
      )
      .map((p: string) => `/${p}`)
      .filter((p: string) => p !== "/")

  for (const routePath of docUrlPaths) {
    const normalized: string = routePath.replace(/\/+$/, "")
    const dirPath: string = `dist${normalized}`
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, {recursive: true})
    }
    const depth: number = normalized.split("/").filter(Boolean).length
    const relativePrefix: string = "../".repeat(depth)
    const nestedHtml: string = htmlContent
        .replace("href=\"/styles.css\"", `href="${relativePrefix}styles.css"`)
        .replace("src=\"/index.js\"", `src="${relativePrefix}index.js"`)
    fs.writeFileSync(`${dirPath}/index.html`, nestedHtml)
  }

  return docUrlPaths
}

build().catch((err: unknown) => {
  console.error("Build failed:", err)
  process.exit(1)
})
