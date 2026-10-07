import { Fragment } from 'react'
import type { Education } from '../../cv'

export function EducationList({ education }: { education: readonly Education[] }) {
  return education.map((item, index) => (
    <Fragment key={index}>
      <h3 className="cv-subtitle">{item.period}</h3>
      <p className="cv-indent">
        <strong>{item.degree}</strong> – {item.school}
      </p>
    </Fragment>
  ))
}
