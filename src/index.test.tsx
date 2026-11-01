import fs from 'node:fs'
import path from 'node:path'

import React from 'react'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import {
  escapeHtml,
  formatTemplate,
  getFallbackLabel,
  normalizePath,
  parseFrontmatter,
  parseMiniMessage,
} from './utils.ts'
import { applyPlaceholders, parseScript } from './scriptSimulator.ts'
import { loadContributors, mergeContributors, type Contributor } from './contributors.ts'
import { applyTheme } from './theme.ts'
import { CommunityPage } from './pages/CommunityPage.tsx'
import { Docs, Footer, Header, Home } from './index.tsx'
import minimessageConfig from './config/minimessage.json'

const originalFetch = globalThis.fetch

beforeEach(() => {
  const globalObj = globalThis as unknown as { hljs: unknown }
  globalObj.hljs = {
    highlightElement: vi.fn(),
    unregisterLanguage: vi.fn(),
    registerLanguage: vi.fn(),
  }

  window.localStorage.clear()
  window.sessionStorage.clear()
  delete document.documentElement.dataset.theme
})

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  globalThis.fetch = originalFetch
})

test('escapeHtml escapes special characters', () => {
  expect(escapeHtml('<div>hello & welcome</div>')).toBe('&lt;div&gt;hello &amp; welcome&lt;/div&gt;')
})

test('parseMiniMessage parses MiniMessage color tags dynamically from config', () => {
  Object.entries(minimessageConfig.colors).forEach(([colorName, colorValue]) => {
    expect(parseMiniMessage(`<${colorName}>test</${colorName}>`)).toBe(
      `<span style="color: ${colorValue};">test</span>`,
    )
  })
})

test('normalizePath cleans and formats paths correctly', () => {
  expect(normalizePath('docs/getting-started/installation.md')).toBe('/docs/getting-started/installation')
  expect(normalizePath('/docs/')).toBe('/docs')
  expect(normalizePath('docs')).toBe('/docs')
})

test('Header renders logo and navigation links', () => {
  const onNavigate = vi.fn()
  render(<Header activePath="/" onNavigate={onNavigate} />)

  expect(screen.getByText('MineKot')).toBeDefined()

  const homeLink = screen.getByText('Home')
  expect(homeLink).toBeDefined()

  fireEvent.click(homeLink)
  expect(onNavigate).toHaveBeenCalledWith('/')
})

test('Footer renders project, community, and resource links', () => {
  const onNavigate = vi.fn()
  render(<Footer onNavigate={onNavigate} />)

  const expectedLinks = [
    'https://github.com/MineKotLang/MineKot',
    'https://github.com/MineKotLang',
    'https://github.com/MineKotLang/minekot.org',
    'https://github.com/MineKotLang/static',
  ]

  expectedLinks.forEach((url) => {
    expect(document.querySelector(`.footer a[href="${url}"]`)).not.toBeNull()
  })

  expect(screen.getByText('Project')).toBeDefined()
  expect(screen.getByText('Community', { selector: '.footer__column-title' })).toBeDefined()
  expect(screen.getByText('Resources')).toBeDefined()

  const docsLink = screen.getByText('Documentation')
  fireEvent.click(docsLink)
  expect(onNavigate).toHaveBeenCalledWith('/docs')

  const discordLink = screen.getByText('Discord')
  expect(discordLink.closest('a')?.getAttribute('target')).toBe('_blank')
  expect(discordLink.closest('a')?.getAttribute('rel')).toBe('noreferrer')

  const creditLink = screen.getByText('harmfulladvocado')
  expect(creditLink.getAttribute('href')).toBe('https://github.com/harmfulladvocado')
  expect(creditLink.getAttribute('target')).toBe('_blank')

  const secondCreditLink = screen.getByText('GuavaDealer')
  expect(secondCreditLink.getAttribute('href')).toBe('https://github.com/GuavaDealer')
  expect(secondCreditLink.getAttribute('target')).toBe('_blank')
})

