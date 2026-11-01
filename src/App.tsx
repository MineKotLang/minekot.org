import React, { Suspense, lazy, useEffect, useState } from 'react'

import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { SkipLink } from './components/SkipLink.tsx'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { LanguageProvider, useMessages } from './hooks/useLanguage.tsx'
import { normalizePath } from './utils.ts'
import routes from './config/routes.json'

type PageRenderer = () => React.ReactNode

const SITE_TITLE = 'MineKot - Kotlin Scripting Engine'

const ROUTES: Record<string, string> = routes

const RoadmapPage = lazy(() => import('./pages/RoadmapPage.tsx').then((m) => ({ default: m.RoadmapPage })))
const ChangelogPage = lazy(() => import('./pages/ChangelogPage.tsx').then((m) => ({ default: m.ChangelogPage })))
const CommunityPage = lazy(() => import('./pages/CommunityPage.tsx').then((m) => ({ default: m.CommunityPage })))
const AboutPage = lazy(() => import('./pages/AboutPage.tsx').then((m) => ({ default: m.AboutPage })))
const DocsPage = lazy(() => import('./pages/DocsPage.tsx').then((m) => ({ default: m.DocsPage })))

const PAGE_COMPONENTS: Record<string, PageRenderer> = {
  home: () => <HomePage />,
  roadmap: () => <RoadmapPage />,
  changelog: () => <ChangelogPage />,
  community: () => <CommunityPage />,
  about: () => <AboutPage />,
}

const resolveAbsolutePath = (rawPath: string): string => {
  const withLeadingSlash = rawPath.startsWith('/') ? rawPath : `/${rawPath}`
  return normalizePath(withLeadingSlash)
}

const NotFoundPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const messages = useMessages()

  return (
    <div className="page-shell">
      <h1 className="page-shell__title">{messages['not-found-title']}</h1>
      <p className="page-shell__lead">{messages['not-found-desc']}</p>
      <a
        className="not-found__btn"
        href="/"
        onClick={(e) => {
          e.preventDefault()
          onNavigate('/')
        }}
      >
        {messages['return-home-btn']}
      </a>
    </div>
  )
}

/**
 * Root application component.
 * @returns The routed application shell.
 */
export const App: React.FC = () => {
  const [activePath, setActivePath] = useState<string>(normalizePath(window.location.pathname))

  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.title = SITE_TITLE
  }, [activePath])

  React.useEffect(() => {
    const handlePopState = (): void => {
      setActivePath(normalizePath(window.location.pathname))
    }

    const handleCustomNav = (event: Event): void => {
      const detail = (event as CustomEvent<string>).detail
      if (typeof detail !== 'string' || detail.length === 0) {
        return
      }

      const absolutePath = resolveAbsolutePath(detail)
      window.history.pushState({}, '', absolutePath)
      setActivePath(absolutePath)
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('nav', handleCustomNav)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('nav', handleCustomNav)
    }
  }, [])

  const handleNavigate = (path: string): void => {
    const absolutePath = resolveAbsolutePath(path)
    window.history.pushState({}, '', absolutePath)
    setActivePath(absolutePath)
  }

  const renderContent = (): React.ReactNode => {
    if (activePath === ROUTES.docs || activePath.startsWith(`${ROUTES.docs}/`)) {
      return (
        <ErrorBoundary>
          <Suspense fallback={null}>
            <DocsPage activePath={activePath} onNavigate={handleNavigate} />
          </Suspense>
        </ErrorBoundary>
      )
    }

    const matchKey = Object.keys(ROUTES).find((key: string) => ROUTES[key] === activePath)
    if (matchKey !== undefined && PAGE_COMPONENTS[matchKey] !== undefined) {
      return (
        <ErrorBoundary>
          <Suspense fallback={null}>
            {PAGE_COMPONENTS[matchKey]()}
          </Suspense>
        </ErrorBoundary>
      )
    }

    return (
      <ErrorBoundary>
        <NotFoundPage onNavigate={handleNavigate} />
      </ErrorBoundary>
    )
  }

  return (
    <LanguageProvider>
      <div className="app">
        <SkipLink />
        <Header activePath={activePath} onNavigate={handleNavigate} />
        <main id="main-content">{renderContent()}</main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </LanguageProvider>
  )
}
