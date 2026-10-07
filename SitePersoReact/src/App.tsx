import { useEffect } from 'react'
import { Hero } from './components/Hero'
import { RichText } from './components/RichText'
import { SectionCard } from './components/SectionCard'
import { SectionNav } from './components/SectionNav'
import { EducationList } from './components/sections/EducationList'
import { ExperienceList } from './components/sections/ExperienceList'
import { InterestList } from './components/sections/InterestList'
import { Projects } from './components/sections/Projects'
import { SkillGroups } from './components/sections/SkillGroups'
import { CV, type SectionId } from './cv'
import { ThemeToggle } from './theme/ThemeToggle'

function sectionContent(id: SectionId) {
  switch (id) {
    case 'projets':
      return <Projects projects={CV.projects} />
    case 'profil':
      return (
        <p>
          <RichText text={CV.profile} />
        </p>
      )
    case 'formation':
      return <EducationList education={CV.education} />
    case 'experiences':
      return <ExperienceList experiences={CV.experiences} />
    case 'competences':
      return <SkillGroups groups={CV.skills} />
    case 'centres-d-interet':
      return <InterestList interests={CV.interests} />
  }
}

export default function App() {
  useEffect(() => {
    document.title = `${CV.name} — CV`
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.append(description)
    }
    description.content = `${CV.name} — ${CV.title}`
  }, [])

  return (
    <div className="page">
      <header>
        <ThemeToggle />
        <Hero name={CV.name} title={CV.title} photo={CV.photo} contacts={CV.contacts} />
      </header>

      <SectionNav sections={CV.sections} />

      <main>
        {CV.sections.map((section, index) => (
          <SectionCard
            key={section.id}
            sectionId={section.id}
            heading={section.title}
            position={index + 1}
          >
            {sectionContent(section.id)}
          </SectionCard>
        ))}
      </main>

      <footer className="footer">{CV.name}</footer>
    </div>
  )
}
