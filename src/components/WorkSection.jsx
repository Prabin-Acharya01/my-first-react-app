import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import MaskReveal from './MaskReveal.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './WorkSection.css'

function WorkSection() {
  const headingRef = useReveal()

  return (
    <section id="work" className="work-section">
      <div className="container">
        <div ref={headingRef} className="reveal work-section__heading">
          <MaskReveal as="h2" className="work-section__title">
            SELECTED WORK
          </MaskReveal>
          <p className="work-section__intro">
            A few products and experiences I&rsquo;ve worked on across SaaS,
            HRMS, telecommunications, EdTech, and mobile products.
          </p>
        </div>

        <div className="work-section__list">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
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
