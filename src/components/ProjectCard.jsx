import { Link } from 'react-router-dom'
import Arrow from './Arrow.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './ProjectCard.css'

function ProjectCard({ project, index = 0 }) {
  const ref = useReveal()
  const delay = Math.min(index, 3) * 100

  return (
    <article
      ref={ref}
      className="reveal project-card"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Link to={`/work/${project.slug}`} className="project-card__image-link">
        {project.image ? (
          <div className="project-card__image project-card__image--photo">
            <img
              src={project.image}
              alt={`${project.title} case study cover`}
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className={`project-card__image project-card__image--${(index % 4) + 1}`}
          >
            <span className="project-card__badge">CASE STUDY</span>
            <span className="project-card__image-label">
              {project.imageLabel}
            </span>
          </div>
        )}
      </Link>

      <div className="project-card__body">
        <p className="project-card__meta">
          <span>{project.number}</span>
          <span className="project-card__meta-divider" aria-hidden="true" />
          <span>{project.year}</span>
          <span className="project-card__meta-divider" aria-hidden="true" />
          <span>{project.category}</span>
        </p>

        <h3 className="project-card__title">{project.title}</h3>
        {project.subtitle ? (
          <p className="project-card__subtitle">{project.subtitle}</p>
        ) : null}
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__divider" aria-hidden="true" />

        <div className="project-card__footer">
          <span className="project-card__role">{project.role}</span>
          <Link to={`/work/${project.slug}`} className="project-card__link">
            VIEW <Arrow />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