test('Home renders hero section and console simulator', () => {
  render(<Home />)

  expect(screen.getByText('Minecraft Scripting')).toBeDefined()

  expect(screen.getByText('hello.mkot.kts')).toBeDefined()
  expect(screen.getByText('[Console]')).toBeDefined()

  const runBtn = screen.getByText('Run Script')
  expect(runBtn).toBeDefined()

  expect(screen.getByText('Supported Platforms')).toBeDefined()
  expect(screen.getByText('Paper')).toBeDefined()
  expect(screen.getByText('Fabric')).toBeDefined()
  expect(screen.getByText('NeoForge')).toBeDefined()
  expect(screen.getByText('Velocity')).toBeDefined()

  expect(screen.getAllByText('1.21.8+')).toBeDefined()
  expect(screen.getByText('3.4.0+')).toBeDefined()

  expect(
    screen.getByText('Production-ready server adapter supporting events, scheduler, and player management.'),
  ).toBeDefined()
  expect(
    screen.getByText('Lightweight modded server & client scripting adapter with compile-time side safety.'),
  ).toBeDefined()
  expect(screen.getByText('Modern modded environment support using the unified capability registry.')).toBeDefined()
  expect(
    screen.getByText('High-performance proxy adapter with cross-server scripting and messaging channels.'),
  ).toBeDefined()

  expect(
    screen.getByText(
      'Platform versions represent the minimum verified release. ' +
        'Active compatibility is maintained for newer server and proxy builds.',
    ),
  ).toBeDefined()
})

test('formatTemplate replaces brace placeholders', () => {
  expect(formatTemplate('Hello {name} from {place}', { name: 'MineKot', place: 'Steve' })).toBe(
    'Hello MineKot from Steve',
  )
})

test('parseScript extracts settings, multiple messages, and commands', () => {
  const source = `settings {
    name = "greeter"
    version = "2.0.0"
    author = "team"
}

on<MKPlayerJoinEvent> {
    player.sendMessage("<green>First</green>")
    player.sendMessage("<green>Second, \${player.name}</green>")
}

command("greet", description = "Say hi", aliases = listOf("hi", "hey")) {
    executes {
        reply("<yellow>Hello</yellow>")
        reply("<yellow>Again</yellow>")
    }
}

onLoad {
    info("loaded")
}

onUnload {
    info("unloaded")
}`

  const result = parseScript(source)
  expect(result.script).not.toBeNull()

  const script = result.script
  if (!script) throw new Error('Expected a parsed script')
  expect(script.settings.name).toBe('greeter')
  expect(script.settings.version).toBe('2.0.0')
  expect(script.settings.author).toBe('team')
  expect(script.joinMessages).toEqual(['<green>First</green>', '<green>Second, \${player.name}</green>'])
  expect(script.commands).toHaveLength(1)
  expect(script.commands[0].name).toBe('greet')
  expect(script.commands[0].description).toBe('Say hi')
  expect(script.commands[0].aliases).toEqual(['hi', 'hey'])
  expect(script.commands[0].messages).toEqual(['<yellow>Hello</yellow>', '<yellow>Again</yellow>'])
  expect(script.loadMessages).toEqual(['loaded'])
  expect(script.unloadMessages).toEqual(['unloaded'])
})

test('applyPlaceholders resolves known Kotlin placeholders', () => {
  expect(
    applyPlaceholders('Hi \${player.name}, run \${descriptor.name}', {
      'player.name': 'Steve',
      'descriptor.name': 'hello',
    }),
  ).toBe('Hi Steve, run hello')
})

const CONSOLE_PLACEHOLDER = 'Type a command (e.g. /help, /hello, /minekot help)'

const runConsole = (consoleInput: HTMLInputElement, command: string): void => {
  fireEvent.change(consoleInput, { target: { value: command } })
  fireEvent.keyDown(consoleInput, { key: 'Enter' })
}

test('Home run button loads first and hot-reloads afterwards', async () => {
  render(<Home />)

  const runBtn = screen.getByText('Run Script')
  fireEvent.click(runBtn)

  await waitFor(
    () => {
      expect(screen.getByText(/hello\.mkot\.kts loaded successfully/)).toBeDefined()
    },
    { timeout: 2000 },
  )

  fireEvent.click(runBtn)

  await waitFor(
    () => {
      expect(screen.getByText(/hot-reloaded successfully/)).toBeDefined()
    },
    { timeout: 2000 },
  )
})

