import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import PetsyCaseStudy from './PetsyCaseStudy.jsx'
import HajirMobileCaseStudy from './HajirMobileCaseStudy.jsx'
import HajirEmployerCandidateCaseStudy from './HajirEmployerCandidateCaseStudy.jsx'
import DailingerCaseStudy from './DailingerCaseStudy.jsx'
import DailingerMobileCaseStudy from './DailingerMobileCaseStudy.jsx'
import JobPortalCaseStudy from './JobPortalCaseStudy.jsx'
import './CaseStudy.css'

function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (slug === 'petsy') {
    return <PetsyCaseStudy />
  }

  if (slug === 'hajir-mobile-app') {
    return <HajirMobileCaseStudy />
  }

  if (slug === 'hajir-employer-candidate') {
    return <HajirEmployerCandidateCaseStudy />
  }

  if (slug === 'dailinger') {
    return <DailingerCaseStudy />
  }

  if (slug === 'dailinger-mobile-app') {
    return <DailingerMobileCaseStudy />
  }

  if (slug === 'job-portal') {
    return <JobPortalCaseStudy />
  }

  return (
    <section className="case-study">
      <div className="container">
        <p className="eyebrow">
          {project ? project.category : 'PROJECT'}
        </p>

        <h1 className="case-study__title">
          {project ? project.title : 'Project not found'}
        </h1>

        <p className="case-study__status">CASE STUDY COMING SOON.</p>
        <p className="case-study__text">
          I&rsquo;m still writing up the full case study for this project —
          process, screens, and outcomes will be added here soon.
        </p>

        <Link to="/#work" className="case-study__back">
          ← BACK TO WORK
        </Link>
      </div>
    </section>
  )
}

export default CaseStudy
