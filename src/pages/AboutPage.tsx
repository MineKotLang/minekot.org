import React from 'react'

import { MarkdownPageShell } from '../components/MarkdownPage.tsx'
import { useMessages } from '../hooks/useLanguage.tsx'
import aboutData from '../config/about.json'

/**
 * About page.
 * @returns The about page element.
 */
export const AboutPage: React.FC = () => {
  const messages = useMessages()

  return (
    <MarkdownPageShell title={messages['page-about']}>
      <div className="page-shell__content">
        <p className="page-shell__lead">{messages[aboutData.lead]}</p>
        <h2>{messages[aboutData['design-rules-heading']]}</h2>
        <ul>
          {aboutData['design-rules'].map((rule, idx) => (
            <li key={idx}>{messages[rule]}</li>
          ))}
        </ul>
        <h2>{messages[aboutData['license-heading']]}</h2>
        <p>
          {messages[aboutData['license-lead']]}
          {aboutData.licenses.map((link, idx) => (
            <React.Fragment key={link.href}>
              <a href={link.href} rel="noreferrer" target="_blank">
                {link.label}
              </a>
              {idx < aboutData.licenses.length - 1 ? messages['about-license-joiner'] : ''}
            </React.Fragment>
          ))}
          .
        </p>
      </div>
    </MarkdownPageShell>
  )
}