test('Home console minekot reports usage and misinput errors', () => {
  render(<Home />)

  const consolePane = document.getElementById('sim-console') as HTMLElement
  const consoleInput = screen.getByPlaceholderText(CONSOLE_PLACEHOLDER) as HTMLInputElement

  runConsole(consoleInput, '/minekot')
  expect(within(consolePane).getByText('Usage: /minekot <help|load|unload|reload|enable|disable|list>')).toBeDefined()

  runConsole(consoleInput, '/minekot bogus')
  expect(within(consolePane).getByText('Unknown subcommand: bogus. Type /minekot help for usage.')).toBeDefined()

  runConsole(consoleInput, '/minekot load hello.txt')
  expect(
    within(consolePane).getByText('hello.txt is not a MineKot script. Scripts use the .mkot.kts extension.'),
  ).toBeDefined()

  runConsole(consoleInput, '/minekot unload')
  expect(within(consolePane).getByText('Usage: /minekot unload <script.mkot.kts>')).toBeDefined()

  runConsole(consoleInput, '/minekot load world.mkot.kts')
  expect(
    within(consolePane).getByText('File not found: scripts/world.mkot.kts. The editor holds hello.mkot.kts.'),
  ).toBeDefined()

  runConsole(consoleInput, '/minekot load')
  runConsole(consoleInput, '/minekot load hello.mkot.kts extra')
  expect(within(consolePane).getAllByText('Usage: /minekot load <script.mkot.kts>').length).toBe(2)
})

test('Home console minekot loads, lists, disables, reloads, and unloads', async () => {
  render(<Home />)

  const consolePane = document.getElementById('sim-console') as HTMLElement
  const consoleInput = screen.getByPlaceholderText(CONSOLE_PLACEHOLDER) as HTMLInputElement

  runConsole(consoleInput, '/minekot list')
  expect(within(consolePane).getAllByText('Loaded scripts (0):').length).toBe(1)
  expect(within(consolePane).getAllByText('hello.mkot.kts - not loaded').length).toBe(1)

  runConsole(consoleInput, '/minekot load hello.mkot.kts')
  await waitFor(
    () => {
      expect(within(consolePane).getByText(/hello\.mkot\.kts loaded successfully/)).toBeDefined()
    },
    { timeout: 2000 },
  )

  runConsole(consoleInput, '/minekot list')
  expect(within(consolePane).getByText('Loaded scripts (1):')).toBeDefined()
  expect(within(consolePane).getByText('hello.mkot.kts - enabled')).toBeDefined()
  expect(within(consolePane).getByText('Unloaded scripts (0):')).toBeDefined()
  expect(within(consolePane).getAllByText('(none)').length).toBe(2)

  runConsole(consoleInput, '/minekot disable hello.mkot.kts')
  expect(within(consolePane).getByText('[hello] Script hello.mkot.kts disabled')).toBeDefined()

  fireEvent.click(screen.getByText('Simulate Player Join'))
  expect(within(consolePane).getByText('Steve triggered MKPlayerJoinEvent but script hello is disabled.')).toBeDefined()

  runConsole(consoleInput, '/minekot list')
  expect(within(consolePane).getByText('hello.mkot.kts - disabled')).toBeDefined()

  runConsole(consoleInput, '/minekot enable hello.mkot.kts')
  expect(within(consolePane).getByText('[hello] Script hello.mkot.kts enabled')).toBeDefined()

  runConsole(consoleInput, '/minekot enable hello.mkot.kts')
  expect(within(consolePane).getByText('hello.mkot.kts is already enabled.')).toBeDefined()

  runConsole(consoleInput, '/mkot list')
  expect(within(consolePane).getAllByText('hello.mkot.kts - enabled').length).toBe(2)
  expect(within(consolePane).getAllByText('(none)').length).toBe(4)

  runConsole(consoleInput, '/mkot reload hello.mkot.kts')
  await waitFor(
    () => {
      expect(within(consolePane).getByText(/hot-reloaded successfully/)).toBeDefined()
    },
    { timeout: 2000 },
  )

  runConsole(consoleInput, '/mkot unload hello.mkot.kts')
  expect(within(consolePane).getByText('[hello] Script hello.mkot.kts unloaded')).toBeDefined()

  runConsole(consoleInput, '/minekot list')
  expect(within(consolePane).getAllByText('Loaded scripts (0):').length).toBe(2)
  expect(within(consolePane).getAllByText('hello.mkot.kts - not loaded').length).toBe(2)
  expect(within(consolePane).getAllByText('(none)').length).toBe(5)
})

