import { readCached, writeCached } from './docs-cache.ts'
import { parseFrontmatter } from './utils.ts'

export interface SearchEntry {
  path: string
  title: string
  text: string
}

export interface SearchResult {
  path: string
  title: string
  snippet: string
}

interface CachedIndex {
  entries: SearchEntry[]
  savedAt?: number
}

const TREE_URL = 'https://api.github.com/repos/MineKotLang/static/git/trees/main?recursive=1'
const RAW_URL = 'https://raw.githubusercontent.com/MineKotLang/static/main/documentation/'
const CACHE_KEY = 'search-index'
const FETCH_CHUNK = 8
const MAX_RESULTS = 25
const SNIPPET_LENGTH = 140
const INDEX_TTL = 60 * 60 * 1000

/**
 * Strips Markdown syntax and code blocks so indexed text stays readable.
 * @param raw - Raw markdown content.
 * @returns Cleaned single-line plain text.
 */
const stripMarkdown = (raw: string): string => {
  const withoutFences = raw.replace(/```[\s\S]*?```/g, ' ').replace(/`[^`\n]*`/g, ' ')
  return withoutFences
    .replace(/[#>*_~|[\]()!:-]/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const fetchText = async (url: string): Promise<string | null> => {
  try {
    const res = await fetch(url)
    return res.ok ? await res.text() : null
  } catch {
    return null
  }
}

/**
 * Fetches a single markdown file and converts it to a searchable entry.
 * @param filePath - Path relative to the documentation root, without .md suffix.
 * @returns Entry or null when the file is unreachable.
 */
const fetchEntry = async (filePath: string): Promise<SearchEntry | null> => {
  const raw = (await fetchText(`${RAW_URL}${filePath}/index.md`)) ?? (await fetchText(`${RAW_URL}${filePath}.md`))
  if (!raw) {
    return null
  }

  const { metadata, content } = parseFrontmatter(raw)
  return { path: filePath, title: metadata.title || metadata.label || filePath, text: stripMarkdown(content) }
}

/**
 * Collects documentation markdown paths from the repository tree.
 * @returns Paths relative to documentation root, index files deduplicated to their folder.
 */
const collectPaths = async (): Promise<string[]> => {
  const res = await fetch(TREE_URL)
  if (!res.ok) throw new Error('Failed to list documentation tree')
  const data = await res.json()
  const paths = (data.tree as { path: string; type: string }[])
    .filter((item) => item.type === 'blob' && item.path.startsWith('documentation/') && item.path.endsWith('.md'))
    .map((item) => item.path.replace(/^documentation\//, '').replace(/\.md$/, ''))
    .map((path) => (path.endsWith('/index') ? path.replace(/\/index$/, '') : path))
  return Array.from(new Set(paths))
}

/**
 * Builds the full text index by fetching every documentation markdown file in small chunks.
 * @returns Search index entries, unreachable files are skipped.
 */
const buildIndex = async (): Promise<SearchEntry[]> => {
  const paths = await collectPaths()
  const entries: SearchEntry[] = []

  for (let i = 0; i < paths.length; i += FETCH_CHUNK) {
    const chunk = await Promise.all(paths.slice(i, i + FETCH_CHUNK).map(fetchEntry))
    chunk.forEach((entry) => {
      if (entry) entries.push(entry)
    })
  }

  return entries
}

/**
 * Loads the search index from cache or rebuilds it by pulling every doc file.
 * @returns Search index entries or null when the index could not be built.
 */
export const loadSearchIndex = async (): Promise<SearchEntry[] | null> => {
  const cached = readCached<CachedIndex>(CACHE_KEY)
  if (cached?.entries?.length) {
    const savedAt = cached.savedAt ?? 0
    if (Date.now() - savedAt < INDEX_TTL) {
      return cached.entries
    }
  }

  try {
    const entries = await buildIndex()
    if (entries.length) {
      writeCached<CachedIndex>(CACHE_KEY, { entries, savedAt: Date.now() })
    }
    return entries
  } catch {
    if (cached?.entries?.length) {
      return cached.entries
    }
    return null
  }
}

/**
 * Searches all indexed doc pages by title and body content.
 * @param index - Index entries produced by loadSearchIndex.
 * @param query - Raw user query, matches per term are unioned and ranked.
 * @returns Ranked results with a short content snippet, most relevant first.
 */
export const searchDocs = (index: SearchEntry[], query: string): SearchResult[] => {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (!terms.length || !index.length) return []

  const scored = new Map<string, { entry: SearchEntry; score: number }>()

  index.forEach((entry) => {
    const title = entry.title.toLowerCase()
    const text = entry.text.toLowerCase()
    let score = 0

    terms.forEach((term) => {
      if (title.includes(term)) score += 10
      if (text.includes(term)) score += 1
    })

    if (score > 0) {
      const existing = scored.get(entry.path)
      if (!existing) scored.set(entry.path, { entry, score })
    }
  })

  return Array.from(scored.values())
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, MAX_RESULTS)
    .map(({ entry }) => ({ path: entry.path, title: entry.title, snippet: buildSnippet(entry.text, terms) }))
}

const buildSnippet = (text: string, terms: string[]): string => {
  const lower = text.toLowerCase()
  const first = terms.map((term) => lower.indexOf(term)).find((idx) => idx !== -1) ?? 0
  const start = Math.max(0, first - SNIPPET_LENGTH / 2)
  const snippet = text.slice(start, start + SNIPPET_LENGTH).trim()
  return start > 0 ? `...${snippet}` : snippet
}
