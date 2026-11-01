import React from 'react'

import { useLanguage, useMessages } from '../hooks/useLanguage.tsx'

const LANGUAGE_LABELS: Record<string, string> = {
  de: 'Deutsch',
  en: 'English',
  nl: 'Nederlands',
}

const LANGUAGE_CODES: Array<'en' | 'nl' | 'de'> = ['en', 'nl', 'de']

/**
 * Language picker for the header.
 * @returns The language selector element.
 */
export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  const messages = useMessages()
  const [open, setOpen] = React.useState<boolean>(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleToggle = (event: React.MouseEvent): void => {
    event.preventDefault()
    setOpen((current) => !current)
  }

  const handleSelect = (code: 'en' | 'nl' | 'de'): void => {
    setLanguage(code)
    setOpen(false)
  }

  return (
    <div
      ref={containerRef}
      className={`header__language ${open ? 'header__language--open' : ''}`}
      role="button"
      tabIndex={0}
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-label={messages['language-select']}
      onClick={handleToggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          setOpen((current) => !current)
        }
        if (event.key === 'Escape') {
          setOpen(false)
        }
      }}
    >
      <i className="fa-solid fa-globe header__language-icon" aria-hidden="true"></i>
      <span className="header__language-current">{LANGUAGE_LABELS[language]}</span>
      <i className="fa-solid fa-chevron-down header__language-arrow" aria-hidden="true"></i>
      {open && (
        <ul className="header__language-dropdown" role="listbox">
          {LANGUAGE_CODES.map((code) => (
            <li
              key={code}
              className={`header__language-option ${language === code ? 'header__language-option--active' : ''}`}
              role="option"
              aria-selected={language === code}
              onClick={(event) => {
                event.stopPropagation()
                handleSelect(code)
              }}
            >
              {LANGUAGE_LABELS[code]}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