test('parseScript reports missing settings', () => {
  expect(parseScript('on<MKPlayerJoinEvent> { player.sendMessage("Hi") }').issues).toContain('MISSING_SETTINGS')
})

test('Home editor runs edited scripts with multiple messages', async () => {
  render(<Home />)

  const editor = screen.getByLabelText('Editable MineKot script') as HTMLTextAreaElement
  fireEvent.change(editor, {
    target: {
      value: `settings {
    name = "edited"
    version = "1.0.0"
    author = "you"
}

on<MKPlayerJoinEvent> {
    player.sendMessage("<green>Edited one</green>")
    player.sendMessage("<green>Edited two</green>")
}

command("greet") {
    executes {
        reply("<yellow>Edited command</yellow>")
    }
}`,
    },
  })

  fireEvent.click(screen.getByText('Run Script'))

  await waitFor(
    () => {
      expect(screen.getByText(/edited\.mkot\.kts loaded successfully/)).toBeDefined()
    },
    { timeout: 2000 },
  )

  fireEvent.click(screen.getByText('Simulate Player Join'))

  const consolePane = document.getElementById('sim-console') as HTMLElement

  await waitFor(() => {
    expect(within(consolePane).getByText('Edited one')).toBeDefined()
    expect(within(consolePane).getByText('Edited two')).toBeDefined()
  })

  const consoleInput = screen.getByPlaceholderText(
    'Type a command (e.g. /help, /hello, /minekot help)',
  ) as HTMLInputElement
  fireEvent.change(consoleInput, { target: { value: '/greet' } })
  fireEvent.keyDown(consoleInput, { key: 'Enter' })

  await waitFor(() => {
    expect(within(consolePane).getByText('Edited command')).toBeDefined()
  })
})

test('parseScript reports whether a join handler is registered', () => {
  const withoutHandler = parseScript(`settings {
    name = "plain"
}`)
  expect(withoutHandler.script?.hasJoinHandler).toBe(false)

  const withHandler = parseScript(`settings {
    name = "plain"
}

on<MKPlayerJoinEvent> {
}`)
  expect(withHandler.script?.hasJoinHandler).toBe(true)
})

test('Home executes commands and aliases declared in the editor', async () => {
  render(<Home />)

  fireEvent.click(screen.getByText('Run Script'))

  await waitFor(
    () => {
      expect(screen.getByText(/hello\.mkot\.kts loaded successfully/)).toBeDefined()
    },
    { timeout: 2000 },
  )

  const consolePane = document.getElementById('sim-console') as HTMLElement
  const consoleInput = screen.getByPlaceholderText(CONSOLE_PLACEHOLDER) as HTMLInputElement

  runConsole(consoleInput, '/hello')
  expect(within(consolePane).getByText('Hello from hello!')).toBeDefined()
  expect(within(consolePane).getByText('This script is running live in your browser.')).toBeDefined()
  expect(within(consolePane).queryByText('Hello, Steve!')).toBeNull()

  runConsole(consoleInput, '/hi')
  expect(within(consolePane).getAllByText('Hello from hello!').length).toBe(2)
})

