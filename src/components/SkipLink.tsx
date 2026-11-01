import React from 'react'

import { useMessages } from '../hooks/useLanguage.tsx'

/**
 * Keyboard skip link to the main content.
 * @returns The skip link element.
 */
export const SkipLink: React.FC = () => {
  const messages = useMessages()

  return (
    <a className="skip-link" href="#main-content">
      {messages['skip-link'] || 'Skip to main content'}
    </a>
  )
}
