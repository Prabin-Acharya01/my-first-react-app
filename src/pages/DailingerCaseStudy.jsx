import { Link } from 'react-router-dom'
import MaskReveal from '../components/MaskReveal.jsx'
import { Block, ShotGrid } from '../components/CaseStudyBlock.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './CaseStudyShared.css'

const ROLE_CONTRIBUTION = [
  '[ADD: which parts of the platform/design system you personally designed]',
  '[ADD: whether you worked solo or alongside other designers/PMs/devs]',
  '[ADD: what you handed off — wireframes, hi-fi screens, design system components, prototypes]',
]

const PROCESS_STAGES = [
  {
    title: 'Discovery',
    description:
      '[ADD: how the requirement came in — new feature request, client need, internal roadmap item]',
  },
  {
    title: 'Research & Flows',
    description:
      '[ADD: who you talked to and what flows/edge cases you mapped for the telecom domain]',
  },
  {
    title: 'Wireframes & IA',
    description:
      '[ADD: how you structured the interface and validated it with the team]',
  },
  {
    title: 'Design System',
    description:
      '[ADD: what scalable patterns/components you built or extended for reuse across the platform]',
  },
  {
    title: 'Handoff & Iteration',
    description:
      '[ADD: how you worked with developers, and what changed after real usage/feedback]',
  },
]

const OUTCOMES = [
  '[ADD: qualitative result — e.g. faster design-to-dev handoff after the design system, more consistent UI across modules]',
  '[ADD: internal/team feedback, if shareable]',
  '[ADD: only include hard metrics if your company has approved sharing them]',
]

const LEARNINGS = [
  '[ADD: what designing for a telecom SaaS platform taught you]',
  '[ADD: a constraint you had to design around — technical, regulatory, or legacy system limits]',
  '[ADD: how building a design system changed how you think about scalability]',
]

const SCREEN_SHOTS = [
  { label: 'SCREEN 01', src: '/Dialinger web 1.png' },
  { label: 'SCREEN 02', src: '/Dialinger web2.png' },
  { label: 'SCREEN 03', src: '/Dialinger web3.png' },
  { label: 'SCREEN 04', src: '/Dialingerweb4.png' },
  { label: 'SCREEN 05', src: '/Dialingerweb5.png' },
  { label: 'SCREEN 06', src: '/Dialingerweb6.png' },
  { label: 'SCREEN 07', src: '/Dialingerweb7.png' },
  { label: 'SCREEN 08', src: '/Dialingerweb8.png' },
  { label: 'SCREEN 09', src: '/Dialingerweb9.jpg' },
  { label: 'SCREEN 10', src: '/Dialingerweb10.jpg' },
  { label: 'SCREEN 11', src: '/Dialingerweb11.png' },
  { label: 'SCREEN 12', src: '/Dialingerweb12.png' },
]

function DailingerCaseStudy() {
  const heroRef = useReveal()

  return (
    <section className="case-page">
      <div className="container">
        <div ref={heroRef} className="reveal case-page__hero">
          <p className="eyebrow">
            PRODUCT DESIGN &middot; TELECOMMUNICATIONS &middot; SAAS
          </p>
          <MaskReveal as="h1" className="case-page__title" delay={80}>
            DAILINGER WEB
          </MaskReveal>
          <p className="case-page__subtitle">Company Side and Candidate Side</p>
          <p className="case-page__tagline">
            Designing experiences for a telecommunications SaaS platform,
            including scalable interface patterns and a comprehensive design
            system.
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
              <p>Web App &middot; SaaS</p>
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
            Dailinger is a live telecommunications SaaS product I work on
            professionally at my current company — this is a team project,
            not a personal one. Some details, data, and screens shown here
            are simplified or anonymized to respect company and client
            confidentiality.
          </p>
        </div>

        <Block title="OVERVIEW">
          <p className="draft-copy">
            [ADD: 2–3 sentences on what Dailinger is, who uses it, and where
            it sits in the telecom workflow.]
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
            [ADD: the specific problem this feature/module solved — what was
            inconsistent, slow, or hard to scale before.]
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

export default DailingerCaseStudy
