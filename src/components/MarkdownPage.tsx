import React, { useEffect, useState } from 'react'
import { marked } from 'marked'

import { parseFrontmatter } from '../utils.ts'
import { useMessages } from '../hooks/useLanguage.tsx'
import highlightingConfig from '../config/highlighting.json'

interface HljsRule {
  [key: string]: unknown
  className?: string
  begin?: RegExp | string
  end?: RegExp | string
  contains?: HljsRule[]
  variants?: HljsRule[]
}

interface HljsLanguage {
  [key: string]: unknown
  name?: string
  aliases?: string[]
  keywords?: string | { keyword?: string; built_in?: string; type?: string; literal?: string }
  contains?: HljsRule[]
  rawDefinition?(): HljsLanguage
  __customMineKot?: boolean
}

declare const hljs: {
  highlightElement(element: HTMLElement): void
  getLanguage?(name: string): HljsLanguage | undefined
  unregisterLanguage?(name: string): void
  registerLanguage?(name: string, factory: () => HljsLanguage): void
}

interface RawRule {
  className?: string
  begin?: string
  end?: string
  contains?: RawRule[]
}

function parseRule(rule: RawRule, addMarker = false): HljsRule {
  const result: HljsRule = {}
  if ('className' in rule) {
    result.className = rule.className
  }
  if ('begin' in rule) {
    result.begin = new RegExp(rule.begin)
  }
  if ('end' in rule) {
    result.end = new RegExp(rule.end)
  }
  if ('contains' in rule) {
    result.contains = rule.contains.map((r) => parseRule(r, false))
  }
  if (addMarker) {
    result.__customMineKot = true
  }
  return result
}

function getListAsString(val: unknown): string {
  if (!val) return ''
  if (Array.isArray(val)) {
    return val.join(' ')
  }
  return String(val)
}

function getCustomRules(): HljsRule[] {
  return highlightingConfig.rules.map((rule) => parseRule(rule, true))
}

function extendKeywords(raw: HljsLanguage): void {
  if (!raw.keywords) return
  const extraKeywordsStr = getListAsString(highlightingConfig['extra-keywords'])
  const extraTypesStr = getListAsString(highlightingConfig['extra-types'])

  if (typeof raw.keywords === 'string') {
    raw.keywords += extraKeywordsStr ? ' ' + extraKeywordsStr : ''
  } else if (typeof raw.keywords === 'object') {
    raw.keywords.keyword = (raw.keywords.keyword || '') + (extraKeywordsStr ? ' ' + extraKeywordsStr : '')
    raw.keywords.built_in = (raw.keywords.built_in || '') + (extraTypesStr ? ' ' + extraTypesStr : '')
  }
}

function extendContains(raw: HljsLanguage): void {
  if (!raw.contains) return
  const hasCustomRule = raw.contains.some((rule) => rule.__customMineKot)
  if (hasCustomRule) return

  raw.contains.unshift(...getCustomRules())
}

function tryExtendKotlinLanguage(kt?: HljsLanguage): boolean {
  if (!kt || typeof kt.rawDefinition !== 'function') return false
  try {
    const raw = kt.rawDefinition()
    extendKeywords(raw)
    extendContains(raw)
    hljs.unregisterLanguage?.('kotlin')
    hljs.registerLanguage?.('kotlin', () => raw)
    return true
  } catch (e) {
    console.warn('Failed to extend Kotlin highlighter, falling back:', e)
    return false
  }
}

function registerFallbackKotlinLanguage(): void {
  const extraKeywordsStr = getListAsString(highlightingConfig['extra-keywords'])
  const extraTypesStr = getListAsString(highlightingConfig['extra-types'])

  hljs.registerLanguage?.('kotlin', () => ({
    name: 'kotlin',
    aliases: ['kt', 'kts'],
    keywords: {
      keyword:
        'val var fun class object interface import package return if else when for while do try catch finally throw ' +
        'as is in this super break continue private protected public internal open override abstract final data sealed ' +
        'enum companion constructor init inline tailrec operator infix external suspend' +
        (extraKeywordsStr ? ' ' + extraKeywordsStr : ''),
      type: extraTypesStr,
      literal: 'true false null',
    },
    contains: [
      {
        className: 'comment',
        variants: [
          { begin: '//', end: '$' },
          { begin: '/\\*', end: '\\*/' },
        ],
      },
      {
        className: 'string',
        variants: [
          { begin: '"""', end: '"""' },
          { begin: '"', end: '"', contains: [{ begin: '\\\\.' }] },
        ],
      },
      {
        className: 'number',
        begin: '\\b\\d+(\\.\\d+)?\\b',
      },
      ...highlightingConfig.rules.map((rule) => parseRule(rule, false)),
    ],
  }))
}

