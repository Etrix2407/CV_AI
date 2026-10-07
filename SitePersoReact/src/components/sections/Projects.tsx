import { Fragment } from 'react'
import type { Project } from '../../cv'
import { RichText } from '../RichText'

export function Projects({ projects }: { projects: readonly Project[] }) {
  return projects.map((project) => (
    <Fragment key={project.name}>
      <h3 className="cv-subtitle">{project.name}</h3>
      <div className="cv-indent">
        <p>
          <strong>{project.stack.join(' · ')}</strong> ·{' '}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener"
            aria-label={`GitHub : ${project.name}`}
          >
            GitHub
          </a>
        </p>
        <ul className="cv-list">
          {project.highlights.map((highlight, index) => (
            <li key={index}>
              <RichText text={highlight} />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  ))
}
