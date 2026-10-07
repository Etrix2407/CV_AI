import type { ReactNode } from 'react'
import { sectionAnimationDelay, sectionNumber, sectionTitleId } from '../cv'

interface SectionCardProps {
  sectionId: string
  heading: string
  /** Position de la section (1, 2, …) : numéro affiché et décalage de l'animation. */
  position: number
  children: ReactNode
}

/** Carte d'une section du CV, titre numéroté : « 01 / Profil ». */
export function SectionCard({ sectionId, heading, position, children }: SectionCardProps) {
  const titleId = sectionTitleId(sectionId)

  return (
    <section
      className="card"
      id={sectionId}
      aria-labelledby={titleId}
      style={{ animationDelay: `${sectionAnimationDelay(position)}s` }}
    >
      <h2 className="card__title" id={titleId}>
        <span className="card__number" aria-hidden="true">
          {sectionNumber(position)} /{' '}
        </span>
        {heading}
      </h2>
      {children}
    </section>
  )
}
