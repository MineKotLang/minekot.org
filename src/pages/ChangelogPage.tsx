import React from 'react'

import { MarkdownPageShell, MarkdownRenderer, useMarkdownPage } from '../components/MarkdownPage.tsx'
import { useMessages } from '../hooks/useLanguage.tsx'
import github from '../config/github.json'
import changelogData from '../config/changelog.json'

/**
 * Changelog page.
 * @returns The changelog page element.
 */
export const ChangelogPage: React.FC = () => {
  const messages = useMessages()
  const { html, loading, error } = useMarkdownPage(github['changelog-url'])

  return (
    <MarkdownPageShell title={messages['page-changelog']}>
      <div className="page-shell__content">
        {!loading && !error && !html.trim() ? (
          <p className="page-shell__empty">{messages[changelogData['empty-message-key']]}</p>
        ) : (
          <MarkdownRenderer html={html} loading={loading} error={error} />
        )}
      </div>
    </MarkdownPageShell>
  )
}
