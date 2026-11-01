import React, { createContext, useContext, useEffect, useState } from 'react'

import deMessages from '../config/ui-messages.de.json'
import enMessages from '../config/ui-messages.json'
import nlMessages from '../config/ui-messages.nl.json'

type Language = 'en' | 'nl' | 'de'

interface RawMessages {
  messages: Record<string, string>
}

const MESSAGES: Record<Language, Record<string, string>> = {
  de: (deMessages as RawMessages).messages,
  en: (enMessages as RawMessages).messages,
  nl: (nlMessages as RawMessages).messages,
}

const LANGUAGE_STORAGE_KEY = 'language'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  messages: Record<string, string>
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: (): void => {
    /* noop default */
  },
  messages: MESSAGES.en,
})

/**
 * Provides the active language and messages.
 * @returns The language context provider.
 */
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
      return stored === 'en' || stored === 'nl' || stored === 'de' ? stored : 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    document.documentElement.lang = language
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    } catch {
      /* storage unavailable */
    }
  }, [language])

  const setLanguage = (lang: Language): void => {
    setLanguageState(lang)
  }

  const messages = MESSAGES[language]

  return <LanguageContext.Provider value={{ language, setLanguage, messages }}>{children}</LanguageContext.Provider>
}

/**
 * Reads the language context.
 * @returns The active language context.
 */
export const useLanguage = (): LanguageContextType => {
  return useContext(LanguageContext)
}

/**
 * Reads the message map for the active language.
 * @returns The active message map.
 */
export const useMessages = (): Record<string, string> => {
  return useContext(LanguageContext).messages
}
