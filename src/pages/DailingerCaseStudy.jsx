import { Link } from 'react-router-dom'
import MaskReveal from '../components/MaskReveal.jsx'
import { Block, ShotGrid } from '../components/CaseStudyBlock.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './CaseStudyShared.css'

const ROLE_CONTRIBUTION = [
  'Designed Dialinger from its early stages, across both the Company and Super Admin platforms.',
  'Translated business requirements into product flows — from onboarding to billing to calling.',
  'Designed onboarding, subscription, communication, and administration workflows end to end.',
  'Structured complex telecom concepts (IVR, number provisioning, call states) into understandable journeys.',
  'Built reusable UI patterns and maintained consistency as new features were added.',
  'Worked with product, engineering, and QA through handoff and iteration.',
]

const WORK_AREAS = [
  {
    title: 'Account & Onboarding',
    description: 'Sign up, login, account setup, and initial configuration.',
  },
  {
    title: 'Subscription & Billing',
    description: 'Plan selection, purchase, upgrade/downgrade, and custom plans.',
  },
  {
    title: 'Calling & Messaging',
    description: 'Calling, messaging, contacts, call history, and the Unified Call Box.',
  },
  {
    title: 'Phone Numbers',
    description: 'Number purchasing, management, and configuration.',
  },
  {
    title: 'CRM & IVR',
    description: 'Call flows, IVR configuration, and CRM-linked communication.',
  },
  {
    title: 'Administration',
    description: 'Super Admin — customer, subscription, and platform-level management.',
  },
]

const PROCESS_STAGES = [
  {
    title: 'Discovery',
    description:
      'Working on Dialinger from the start meant understanding the business model, user journey, and Company vs. Super Admin ownership before defining any screen.',
  },
  {
    title: 'User Flows & Architecture',
    description:
      'Mapped end-to-end journeys — sign up to first call, plan comparison to upgrade, contact to call to history — to keep individual features connected to the bigger picture.',
  },
  {
    title: 'Wireframes & IA',
    description:
      'Structured navigation, grouping, and progressive disclosure for complex areas like IVR, CRM, and number management, so power stayed accessible without early complexity.',
  },
  {
    title: 'Visual Design & System',
    description:
      'Built high-fidelity screens with scalable patterns — tables, step flows, call interfaces, status indicators — designed to extend as new features shipped.',
  },
  {
    title: 'Handoff & Iteration',
    description:
      'Worked with developers, PMs, and QA through implementation, continuing to refine designs against technical limits and real usage.',
  },
]

const DESIGN_APPROACH = [
  {
    title: 'Start simple, reveal complexity',
    description: 'Progressive disclosure so common tasks stay simple and advanced config stays available.',
  },
  {
    title: 'Design the journey, not the screen',
    description: 'Subscription, number purchase, and onboarding solved as before → action → confirmation → result.',
  },
  {
    title: 'Make system states clear',
    description: 'Calling, subscription, and number states (e.g. connecting → active → completed) always visible.',
  },
  {
    title: 'Keep Company & Super Admin connected',
    description: 'Separate responsibilities, one consistent set of patterns and mental models.',
  },
]

const OUTCOMES = [
  'A single connected product experience across onboarding, subscriptions, calling, and administration — not a collection of separate tools.',
  'Reusable patterns for step-based flows, configuration, and call states that scaled cleanly as new features shipped.',
  'A consistent design language shared between the Company and Super Admin platforms.',
]

const LEARNINGS = [
  'Designing a product from its early stages means thinking in business model → user journey → feature → workflow → system state → UI, not just screens.',
  'Progressive disclosure is essential for telecom products — powerful configuration has to coexist with a simple everyday experience.',
  'Working across Company and Super Admin sides taught me how to keep two different user experiences consistent without merging them into one.',
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
          <p className="case-page__subtitle">Company Side and Super Admin Side</p>
          <p className="case-page__tagline">
            Designing a cloud communications platform end to end — calling,
            messaging, phone numbers, IVR, CRM, and subscriptions — across
            the Company and Super Admin sides.
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
            Dialinger is a cloud-based business communications platform for
            managing calling, messaging, phone numbers, IVR, contacts, and
            CRM from one place. I worked on it from its early stages, helping
            shape the experience across both the Company and Super Admin
            sides — from sign-up through plan management, calling, and
            platform administration.
          </p>
        </Block>

        <Block title="MY ROLE & CONTRIBUTION">
          <ul className="case-list case-list--arrow">
            {ROLE_CONTRIBUTION.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="PRODUCT AREAS I WORKED ON" wide>
          <div className="case-ia-grid">
            {WORK_AREAS.map((area) => (
              <div key={area.title} className="case-ia-card">
                <h3 className="case-ia-card__title">{area.title}</h3>
                <p className="draft-copy">{area.description}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="PROBLEM / CHALLENGE">
          <p className="draft-copy">
            Dialinger combines multiple telecom capabilities — onboarding,
            billing, calling, numbers, IVR, CRM — into one platform, each
            with its own rules and states. The challenge was making all of
            it feel like one connected product instead of separate tools,
            while designing from an early stage with requirements still
            evolving: give businesses powerful capabilities without making
            the everyday experience feel complicated.
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

        <Block title="DESIGN APPROACH">
          <div className="case-process">
            {DESIGN_APPROACH.map((item, index) => (
              <div key={item.title} className="case-process__stage">
                <div className="case-process__marker" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="case-process__body">
                  <h3 className="case-process__title">{item.title}</h3>
                  <p className="draft-copy">{item.description}</p>
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
