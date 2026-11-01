import React, { useEffect, useRef, useState } from 'react'
import { marked } from 'marked'

import { useMessages } from '../hooks/useLanguage.tsx'
import { highlightAllCodeBlocks } from '../components/MarkdownPage.tsx'
import { escapeHtml, getFallbackLabel, parseFrontmatter } from '../utils.ts'
import docsConfig from '../config/docs.json'
import { CACHE_KEYS, readCached, writeCached, purgeDocsCache } from '../docs-cache.ts'
import { loadSearchIndex, searchDocs, type SearchEntry, type SearchResult } from '../docsSearch.ts'

interface PageState {
  html: string
  meta: Record<string, string>
  loading: boolean
  error: string
}

interface CachedPage {
  html: string
  meta: Record<string, string>
}

interface TreeNode {
  name: string
  path: string
  isDir: boolean
  children: Record<string, TreeNode>
}

interface GitHubTreeItem {
  path: string
  type: string
}

const ROOT_LABEL_KEYS: Record<string, string> = {
  docs: 'docs-sidebar-title',
  modules: 'docs-title-modules',
  scripts: 'docs-title-scripts',
}

const BADGE_LABEL_KEYS: Record<string, string> = {
  GUIDE: 'docs-badge-guides',
  MODULE: 'docs-badge-modules',
  SCRIPT: 'docs-badge-scripts',
}

const getUrlPath = (physical: string): string => {
  if (physical === 'modules' || physical.startsWith('modules/')) return `docs/${physical}`
  if (physical === 'scripts' || physical.startsWith('scripts/')) return `docs/${physical}`
  return physical
}