/**
 * Registers the custom Kotlin highlighter.
 */
const setupCustomHighlighter = (): void => {
  if (typeof hljs === 'undefined') return

  const kt = typeof hljs.getLanguage === 'function' ? hljs.getLanguage('kotlin') : undefined
  if (tryExtendKotlinLanguage(kt)) {
    return
  }

  try {
    hljs.unregisterLanguage?.('kotlin')
  } catch (error: unknown) {
    console.warn('Kotlin highlighter could not be unregistered', error)
  }

  registerFallbackKotlinLanguage()
}

/**
 * Loads Markdown from a URL and renders it to HTML.
 * @param url - Markdown file URL.
 * @returns Render state for the Markdown content.
 */
export const useMarkdownPage = (url: string): { html: string; loading: boolean; error: string } => {
  const [html, setHtml] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setLoading(true)
    setError('')

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
        return res.text()
      })
      .then(async (raw) => {
        const { content } = parseFrontmatter(raw)
        setHtml(await marked.parse(content))
        setLoading(false)
      })
      .catch((err: Error) => {
        setError(err.message)
        setLoading(false)
      })
  }, [url])

  return { html, loading, error }
}

function addCopyButtons(selector: string, copyLabel: string): void {
  const blocks = document.querySelectorAll(selector)
  blocks.forEach((block) => {
    const pre = block.parentElement
    if (!pre || pre.tagName !== 'PRE') return

    const existing = pre.querySelector('.code-copy-btn')
    if (existing) {
      existing.setAttribute('aria-label', copyLabel)
      existing.setAttribute('title', copyLabel)
      return
    }

    const btn = document.createElement('button')
    btn.className = 'code-copy-btn'
    btn.type = 'button'
    btn.setAttribute('aria-label', copyLabel)
    btn.setAttribute('title', copyLabel)
    btn.innerHTML = '<i class="fa-regular fa-copy"></i>'

    btn.addEventListener('click', async () => {
      const code = block.textContent || ''
      try {
        await navigator.clipboard.writeText(code)
        btn.innerHTML = '<i class="fa-solid fa-check"></i>'
        btn.classList.add('copied')
        setTimeout(() => {
          btn.innerHTML = '<i class="fa-regular fa-copy"></i>'
          btn.classList.remove('copied')
        }, 1500)
      } catch {
        btn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        btn.classList.add('failed')
        setTimeout(() => {
          btn.innerHTML = '<i class="fa-regular fa-copy"></i>'
          btn.classList.remove('failed')
        }, 1500)
      }
    })

    pre.style.position = 'relative'
    pre.appendChild(btn)
  })
}

/**
 * Highlights matching code blocks and adds copy buttons.
 * @param selector - Selector for code blocks to highlight.
 * @param copyLabel - Accessible label for copy buttons.
 */
export const highlightAllCodeBlocks = (selector: string, copyLabel: string): void => {
  if (typeof hljs === 'undefined') {
    console.warn('highlightAllCodeBlocks: hljs is undefined!')
    return
  }
  setupCustomHighlighter()
  const blocks = document.querySelectorAll(selector)
  blocks.forEach((block, idx) => {
    const element = block as HTMLElement
    const currentClass = element.className || ''
    const isKotlin = !currentClass || ['kotlin', 'kt', 'kts'].some((lang) => currentClass.includes(lang))
    if (isKotlin) {
      element.className = 'language-kotlin'
    }
    delete element.dataset.highlighted
    element.removeAttribute('data-highlighted')
    hljs.highlightElement(element)
  })
  addCopyButtons(selector, copyLabel)
}

/**
 * Page shell with a title and Markdown content.
 * @returns The page shell element.
 */
export const MarkdownPageShell: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const messages = useMessages()

  useEffect(() => {
    highlightAllCodeBlocks('.page-shell pre code', messages['copy-code'])
  }, [messages])

  return (
    <div className="page-shell">
      <h1 className="page-shell__title">{title}</h1>
      {children}
    </div>
  )
}

/**
 * Renders Markdown state with loading and error handling.
 * @returns The rendered Markdown content.
 */
export const MarkdownRenderer: React.FC<{ html: string; loading: boolean; error: string }> = ({
  html,
  loading,
  error,
}) => {
  const messages = useMessages()

  useEffect(() => {
    if (!loading && html) highlightAllCodeBlocks('.page-shell pre code', messages['copy-code'])
  }, [loading, html, messages])

  if (loading) return null
  if (error) return <p className="error">{error}</p>
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
