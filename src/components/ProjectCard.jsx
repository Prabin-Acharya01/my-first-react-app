import { Link } from 'react-router-dom'
import Arrow from './Arrow.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './ProjectCard.css'

function ProjectCard({ project }) {
  const ref = useReveal()

  return (
    <article ref={ref} className="reveal project-card">
      <Link to={`/work/${project.slug}`} className="project-card__image-link">
        <div className="project-card__image">
          <span>{project.imageLabel}</span>
          <span className="project-card__image-tag">PROJECT IMAGE</span>
        </div>
      </Link>

      <div className="project-card__body">
        <div className="project-card__heading">
          <span className="project-card__number">{project.number}</span>
          <div>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__category">{project.category}</p>
          </div>
        </div>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__meta">
          <span>{project.role}</span>
          <span className="project-card__meta-divider" aria-hidden="true" />
          <span>{project.year}</span>
        </div>

        <Link to={`/work/${project.slug}`} className="project-card__link">
          VIEW PROJECT <Arrow />
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
