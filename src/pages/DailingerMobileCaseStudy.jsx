import { Link } from 'react-router-dom'
import MaskReveal from '../components/MaskReveal.jsx'
import { Block, ShotGrid } from '../components/CaseStudyBlock.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './CaseStudyShared.css'

const ROLE_CONTRIBUTION = [
  'Improved and expanded the Dailinger mobile experience across Calling, Contacts, Messaging, Unified Call Box, and Settings.',
  'Brought selected web capabilities into mobile, adapted for smaller screens and mobile usage patterns.',
  'Improved navigation and touch interaction patterns across the app.',
  'Maintained consistency between the Web and Mobile experiences.',
]

const KEY_AREAS = [
  { title: 'Calling', description: 'Improved the calling experience and made essential call actions easier to reach.' },
  { title: 'Contacts', description: 'A simpler way to browse, search, and manage contacts on mobile.' },
  { title: 'Messaging', description: 'Adapted messaging into a focused mobile conversation experience.' },
  { title: 'Unified Call Box', description: 'Brought core calling and communication actions into one mobile view.' },
  { title: 'Settings', description: 'Structured settings into clear categories so preferences are easy to find.' },
]

const PROCESS_STAGES = [
  {
    title: 'Understand',
    description: 'Reviewed existing web workflows and how users relied on them day to day.',
  },
  {
    title: 'Simplify',
    description: 'Identified the most important mobile use cases and cut the rest.',
  },
  {
    title: 'Adapt',
    description: 'Rebuilt those flows for touch, quick access, and clear hierarchy — not a shrunk web page.',
  },
  {
    title: 'Validate',
    description: 'Reviewed with the team and iterated based on real usage and feedback.',
  },
]

const OUTCOMES = [
  "Extended Dailinger's core communication capabilities beyond the web, giving users calling, contacts, messaging, and settings on the go.",
  'Established mobile-friendly patterns that stayed consistent with the web platform.',
]

const LEARNINGS = [
  "Adapting an existing web platform for mobile means prioritizing, not shrinking — the same feature can need a different interaction model.",
  'Keeping mobile and web consistent while respecting mobile-specific constraints requires deliberate trade-offs, not a direct port.',
]

const SCREEN_SHOTS = [
  { label: 'SCREEN 01', src: '/Dialinger Mobile1.png' },
  { label: 'SCREEN 02', src: '/Dialinger Mobile2.png' },
  { label: 'SCREEN 03', src: '/Dialinger Mobile3.png' },
  { label: 'SCREEN 04', src: '/Dialinger Mobile4.png' },
  { label: 'SCREEN 05', src: '/Dialinger Mobile5.png' },
  { label: 'SCREEN 06', src: '/Dialinger Mobile6.png' },
  { label: 'SCREEN 07', src: '/Dialinger Mobile7.png' },
  { label: 'SCREEN 08', src: '/Dialinger Mobile8.png' },
  { label: 'SCREEN 09', src: '/Dialinger Mobile9.png' },
  { label: 'SCREEN 10', src: '/Dialinger Mobile10.png' },
  { label: 'SCREEN 11', src: '/Dialinger Mobile11.png' },
]

function DailingerMobileCaseStudy() {
  const heroRef = useReveal()

  return (
    <section className="case-page">
      <div className="container">
        <div ref={heroRef} className="reveal case-page__hero">
          <p className="eyebrow">
            PRODUCT DESIGN &middot; TELECOMMUNICATIONS &middot; MOBILE APP
          </p>
          <MaskReveal as="h1" className="case-page__title" delay={80}>
            DAILINGER MOBILE APP
          </MaskReveal>
          <p className="case-page__tagline">
            Bringing essential business communication — calling, contacts,
            messaging, and settings — to mobile, adapted from the Dailinger
            web platform for on-the-go use.
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
              <p>Mobile App &middot; SaaS</p>
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
            Dailinger Mobile brings essential business communication to
            users on the go — calls, contacts, messaging, and communication
            settings, all from a mobile device. I worked on improving the
            existing mobile experience and extending key capabilities from
            the web platform into mobile, adapted for smaller screens and
            mobile usage patterns.
          </p>
        </Block>

        <Block title="MY ROLE & CONTRIBUTION">
          <ul className="case-list case-list--arrow">
            {ROLE_CONTRIBUTION.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="KEY AREAS" wide>
          <div className="case-ia-grid">
            {KEY_AREAS.map((area) => (
              <div key={area.title} className="case-ia-card">
                <h3 className="case-ia-card__title">{area.title}</h3>
                <p className="draft-copy">{area.description}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="PROBLEM / CHALLENGE">
          <p className="draft-copy">
            Dailinger's web platform packs in a lot of communication
            capability, but mobile users need something faster and more
            focused. The challenge was prioritizing the most important
            actions and simplifying complex interactions — adapting web
            functionality for mobile instead of just shrinking it down.
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
          <ShotGrid shots={SCREEN_SHOTS} aspect="device" />
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

export default DailingerMobileCaseStudy