test('Home does not trigger a join event that is not in the editor', async () => {
  render(<Home />)

  const editor = screen.getByLabelText('Editable MineKot script') as HTMLTextAreaElement
  fireEvent.change(editor, {
    target: {
      value: `settings {
    name = "nohandler"
}`,
    },
  })

  fireEvent.click(screen.getByText('Run Script'))

  await waitFor(
    () => {
      expect(screen.getByText(/nohandler\.mkot\.kts loaded successfully/)).toBeDefined()
    },
    { timeout: 2000 },
  )

  fireEvent.click(screen.getByText('Simulate Player Join'))

  const consolePane = document.getElementById('sim-console') as HTMLElement
  expect(
    within(consolePane).getByText('[nohandler] No MKPlayerJoinEvent handler found in the script.'),
  ).toBeDefined()
  expect(within(consolePane).queryByText(/MKPlayerJoinEvent triggered/)).toBeNull()
})

test('Docs fetches sidebar and handles page rendering', async () => {
  const mockContent = '# Installation Guide\n```kotlin\nval player = getPlayer("GuavaDealer")\n```'

  const fetchMock = vi.fn().mockImplementation((url: string) => {
    if (url.includes('git/trees')) {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            tree: [
              { type: 'blob', path: 'documentation/getting-started/installation.md' },
              { type: 'blob', path: 'documentation/modules/exposed.md' },
              { type: 'blob', path: 'documentation/scripts/hello.md' },
            ],
          }),
      })
    }
    if (url.includes('documentation/docs/getting-started/installation.md')) {
      return Promise.resolve({
        ok: true,
        text: () => Promise.resolve(mockContent),
      })
    }
    return Promise.resolve({ ok: false, status: 404 })
  })
  globalThis.fetch = fetchMock

  const onNavigate = vi.fn()
  render(<Docs activePath="/docs/getting-started/installation" onNavigate={onNavigate} />)

  expect(screen.getByText('Loading sidebar...')).toBeDefined()

  await waitFor(() => {
    expect(screen.getByText('Getting Started')).toBeDefined()
    expect(screen.getByText('Installation')).toBeDefined()
    expect(screen.getByText('Modules')).toBeDefined()
    expect(screen.getByText('Exposed')).toBeDefined()
    expect(screen.getByText('Scripts')).toBeDefined()
    expect(screen.getByText('Hello')).toBeDefined()
  })

  await waitFor(() => {
    expect(
      fetchMock.mock.calls.some(
        (call) =>
          call[0] === 'https://static.minekot.org/documentation/docs/getting-started/installation.md',
      ),
    ).toBe(true)
  })

  await waitFor(() => {
    expect(screen.getByText('Installation Guide')).toBeDefined()
  })
})

test('Docs fetches index.md when activePath is /docs and sidebar item path is /docs/', async () => {
  const mockContent = '# Overview\nWelcome.'

  const fetchMock = vi.fn().mockImplementation((url: string) => {
    if (url.includes('git/trees')) {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            tree: [{ type: 'blob', path: 'documentation/index.md' }],
          }),
      })
    }
    if (url.endsWith('/documentation/docs/index.md')) {
      return Promise.resolve({
        ok: true,
        text: () => Promise.resolve(mockContent),
      })
    }
    return Promise.resolve({ ok: false, status: 404 })
  })
  globalThis.fetch = fetchMock

  render(<Docs activePath="/docs" onNavigate={vi.fn()} />)

  await waitFor(() => {
    expect(screen.getByText('Overview')).toBeDefined()
  })

  expect(
    fetchMock.mock.calls.some(
      (call) =>
        call[0] === 'https://static.minekot.org/documentation/docs/index.md',
    ),
  ).toBe(true)
})

const FA_V7_STABLE_MARKER = '@fortawesome/fontawesome-free@7.3.0'
const FA_V6_UNSTABLE_MARKER = 'font-awesome/6.'

const readIndexHtml = (): string => {
  const htmlPath = path.resolve(__dirname, './index.html')
  return fs.readFileSync(htmlPath, 'utf-8')
}

test('index.html loads the requested Font Awesome version (v7)', () => {
  const htmlContent = readIndexHtml()
  expect(htmlContent).toContain(FA_V7_STABLE_MARKER)
  expect(htmlContent).not.toContain(FA_V6_UNSTABLE_MARKER)
})

