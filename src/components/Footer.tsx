import React from 'react'

import footer from '../config/footer.json'
import { useMessages } from '../hooks/useLanguage.tsx'

interface FooterLink {
  href: string
  'label-key': string
  external: boolean
}

interface FooterColumn {
  'title-key': string
  links: FooterLink[]
}

interface FooterConfig {
  brand: {
    href: string
    'logo-url': string
    'description-key': string
    'note-key': string
  }
  columns: FooterColumn[]
  credit: {
    'prefix-key': string
    'joiner-key': string
    authors: FooterCreditAuthor[]
    'suffix-key': string
  }
  'note-key': string
}

interface FooterCreditAuthor {
  name: string
  url: string
}

const FOOTER: FooterConfig = footer

/**
 * Site footer with link columns.
 * @returns The footer element.
 */
export const Footer: React.FC<{
  onNavigate: (path: string) => void
}> = ({ onNavigate }) => {
  const messages = useMessages()

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string, external: boolean): void => {
    if (external) {
      return
    }

    event.preventDefault()
    onNavigate(href)
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a
            className="footer__brand-link"
            href={FOOTER.brand.href}
            onClick={(event) => handleLinkClick(event, FOOTER.brand.href, false)}
          >
            <img alt={messages['app-title']} className="footer__logo" src={FOOTER.brand['logo-url']} />
            <span className="footer__brand-name">{messages['app-title']}</span>
          </a>
          <p className="footer__description">{messages[FOOTER.brand['description-key']]}</p>
          <p className="footer__brand-note">{messages[FOOTER.brand['note-key']]}</p>
        </div>
        {FOOTER.columns.map((column) => (
          <nav aria-label={messages[column['title-key']]} className="footer__column" key={column['title-key']}>
            <h2 className="footer__column-title">{messages[column['title-key']]}</h2>
            <ul className="footer__links">
              {column.links.map((link) => (
                <li key={link.href}>
                  <a
                    className="footer__link"
                    href={link.href}
                    onClick={(event) => handleLinkClick(event, link.href, link.external)}
                    rel={link.external ? 'noreferrer' : undefined}
                    target={link.external ? '_blank' : undefined}
                  >
                    {messages[link['label-key']]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="footer__bottom">
        <p className="footer__credit">
          {messages[FOOTER.credit['prefix-key']]}
          {FOOTER.credit.authors.map((author, index) => (
            <React.Fragment key={author.name}>
              {index > 0 && messages[FOOTER.credit['joiner-key']]}
              <a href={author.url} rel="noreferrer" target="_blank">
                {author.name}
              </a>
            </React.Fragment>
          ))}
          {messages[FOOTER.credit['suffix-key']]}
        </p>
        <p className="footer__note">{messages[FOOTER['note-key']]}</p>
      </div>
    </footer>
  )
}