const getPhysicalPath = (url: string): string => {
  const clean = url.replace(/^\/+/, '')
  // guides live under documentation/docs, only modules/scripts drop the prefix
  if (clean === 'docs/modules' || clean.startsWith('docs/modules/')) return clean.replace(/^docs\//, '')
  if (clean === 'docs/scripts' || clean.startsWith('docs/scripts/')) return clean.replace(/^docs\//, '')
  return clean
}

const dedupePathSegments = (path: string): string => {
  const parts = path.replace(/^\/+/, '').split('/')
  const deduped: string[] = []
  for (const part of parts) {
    if (part && deduped[deduped.length - 1] !== part) deduped.push(part)
  }
  return deduped.join('/')
}

/**
 * Documentation page with sidebar and search.
 * @returns The docs page element.
 */
export const DocsPage: React.FC<{ activePath: string; onNavigate: (path: string) => void }> = ({
  activePath: rawActivePath,
  onNavigate,
}) => {
  const messages = useMessages()
  // foo/index -> foo; index.md is a directory root
  const activePath = rawActivePath.replace(/\/index$/, '')

  const [page, setPage] = useState<PageState>({ html: '', meta: {}, loading: true, error: '' })
  const [sidebarTree, setSidebarTree] = useState<TreeNode | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [searchQuery, setSearchQuery] = useState('')
  const [searchIndex, setSearchIndex] = useState<SearchEntry[]>([])
  const [searchFailed, setSearchFailed] = useState(false)
  const [indexLoading, setIndexLoading] = useState(false)

  const ensureIndex = (): void => {
    if (searchIndex.length || indexLoading || searchFailed) return
    setIndexLoading(true)
    loadSearchIndex()
      .then((entries) => {
        if (entries && entries.length) {
          setSearchIndex(entries)
        } else {
          setSearchFailed(true)
        }
      })
      .finally(() => setIndexLoading(false))
  }

  const searchResults: SearchResult[] =
    searchQuery.trim() && !indexLoading && searchIndex.length ? searchDocs(searchIndex, searchQuery) : []

  let rootSegment = 'docs'
  if (activePath.startsWith('docs/modules')) rootSegment = 'modules'
  else if (activePath.startsWith('docs/scripts')) rootSegment = 'scripts'

  useEffect(() => {
    const container = contentRef.current
    if (!container) return

    const handleClick = (e: MouseEvent): void => {
      const anchor = (e.target as HTMLElement).closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      if (/^https?:\/\//.test(href) || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return
      }

      e.preventDefault()

      let resolved = href.replace(/\.md$/, '')
      resolved = resolved.replace(/\/+/g, '/')
      if (resolved.startsWith('//')) {
        resolved = resolved.slice(1)
      }
      resolved = dedupePathSegments(resolved)
      onNavigate(resolved)
    }

    container.addEventListener('click', handleClick)
    return () => container.removeEventListener('click', handleClick)
  }, [activePath, onNavigate])

  useEffect(() => {
    const links = document.querySelectorAll('.docs-sidebar__link, .header__link, .footer__link, .hero__btn')
    links.forEach((link) => {
      const href = link.getAttribute('href')
      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) {
        return
      }
      if ('prefetch' in document.createElement('link')) {
        try {
          const prefetchLink = document.createElement('link')
          prefetchLink.rel = 'prefetch'
          prefetchLink.href = href
          document.head.appendChild(prefetchLink)
        } catch (error: unknown) {
          console.debug('Prefetch skipped', href, error)
        }
      }
    })
  }, [activePath])

  useEffect(() => {
    const cachedTree = readCached<TreeNode>(CACHE_KEYS.sidebarTree)
    if (cachedTree) {
      setSidebarTree(cachedTree)
      return
    }

    fetch('https://api.github.com/repos/MineKotLang/static/git/trees/main?recursive=1')
      .then((res) => res.json() as Promise<{ tree?: GitHubTreeItem[] }>)
      .then((data) => {
        if (!data.tree) throw new Error('Invalid tree data')
        const root: TreeNode = { name: 'root', path: '', isDir: true, children: {} }

        data.tree.forEach((item: GitHubTreeItem) => {
          if (item.type !== 'blob' || !item.path.startsWith('documentation/') || !item.path.endsWith('.md')) {
            return
          }
          let filePath = item.path.replace(/^documentation\//, '').replace(/\.md$/, '')

          // index.md represents its parent directory as a page, not a child called "index"
          if (filePath.endsWith('/index')) {
            filePath = filePath.replace(/\/index$/, '')
          }

          const parts = filePath.split('/')
          let current = root

          parts.forEach((part: string, index: number) => {
            if (!current.children[part]) {
              current.children[part] = {
                name: part,
                path: parts.slice(0, index + 1).join('/'),
                isDir: index < parts.length - 1,
                children: {},
              }
            }
            current = current.children[part]
          })
        })

        setSidebarTree(root)
        writeCached<TreeNode>(CACHE_KEYS.sidebarTree, root)
      })
      .catch((err) => {
        console.error('Failed to load repository tree:', err)
        // bad or unreachable tree, fresh cache next load
        purgeDocsCache()
        setSidebarTree({ name: 'root', path: '', isDir: true, children: {} })
      })
  }, [])

  useEffect(() => {
    let isMounted = true

    const physicalPath = getPhysicalPath(activePath)

    const cachedPage = readCached<CachedPage>(CACHE_KEYS.page(physicalPath))
    if (cachedPage) {
      setPage({ html: cachedPage.html, meta: cachedPage.meta, loading: false, error: '' })
      const title =
        cachedPage.meta.title || cachedPage.meta.label || activePath.split('/').pop() || messages['docs-sidebar-title']
      document.title = `${title} | MineKot`
      return () => {
        isMounted = false
      }
    }

    setPage({ html: '', meta: {}, loading: true, error: '' })

    const fetchPageContent = async (): Promise<void> => {
      const mdPath =
        physicalPath === '' || physicalPath.endsWith('/') ? `${physicalPath}index.md` : `${physicalPath}.md`

      // include directory index fallback; some pages only exist as folder/index.md
      const indexPath = `${physicalPath}/index.md`

      const sources = [
        `${docsConfig['base-url'].replace(/\/+$/, '')}/${mdPath.replace(/^\/+/, '')}`,
        `https://raw.githubusercontent.com/MineKotLang/static/main/documentation/${mdPath.replace(/^\/+/, '')}`,
        `${docsConfig['base-url'].replace(/\/+$/, '')}/${indexPath.replace(/^\/+/, '')}`,
        `https://raw.githubusercontent.com/MineKotLang/static/main/documentation/${indexPath.replace(/^\/+/, '')}`,
      ]

      let rawMarkdown: string | null = null

      for (const url of sources) {
        try {
          const res = await fetch(url, { cache: 'no-cache' })
          if (res.ok) {
            rawMarkdown = await res.text()
            break
          }
        } catch (error: unknown) {
          console.warn('Docs source unavailable', url, error)
        }
      }

      if (!rawMarkdown) {
        throw new Error(messages['not-found-desc'])
      }

      const { metadata, content } = parseFrontmatter(rawMarkdown)
      const htmlContent = await marked.parse(content)

      if (isMounted) {
        setPage({ html: htmlContent, meta: metadata, loading: false, error: '' })
        const title =
          metadata.title || metadata.label || activePath.split('/').pop() || messages['docs-sidebar-title']
        document.title = `${title} | MineKot`
        writeCached<CachedPage>(CACHE_KEYS.page(physicalPath), { html: htmlContent, meta: metadata })
      }
    }

    fetchPageContent().catch((err) => {
      if (isMounted) {
        setPage({ html: '', meta: {}, loading: false, error: err.message })
        document.title = `${messages['error-title']} | MineKot`
        // failure invalidates cache; next visit refetches
        purgeDocsCache()
      }
    })

    return () => {
      isMounted = false
    }
  }, [activePath])

  useEffect(() => {
    if (!page.loading && page.html) {
      highlightAllCodeBlocks('#docs-content pre code', messages['copy-code'])
    }
  }, [page.loading, page.html, messages])

  const renderBadge = (): React.ReactNode => {
    const badgeMap: Record<string, string> = docsConfig.badges
    const tag = page.meta.tag || badgeMap[rootSegment]
    if (!tag) return null

    const badgeClass =
      tag === 'GUIDE'
        ? 'docs-badge--docs'
        : tag === 'MODULE'
          ? 'docs-badge--modules'
          : tag === 'SCRIPT'
            ? 'docs-badge--scripts'
            : `docs-badge--${rootSegment}`

    const labelKey = BADGE_LABEL_KEYS[tag]
    const label = (labelKey && messages[labelKey]) || tag

    return <span className={`docs-badge ${badgeClass}`}>{label}</span>
  }

  const breadcrumbName = page.meta.title || page.meta.label || activePath.split('/').pop() || ''

  const RenderTree = ({ node, level = 0 }: { node: TreeNode; level?: number }): React.ReactNode => {
    const sortedChildren = Object.values(node.children).sort((a, b) =>
      a.isDir === b.isDir ? a.name.localeCompare(b.name) : a.isDir ? -1 : 1,
    )

    return (
      <>
        {sortedChildren.map((child) => {
          const urlPath = getUrlPath(child.path)
          const isActive = activePath === urlPath

          let label = getFallbackLabel(child.name)
          if (level === 0) {
            const titleMap: Record<string, string> = docsConfig.titles
            if (titleMap[child.name]) {
              label = messages[titleMap[child.name]]
            }
          }

          const iconMap: Record<string, string> = docsConfig.icons
          const icon = iconMap[rootSegment] || docsConfig.icons.docs

          if (child.isDir) {
            return (
              <div key={child.path} className="docs-sidebar__section">
                <span className="docs-sidebar__title">{label}</span>
                <div className="docs-sidebar__child">
                  <RenderTree node={child} level={level + 1} />
                </div>
              </div>
            )
          }

          return (
            <a
              key={child.path}
              href={`/${urlPath}`.replace(/([^:]\/)\/+/g, '$1')}
              className={`docs-sidebar__link ${isActive ? 'docs-sidebar__link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                onNavigate(urlPath.replace(/\/+/g, '/'))
              }}
            >
              {icon && <i className={icon} style={{ marginRight: 'var(--spacing-xs)', opacity: 0.7 }} />}
              {label}
            </a>
          )
        })}
      </>
    )
  }

  return (
    <div className="docs-layout">
      <aside className="docs-sidebar" id="docs-sidebar">
        <div className="docs-search">
          <i className="fa-solid fa-magnifying-glass docs-search__icon" />
          <input
            type="search"
            className="docs-search__input"
            placeholder={messages['docs-search-placeholder']}
            value={searchQuery}
            onFocus={ensureIndex}
            onChange={(e) => {
              ensureIndex()
              setSearchQuery(e.target.value)
            }}
          />
        </div>

        {searchQuery.trim() ? (
          <div className="docs-search__results">
            {indexLoading ? (
              <div className="docs-search__status">{messages['docs-search-indexing']}</div>
            ) : searchFailed ? (
              <div className="docs-search__status">{messages['docs-search-error']}</div>
            ) : searchResults.length ? (
              searchResults.map((result) => (
                <a
                  key={result.path}
                  href={`/${getUrlPath(result.path)}`.replace(/([^:]\/)\/+/g, '$1')}
                  className={`docs-search__result ${
                    activePath === getUrlPath(result.path) ? 'docs-search__result--active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate(getUrlPath(result.path))
                    setSearchQuery('')
                  }}
                >
                  <span className="docs-search__result-title">{result.title}</span>
                  <span className="docs-search__result-snippet">{result.snippet}</span>
                </a>
              ))
            ) : (
              <div className="docs-search__status">{messages['docs-search-no-results']}</div>
            )}
          </div>
        ) : sidebarTree ? (
          <div className="docs-sidebar__group">
            <h3 className="docs-sidebar__group-title">{messages['docs-sidebar-title']}</h3>
            <div className="docs-sidebar__group-items">
              <RenderTree node={sidebarTree} />
            </div>
          </div>
        ) : (
          <div className="loading">{messages['loading-sidebar']}</div>
        )}
      </aside>

      <article className="docs-content markdown-body" id="docs-content">
        {!page.loading && !page.error && (
          <div className="docs-content__banner">
            <div className="docs-content__breadcrumbs">
              <span style={{ textTransform: 'capitalize' }}>
                {messages[ROOT_LABEL_KEYS[rootSegment]] || rootSegment}
              </span>
              <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--t-overlay0)' }} />
              <span>{breadcrumbName}</span>
            </div>
            {renderBadge()}
          </div>
        )}

        {page.loading ? null : page.error ? (
          <>
            <h1 className="error">{messages['error-title']}</h1>
            <p className="error">
              {messages['error-prefix']} {escapeHtml(page.error)}
            </p>
          </>
        ) : (
          <div ref={contentRef} dangerouslySetInnerHTML={{ __html: page.html }} />
        )}
      </article>
    </div>
  )
}
