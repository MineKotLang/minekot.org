import React from 'react'

/**
 * Decorative hero mascot.
 * @returns The mascot element.
 */
export const HeroMascot: React.FC = () => {
  return (
    <div aria-hidden="true" className="hero__mascot">
      <img alt="" className="hero__mascot-image" loading="lazy" decoding="async" src="/images/minekot-flat.svg" />
      <div className="hero__mascot-eyes">
        <span className="hero__mascot-eye hero__mascot-eye--left">
          <span className="hero__mascot-glint" />
        </span>
        <span className="hero__mascot-eye hero__mascot-eye--right">
          <span className="hero__mascot-glint" />
        </span>
      </div>
    </div>
  )
}
