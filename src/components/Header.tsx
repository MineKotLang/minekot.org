import React from 'react'

import { useMessages } from '../hooks/useLanguage.tsx'
import navigation from '../config/navigation.json'
import { applyTheme, getEffectiveTheme, getStoredTheme, getSystemTheme, type ThemeMode } from '../theme.ts'
import { HeaderLogo } from './HeaderLogo.tsx'
import { LanguageSelector } from './LanguageSelector.tsx'

/**
 * Site header with navigation and theme controls.
 * @returns The header element.
 */
export const Header: React.FC<{
  activePath: string
  onNavigate: (path: string) => void
}> = ({ activePath, onNavigate }) => {
  const messages = useMessages()
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
  const [theme, setTheme] = React.useState<ThemeMode>(() => getEffectiveTheme())

  React.useEffect(() => {
    setMenuOpen(false)
  }, [activePath])

  React.useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)')
    const handleSystemChange = (): void => {
      if (getStoredTheme() === null) {
        setTheme(getSystemTheme())
      }
    }
    media.addEventListener('change', handleSystemChange)
    return () => media.removeEventListener('change', handleSystemChange)
  }, [])

  const handleThemeToggle = (): void => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark'
    applyTheme(nextTheme)
    setTheme(nextTheme)
  }

  const primaryLinks = navigation.primary.map((link) => ({
    path: link.path,
    label: messages[link['label-key']],
  }))

  const secondaryLinks = navigation.secondary.map((link) => ({
    path: link.path,
    label: messages[link['label-key']],
  }))

  const isActive = (path: string): boolean => activePath === path || (path !== '/' && activePath.startsWith(path))

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string): void => {
    e.preventDefault()
    setMenuOpen(false)
    onNavigate(path)
  }

  return (
    <header className="header" id="main-header">
      <a className="header__logo" href="/" onClick={(e) => handleLinkClick(e, '/')}>
        <HeaderLogo />
        {messages['app-title']}
      </a>
      <div className="header__end">
        <button
          className="header__toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? messages['nav-menu-close'] : messages['nav-menu-open']}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} aria-hidden="true"></i>
        </button>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} id="primary-navigation">
          {primaryLinks.map((link) => (
            <a
              key={link.path}
              className={`header__link ${isActive(link.path) ? 'header__link--active' : ''}`}
              href={link.path}
              onClick={(e) => handleLinkClick(e, link.path)}
            >
              {link.label}
            </a>
          ))}
          <span className="header__nav-divider" aria-hidden="true" />
          {secondaryLinks.map((link) => (
            <a
              key={link.path}
              className={`header__link header__link--secondary ${isActive(link.path) ? 'header__link--active' : ''}`}
              href={link.path}
              onClick={(e) => handleLinkClick(e, link.path)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="header__git"
            href="https://github.com/MineKotLang"
            rel="noreferrer"
            target="_blank"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fa-brands fa-github" style={{ marginRight: 'var(--spacing-xs)' }}></i>
            {messages['nav-github']}
          </a>
          <LanguageSelector />
        </nav>
        <button
          className="header__theme-toggle"
          type="button"
          aria-label={theme === 'dark' ? messages['theme-toggle-to-light'] : messages['theme-toggle-to-dark']}
          onClick={handleThemeToggle}
        >
          <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} aria-hidden="true"></i>
        </button>
      </div>
    </header>
  )
}
