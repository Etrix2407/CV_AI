import type { Interest } from '../../cv'

export function InterestList({ interests }: { interests: readonly Interest[] }) {
  return (
    <ul className="cv-list">
      {interests.map((item) => (
        <li key={item.label}>
          <strong>{item.label}</strong> : {item.value}
        </li>
      ))}
    </ul>
  )
}
