import { Link } from 'react-router-dom'
import MaskReveal from '../components/MaskReveal.jsx'
import { Block, ShotGrid } from '../components/CaseStudyBlock.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './CaseStudyShared.css'

const ROLE_CONTRIBUTION = [
  'Translated business requirements into mobile user flows.',
  'Designed wireframes and high-fidelity UI for employee and HR workflows.',
  'Simplified complex HR information for mobile screens, including empty, loading, success, and error states.',
  'Maintained consistency with the Hajir design system.',
  'Worked with product, engineering, and QA through handoff and iteration.',
  'Key areas: Attendance, Leave, Payslip, Employee Information, Notifications, and Account/Employer Switching.',
]

const PROCESS_STAGES = [
  {
    title: 'Discovery',
    description:
      'Studied existing web workflows, business requirements, and user roles to understand what each feature needed to accomplish on mobile.',
  },
  {
    title: 'User Flows & IA',
    description:
      'Mapped key journeys around what the user needs, what action they take, and what happens next — surfacing the most-used information first.',
  },
  {
    title: 'Wireframes & Interaction',
    description:
      'Structured navigation, content hierarchy, and touch interactions — bottom sheets, filters, confirmations — before layering in visual design.',
  },
  {
    title: 'Visual Design & System',
    description:
      'Built high-fidelity screens with reusable Hajir components — cards, lists, forms, status indicators — adapted across mobile screen sizes.',
  },
  {
    title: 'Handoff & Iteration',
    description:
      'Worked with developers and QA through implementation, refining designs based on technical constraints and edge cases.',
  },
]

const DESIGN_APPROACH = [
  { title: 'Prioritize', description: 'Surface the information users need most, first.' },
  { title: 'Simplify', description: 'Break complex HR workflows into smaller, clear steps.' },
  {
    title: 'Stay Consistent',
    description:
      "Reuse familiar patterns so users don't relearn interactions across modules.",
  },
]

const OUTCOMES = [
  'Made everyday HR tasks — attendance, leave, payslips — quick to complete without opening the full web platform.',
  'Established reusable mobile states (empty, loading, error) applied consistently across HR modules.',
  'Closer design-to-dev handoff led to fewer gaps between the design intent and the shipped experience.',
]

const LEARNINGS = [
  "Mobile product design isn't just responsive layout — the same requirement can need a different interaction model on mobile.",
  'Working with a live, multi-module HRMS product taught me to balance business rules, user needs, technical constraints, and design consistency.',
]

const SCREEN_SHOTS = [
  { label: 'SCREEN 01', src: '/HajirMobileScreen01.png' },
  { label: 'SCREEN 02', src: '/HajirMobileScreen02.png' },
  { label: 'SCREEN 03', src: '/HajirMobileScreen03.png' },
  { label: 'SCREEN 04', src: '/HajirMobileScreen04.png' },
  { label: 'SCREEN 05', src: '/HajirMobileScreen05.png' },
  { label: 'SCREEN 06', src: '/HajirMobileScreen06.png' },
]

function HajirMobileCaseStudy() {
  const heroRef = useReveal()

  return (
    <section className="case-page">
      <div className="container">
        <div ref={heroRef} className="reveal case-page__hero">
          <p className="eyebrow">PRODUCT DESIGN &middot; HRMS &middot; MOBILE APP</p>
          <MaskReveal as="h1" className="case-page__title" delay={80}>
            HAJIR MOBILE APP
          </MaskReveal>
          <p className="case-page__tagline">
            Improving complex HRMS workflows across PIMS, Attendance,
            Standup, Payroll, Inbox, Grievance, and Geo-fencing.
          </p>

          <div className="case-page__meta">
            <div>
              <span className="case-block__label">ROLE</span>
              <p>UI/UX Designer / QA Engineer</p>
            </div>
            <div>
              <span className="case-block__label">YEAR</span>
              <p>2026</p>
            </div>
            <div>
              <span className="case-block__label">PLATFORM</span>
              <p>Mobile App &middot; HRMS</p>
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
            The Hajir mobile app is part of a live HRMS product I work on
            professionally at my current company — this is a team project,
            not a personal one. Some details, data, and screens shown here
            are simplified or anonymized to respect company and client
            confidentiality.
          </p>
        </div>

        <Block title="OVERVIEW">
          <p className="draft-copy">
            Hajir is an HRMS mobile app that brings everyday HR tasks —
            attendance, leave, payslips, notifications, and employee
            information — to employees and managers on the go, cutting down
            the need to open the full web platform for routine tasks. I
            worked on designing and improving these mobile experiences to
            keep them simple and accessible on smaller screens.
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
            Hajir supports a wide range of HR processes that are easier to
            organize on a large web interface. The challenge was adapting
            these information-heavy workflows for mobile — making key
            actions quick to find, keeping navigation clear, and presenting
            employee and payroll data in a readable format — without simply
            shrinking the web experience down to a smaller screen.
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

export default HajirMobileCaseStudy