test('index.html Font Awesome assets have correct MIME types and headers', async () => {
  const htmlContent = readIndexHtml()

  const match = htmlContent.match(
    /href="(https:\/\/cdn\.jsdelivr\.net\/npm\/@fortawesome\/[^\s"]+css\/all\.min\.css)"/,
  )
  expect(match).not.toBeNull()
  if (!match) throw new Error('Expected a Font Awesome stylesheet link')
  const cssUrl = match[1]

  const cssRes = await originalFetch(cssUrl, { method: 'HEAD' })
  expect(cssRes.status).toBe(200)
  expect(cssRes.headers.get('content-type')).toContain('text/css')

  // Fetch font files to ensure proper MIME type (avoiding generic octet-stream or sanitizer rejections)
  const fontUrl = cssUrl.replace('css/all.min.css', 'webfonts/fa-solid-900.woff2')
  const fontRes = await originalFetch(fontUrl, { method: 'HEAD' })
  expect(fontRes.status).toBe(200)
  expect(fontRes.headers.get('content-type')).toContain('font/woff2')
}, 15000)

test('parseFrontmatter correctly parses YAML frontmatter', () => {
  const raw = `---
title: "Custom Installation Guide"
tag: "GUIDE"
root: "some.root.path"
---
# Actual Content here`
  const { content, metadata } = parseFrontmatter(raw)
  expect(content).toBe('# Actual Content here')
  expect(metadata.title).toBe('Custom Installation Guide')
  expect(metadata.tag).toBe('GUIDE')
  expect(metadata.root).toBe('some.root.path')
})

test('Docs page parses frontmatter and renders custom title and tag', async () => {
  const mockContent = `---
title: Custom Page Title
tag: SPECIAL_TAG
---
# Content`

  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    text: () => Promise.resolve(mockContent),
  })

  render(<Docs activePath="/docs/install" onNavigate={vi.fn()} />)

  await waitFor(() => {
    expect(screen.getAllByText('Custom Page Title').length).toBeGreaterThan(0)
    expect(screen.getByText('SPECIAL_TAG')).toBeDefined()
  })
})

test('getFallbackLabel computes capitalized label from path', () => {
  expect(getFallbackLabel('/docs/getting-started/installation.md')).toBe('Installation')
  expect(getFallbackLabel('/docs/advanced-topics/new_concepts')).toBe('New Concepts')
  expect(getFallbackLabel('/modules/community/sample-addon-1/')).toBe('Sample Addon 1')
})

test('Docs page handles sidebar items without labels using getFallbackLabel', async () => {
  const mockContent = 'Content'

  const fetchMock = vi.fn().mockImplementation((url: string) => {
    if (url.includes('git/trees')) {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            tree: [{ type: 'blob', path: 'documentation/getting-started/installation.md' }],
          }),
      })
    }
    if (url.includes('documentation/docs/getting-started/installation.md')) {
      return Promise.resolve({
        ok: true,
        text: () => Promise.resolve(mockContent),
      })
    }
    return Promise.resolve({ ok: false, status: 404 })
  })
  globalThis.fetch = fetchMock

  render(<Docs activePath="/docs/getting-started/installation" onNavigate={vi.fn()} />)

  await waitFor(() => {
    expect(screen.getByText('Getting Started')).toBeDefined()
    expect(screen.getByText('Installation')).toBeDefined()
  })
})

test('Docs page displays error message when fetch fails (e.g. 404)', async () => {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: false,
    status: 404,
    statusText: 'Not Found',
    text: () => Promise.resolve('Some 404 page HTML with minekotlang/static'),
  })

  render(<Docs activePath="/docs/getting-started/installation" onNavigate={vi.fn()} />)

  await waitFor(() => {
    expect(screen.getByText('Error')).toBeDefined()
    expect(screen.getByText(/Failed to render page:.*Page not found\./)).toBeDefined()
  })
})

test('index.html applies the stored theme before the app boots', () => {
  const htmlContent = readIndexHtml()
  expect(htmlContent).toContain('localStorage.getItem("theme")')
})

