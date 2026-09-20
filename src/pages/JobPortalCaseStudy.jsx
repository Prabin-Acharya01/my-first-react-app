import { Link } from 'react-router-dom'
import MaskReveal from '../components/MaskReveal.jsx'
import { Block, ShotGrid } from '../components/CaseStudyBlock.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './CaseStudyShared.css'

const OBJECTIVES = [
  'Connect job seekers with relevant job opportunities quickly.',
  'Give recruiters simple tools to post jobs and manage applicants.',
  'Provide an admin panel to oversee companies and listings.',
  'Simplify the end-to-end application and review process.',
  'Build trust between job seekers and recruiters.',
]

const CHALLENGES = [
  'Serving two very different user types — job seekers and recruiters — within one coherent system.',
  'Keeping job listings organized, searchable, and up to date.',
  'Giving recruiters a manageable way to review high volumes of applications.',
]

const PRODUCT_USERS = [
  'Job Seekers: people actively searching and applying for jobs across industries.',
  'Recruiters / Companies: HR teams and hiring managers posting jobs and reviewing applicants.',
  'Admins: manage company accounts and oversee listings on the platform.',
]

const USER_NEEDS = [
  'Job seekers need fast search, filtering, and a simple application flow.',
  'Recruiters need a clear dashboard to manage job posts and applicants.',
  'Admins need visibility and control over registered companies and listings.',
]

const UNIQUE_FEATURES = [
  'Dual-sided platform serving both job seekers and recruiters in one system.',
  'Dedicated admin panel for managing companies and listings.',
  '[ADD: any other differentiator — e.g. resume builder, application tracking, notifications]',
]

const IA_GROUPS = [
  {
    title: 'Onboarding',
    items: ['Landing → Sign Up → Login', 'Role selection: Job Seeker / Recruiter'],
  },
  {
    title: 'Job Seeker',
    items: [
      'Job Search / Filter → Job Details → Apply',
      'Profile / Resume → Application History',
    ],
  },
  {
    title: 'Recruiter',
    items: [
      'Post Job → Manage Listings',
      'View Applicants → Review → Shortlist / Reject',
    ],
  },
  {
    title: 'Admin',
    items: ['Manage Companies', 'Manage Listings', 'Platform Oversight'],
  },
]

const USER_FLOW_STAGES = [
  {
    title: 'Entry',
    description:
      'The app checks for an existing session and routes the user to login or registration.',
  },
  {
    title: 'Role Selection',
    description:
      'New users choose whether they are signing up as a job seeker or a recruiter.',
  },
  {
    title: 'Job Seeker Path',
    description:
      'Seekers search and filter jobs, view details, and submit applications.',
  },
  {
    title: 'Recruiter Path',
    description:
      'Recruiters post jobs, then track and review incoming applicants from a dashboard.',
  },
  {
    title: 'Admin Path',
    description:
      'Admins manage registered companies and oversee listings across the platform.',
  },
]

const MOODBOARD_SHOTS = [
  { label: 'MOOD 01', src: '/MoodboardJobPortal1.png' },
  { label: 'MOOD 02', src: '/MoodboardJobPortal2.png' },
  { label: 'MOOD 03', src: '/MoodboardJobPortal3.png' },
]
const FINAL_SCREEN_SHOTS = [
  { label: 'JOB SEARCH HOME', src: '/Jobportal5.png' },
  { label: 'SIGN UP', src: '/Jobportal1.png' },
  { label: 'LOGIN', src: '/Jobportal2.png' },
  { label: 'RECRUITER · JOB LISTINGS', src: '/Jobportal3.png' },
  { label: 'ADMIN · COMPANIES', src: '/Jobportal4.png' },
]

function JobPortalCaseStudy() {
  const heroRef = useReveal()

  return (
    <section className="case-page">
      <div className="container">
        <div ref={heroRef} className="reveal case-page__hero">
          <p className="eyebrow">PRODUCT DESIGN &middot; RECRUITMENT &middot; WEB APP</p>
          <MaskReveal as="h1" className="case-page__title" delay={80}>
            JOB PORTAL SYSTEM
          </MaskReveal>
          <p className="case-page__tagline">
            A web-based platform for job seekers and recruiters — job
            discovery, applications, and recruiter-side hiring workflows in
            one place.
          </p>

          <div className="case-page__meta">
            <div>
              <span className="case-block__label">ROLE</span>
              <p>UI/UX Designer</p>
            </div>
            <div>
              <span className="case-block__label">YEAR</span>
              <p>2025</p>
            </div>
            <div>
              <span className="case-block__label">PLATFORM</span>
              <p>Web App</p>
            </div>
          </div>

          <a
            className="case-page__link"
            href="https://jobprotal.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            View Live Project ↗
          </a>
        </div>
      </div>

      <div className="container">
        <div className="case-page__note">
          <h2 className="case-page__note-title">
            Please <span className="accent">Note</span>
          </h2>
          <p>
            This case study explores Job Portal System, a personal project
            designed to help job seekers find opportunities and give
            recruiters simple tools to post jobs and manage applicants.
          </p>
        </div>

        <Block title="PROBLEM STATEMENT">
          <p className="draft-copy">
            [ADD: the core problem — e.g. job seekers struggle to find
            relevant jobs quickly, and recruiters lack an easy way to manage
            postings and applicants in one place.]
          </p>
        </Block>

        <Block title="OBJECTIVES & GOALS">
          <ul className="case-list case-list--columns">
            {OBJECTIVES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="CHALLENGES">
          <ul className="case-list case-list--arrow case-list--warn">
            {CHALLENGES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="PRODUCT USERS">
          <ul className="case-list">
            {PRODUCT_USERS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="USER NEEDS">
          <ul className="case-list case-list--arrow">
            {USER_NEEDS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="UNIQUE FEATURES">
          <ul className="case-list case-list--arrow">
            {UNIQUE_FEATURES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="INFORMATION ARCHITECTURE" wide>
          <div className="case-ia-grid">
            {IA_GROUPS.map((group) => (
              <div key={group.title} className="case-ia-card">
                <h3 className="case-ia-card__title">{group.title}</h3>
                <ul className="case-list case-list--arrow">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Block>

        <Block title="USER FLOW" wide>
          <div className="case-process">
            {USER_FLOW_STAGES.map((stage, index) => (
              <div key={stage.title} className="case-process__stage">
                <div className="case-process__marker" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="case-process__body">
                  <h3 className="case-process__title">{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Block>
      </div>

      <div className="case-page__design-phase">
        <div className="container">
          <MaskReveal as="h2" className="case-page__phase-title">
            DESIGN PHASE
          </MaskReveal>

          <Block title="MOODBOARD">
            <ShotGrid shots={MOODBOARD_SHOTS} />
          </Block>

          <Block title="FINAL SCREENS" wide>
            <ShotGrid shots={FINAL_SCREEN_SHOTS} aspect="browser" />
          </Block>
        </div>
      </div>

      <div className="container">
        <Link to="/#work" className="case-study__back">
          ← BACK TO WORK
        </Link>
      </div>
    </section>
  )
}

export default JobPortalCaseStudy
