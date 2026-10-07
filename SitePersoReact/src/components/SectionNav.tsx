import type { Section } from '../cv'

/** Menu collant des sections, affiché comme des appels de fonction : « profil() ». */
export function SectionNav({ sections }: { sections: readonly Section[] }) {
  return (
    <div className="nav-wrapper">
      <nav className="nav" aria-label="Sections">
        {sections.map((section) => (
          <a className="nav__link" href={`#${section.id}`} key={section.id}>
            {section.title}
          </a>
        ))}
      </nav>
    </div>
  )
}
