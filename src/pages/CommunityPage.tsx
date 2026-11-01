import React from 'react'

import { MarkdownPageShell } from '../components/MarkdownPage.tsx'
import { useMessages } from '../hooks/useLanguage.tsx'
import { loadContributors, type Contributor } from '../contributors.ts'
import { formatTemplate } from '../utils.ts'
import communityData from '../config/community.json'
import github from '../config/github.json'

type ContributorsStatus = 'loading' | 'ready' | 'error'

const ME_LOGIN = 'harmfulladvocado'

const contributorsConfig = communityData.contributors

/**
 * Community page with links and contributors.
 * @returns The community page element.
 */
export const CommunityPage: React.FC = () => {
  const messages = useMessages()
  const [contributors, setContributors] = React.useState<Contributor[]>([])
  const [status, setStatus] = React.useState<ContributorsStatus>('loading')

  React.useEffect(() => {
    let isMounted = true

    loadContributors()
      .then((list) => {
        if (isMounted) {
          setContributors(list)
          setStatus('ready')
        }
      })
      .catch((error: unknown) => {
        console.error('Failed to load contributors:', error)
        if (isMounted) {
          setStatus('error')
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <MarkdownPageShell title={messages['page-community']}>
      <div className="page-shell__content page-shell__content--community">
        <p className="page-shell__lead">{messages[communityData.lead]}</p>
        <div className="community-links">
          {communityData.cards.map((card) => (
            <a key={card.href} className="community-card" href={card.href} rel="noreferrer" target="_blank">
              <i className={card.icon}></i>
              <span className="community-card__name">{messages[card['name-key']]}</span>
              <span className="community-card__desc">{messages[card['desc-key']]}</span>
            </a>
          ))}
        </div>
        {messages[communityData.note] && <p className="page-shell__note">{messages[communityData.note]}</p>}
        <div className="community-contributors">
          <h2>{messages[contributorsConfig['title-key']]}</h2>
          {status === 'loading' && <p className="page-shell__empty">{messages[contributorsConfig['loading-key']]}</p>}
          {status === 'error' && (
            <p className="community-contributors__error">{messages[contributorsConfig['error-key']]}</p>
          )}
          {status === 'ready' && contributors.length === 0 && (
            <p className="page-shell__empty">{messages[contributorsConfig['empty-key']]}</p>
          )}
          {status === 'ready' && contributors.length > 0 && (
            <>
              <div className="community-links">
                {contributors.map((contributor) => (
                  <a
                    key={contributor.login}
                    className="community-card community-card--contributor"
                    href={contributor.profileUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt={formatTemplate(messages['community-avatar-alt'], { name: contributor.login })}
                      className="community-card__avatar"
                      loading="lazy"
                      src={contributor.avatarUrl}
                    />
                    <span className="community-card__name">{contributor.login}</span>
                    <span className="community-card__desc">
                      {formatTemplate(messages[contributorsConfig['count-label-key']], {
                        count: String(contributor.contributions),
                      })}
                    </span>
                    {contributor.login.toLowerCase() === ME_LOGIN && (
                      <span className="community-card__me">{messages['community-me']}</span>
                    )}
                  </a>
                ))}
              </div>
              <a
                className="community-contributors__all"
                href={github['contributors-org-url']}
                rel="noreferrer"
                target="_blank"
              >
                {messages[contributorsConfig['view-all-key']]}
              </a>
            </>
          )}
        </div>
      </div>
    </MarkdownPageShell>
  )
}
