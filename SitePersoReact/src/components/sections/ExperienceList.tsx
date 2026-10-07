import type { Experience } from '../../cv'

export function ExperienceList({ experiences }: { experiences: readonly Experience[] }) {
  return (
    <ul className="cv-list">
      {experiences.map((item, index) => (
        <li key={index}>
          <strong>{item.role}</strong> · {item.employer} · {item.date} : {item.description}
        </li>
      ))}
    </ul>
  )
}
