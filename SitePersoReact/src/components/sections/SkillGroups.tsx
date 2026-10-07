import { Fragment } from 'react'
import type { SkillGroup } from '../../cv'

export function SkillGroups({ groups }: { groups: readonly SkillGroup[] }) {
  return groups.map((group) => (
    <Fragment key={group.title}>
      <h3 className="cv-subtitle">{group.title}</h3>
      <ul className="cv-list cv-indent">
        {group.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Fragment>
  ))
}
