import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './WorkSection.css'

function WorkSection() {
  const headingRef = useReveal()

  return (
    <section id="work" className="work-section">
      <div className="container">
        <div ref={headingRef} className="reveal work-section__heading">
          <h2 className="work-section__title">SELECTED WORK</h2>
          <p className="work-section__intro">
            A few products and experiences I&rsquo;ve worked on across SaaS,
            HRMS, telecommunications, CRM, EdTech, and mobile products.
          </p>
        </div>

        <div className="work-section__list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="work-section__cta">
          <p className="work-section__cta-title">MORE WORK COMING SOON.</p>
          <p className="work-section__cta-text">
            I&rsquo;m currently documenting more of my product design work and
            case studies.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WorkSection
