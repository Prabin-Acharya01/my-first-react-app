import { Link } from 'react-router-dom'
import MaskReveal from '../components/MaskReveal.jsx'
import { Block, ShotGrid } from '../components/CaseStudyBlock.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './CaseStudyShared.css'

const ROLE_CONTRIBUTION = [
  '[ADD: which flows you personally designed — e.g. job posting, candidate pipeline, application tracking]',
  '[ADD: whether you worked solo or alongside other designers/PMs/devs on this product]',
  '[ADD: what you handed off — wireframes, hi-fi screens, design system components, prototypes]',
]

const PROCESS_STAGES = [
  {
    title: 'Discovery',
    description:
      '[ADD: how the problem/requirement came in — stakeholder request, market gap, internal audit, etc.]',
  },
  {
    title: 'Research & Flows',
    description:
      '[ADD: who you talked to — employers, candidates, internal stakeholders — and what flows you mapped]',
  },
  {
    title: 'Wireframes & IA',
    description:
      '[ADD: how you structured the employer and candidate experiences and validated them with the team]',
  },
  {
    title: 'Visual Design & System',
    description:
      '[ADD: how the product fits the existing Hajir design system, and any new patterns you introduced]',
  },
  {
    title: 'Handoff & Iteration',
    description:
      '[ADD: how you worked with developers, and what changed after real usage/feedback]',
  },
]

const OUTCOMES = [
  '[ADD: qualitative result — e.g. faster job posting, clearer candidate pipeline visibility]',
  '[ADD: internal/team feedback, if shareable]',
  '[ADD: only include hard metrics if your company has approved sharing them]',
]

const LEARNINGS = [
  '[ADD: what designing dual-sided employer/candidate experiences taught you]',
  '[ADD: a constraint you had to design around — legacy screens, dev bandwidth, compliance rules]',
  '[ADD: how collaborating with a team differed from solo/personal projects]',
]

const SCREEN_SHOTS = [
  { label: 'SCREEN 01', src: '/HajirWebScreen01.png' },
  { label: 'SCREEN 02', src: '/HajirWebScreen02.png' },
  { label: 'SCREEN 03', src: '/HajirWebScreen03.png' },
  { label: 'SCREEN 04', src: '/HajirWebScreen04.png' },
  { label: 'SCREEN 05', src: '/HajirWebScreen05.png' },
  { label: 'SCREEN 06', src: '/HajirWebScreen06.png' },
  { label: 'SCREEN 07', src: '/HajirWebScreen07.png' },
  { label: 'SCREEN 08', src: '/HajirWebScreen08.png' },
  { label: 'SCREEN 09', src: '/HajirWebScreen09.png' },
  { label: 'SCREEN 10', src: '/HajirWebScreen10.png' },
  { label: 'SCREEN 11', src: '/HajirWebScreen11.png' },
]

function HajirEmployerCandidateCaseStudy() {
  const heroRef = useReveal()

  return (
    <section className="case-page">
      <div className="container">
        <div ref={heroRef} className="reveal case-page__hero">
          <p className="eyebrow">PRODUCT DESIGN &middot; HRMS &middot; WEB APP</p>
          <MaskReveal as="h1" className="case-page__title" delay={80}>
            HAJIR WEB
          </MaskReveal>
          <p className="case-page__subtitle">Employer side and Candidate side</p>
          <p className="case-page__tagline">
            Designing the employer and candidate web experience for Hajir —
            job posting, candidate pipelines, and application flows for
            recruitment within the HRMS ecosystem.
          </p>

          <div className="case-page__meta">
            <div>
              <span className="case-block__label">ROLE</span>
              <p>UI/UX Designer</p>
            </div>
            <div>
              <span className="case-block__label">YEAR</span>
              <p>2026</p>
            </div>
            <div>
              <span className="case-block__label">PLATFORM</span>
              <p>Web App &middot; HRMS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="case-page__note">
          <h2 className="case-page__note-title">
            Please <span className="accent">Note</span>
          </h2>
          <p>
            The Hajir employer and candidate web app is part of a live HRMS
            product I work on professionally at my current company — this is
            a team project, not a personal one. Some details, data, and
            screens shown here are simplified or anonymized to respect
            company and client confidentiality.
          </p>
        </div>

        <Block title="OVERVIEW">
          <p className="draft-copy">
            [ADD: 2–3 sentences on what the employer and candidate web app is,
            who uses it — employers posting jobs, candidates applying — and
            the scale of the product.]
          </p>
        </Block>

        <Block title="MY ROLE & CONTRIBUTION">
          <ul className="case-list case-list--arrow">
            {ROLE_CONTRIBUTION.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="PROBLEM / CHALLENGE">
          <p className="draft-copy">
            [ADD: the specific problem this product solved for employers or
            candidates — what was broken, slow, or confusing before.]
          </p>
        </Block>

        <Block title="PROCESS" wide>
          <div className="case-process">
            {PROCESS_STAGES.map((stage, index) => (
              <div key={stage.title} className="case-process__stage">
                <div className="case-process__marker" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="case-process__body">
                  <h3 className="case-process__title">{stage.title}</h3>
                  <p className="draft-copy">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block title="SCREENS" wide>
          <ShotGrid shots={SCREEN_SHOTS} aspect="browser" />
        </Block>

        <Block title="OUTCOME / IMPACT">
          <ul className="case-list case-list--arrow">
            {OUTCOMES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="LEARNINGS">
          <ul className="case-list case-list--arrow">
            {LEARNINGS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Link to="/#work" className="case-study__back">
          ← BACK TO WORK
        </Link>
      </div>
    </section>
  )
}

export default HajirEmployerCandidateCaseStudy