test('Header theme toggle switches the document theme and persists it', () => {
  applyTheme('dark')
  render(<Header activePath="/" onNavigate={vi.fn()} />)

  fireEvent.click(screen.getByLabelText('Switch to light mode'))
  expect(document.documentElement.dataset.theme).toBe('light')
  expect(window.localStorage.getItem('theme')).toBe('light')
  expect(screen.getByLabelText('Switch to dark mode')).toBeDefined()

  fireEvent.click(screen.getByLabelText('Switch to dark mode'))
  expect(document.documentElement.dataset.theme).toBe('dark')
  expect(window.localStorage.getItem('theme')).toBe('dark')
})

test('mergeContributors dedupes by login, sums contributions, and drops bots', () => {
  const contributor = (login: string, contributions: number): Contributor => ({
    login,
    avatarUrl: `https://avatars.example/${login}`,
    profileUrl: `https://github.com/${login}`,
    contributions,
  })

  const merged = mergeContributors([
    [contributor('Alice', 5), contributor('dependabot[bot]', 99)],
    [contributor('alice', 3), contributor('Bob', 10)],
  ])

  expect(merged.map((entry) => entry.login)).toEqual(['Bob', 'Alice'])
  expect(merged[1].contributions).toBe(8)
})

test('loadContributors serves cached contributors without fetching', async () => {
  const cached: Contributor[] = [
    {
      login: 'Cached',
      avatarUrl: 'https://avatars.example/cached',
      profileUrl: 'https://github.com/cached',
      contributions: 4,
    },
  ]
  window.localStorage.setItem(
    'contributors-cache',
    JSON.stringify({ savedAt: Date.now(), contributors: cached }),
  )

  const fetchMock = vi.fn()
  globalThis.fetch = fetchMock

  await expect(loadContributors()).resolves.toEqual(cached)
  expect(fetchMock).not.toHaveBeenCalled()
})

test('Community page merges organization and MineKot repository contributors', async () => {
  const fetchMock = vi.fn().mockImplementation((url: string) => {
    if (url.includes('/orgs/MineKotLang/repos')) {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            { contributors_url: 'https://api.github.com/repos/MineKotLang/minekot.org/contributors' },
            { contributors_url: 'https://api.github.com/repos/MineKotLang/static/contributors' },
          ]),
      })
    }
    if (url.includes('MineKotLang/MineKot/contributors')) {
      return Promise.resolve({ ok: false, status: 404 })
    }
    if (url.includes('MineKotLang/minekot.org/contributors')) {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              login: 'Alice',
              avatar_url: 'https://avatars.example/alice',
              html_url: 'https://github.com/Alice',
              contributions: 5,
            },
          ]),
      })
    }
    if (url.includes('MineKotLang/static/contributors')) {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              login: 'Alice',
              avatar_url: 'https://avatars.example/alice',
              html_url: 'https://github.com/Alice',
              contributions: 3,
            },
            {
              login: 'Bob',
              avatar_url: 'https://avatars.example/bob',
              html_url: 'https://github.com/Bob',
              contributions: 10,
            },
            {
              login: 'dependabot[bot]',
              avatar_url: 'https://avatars.example/bot',
              html_url: 'https://github.com/apps/dependabot',
              contributions: 99,
            },
          ]),
      })
    }
    return Promise.resolve({ ok: false, status: 404 })
  })
  globalThis.fetch = fetchMock

  render(<CommunityPage />)

  await waitFor(() => {
    expect(screen.getByText('Bob')).toBeDefined()
    expect(screen.getByText('Alice')).toBeDefined()
  })

  expect(screen.getByText('10 contributions')).toBeDefined()
  expect(screen.getByText('8 contributions')).toBeDefined()
  expect(screen.queryByText(/dependabot/)).toBeNull()
  expect(document.querySelector('.community-card__avatar')).not.toBeNull()

  expect(fetchMock).toHaveBeenCalledWith('https://api.github.com/orgs/MineKotLang/repos?per_page=100')
  expect(fetchMock).toHaveBeenCalledWith(
    'https://api.github.com/repos/MineKotLang/MineKot/contributors?per_page=100',
  )
})

test('Community page shows an error note when GitHub sources fail', async () => {
  globalThis.fetch = vi.fn().mockResolvedValue({ ok: false, status: 403 })

  render(<CommunityPage />)

  await waitFor(() => {
    expect(screen.getByText('Contributors are unavailable right now.')).toBeDefined()
  })
})
