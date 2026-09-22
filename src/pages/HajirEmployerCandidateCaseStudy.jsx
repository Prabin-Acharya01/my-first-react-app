import { Link } from 'react-router-dom'
import MaskReveal from '../components/MaskReveal.jsx'
import { Block, ShotGrid } from '../components/CaseStudyBlock.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './CaseStudyShared.css'

const ROLE_CONTRIBUTION = [
  'Translated business requirements into user flows across the Company, Candidate, and Super Admin sides of the platform.',
  'Designed workflows for different user roles and permission levels, from HR admins to individual employees.',
  'Created wireframes, IA, and high-fidelity UI for data-heavy screens — tables, dashboards, reports, and analytics.',
  'Simplified complex HR and administrative processes into clear, scannable interfaces.',
  'Maintained consistency across modules and the broader Hajir design system.',
  'Worked with product managers, developers, and QA through implementation and iteration.',
]

const WORK_AREAS = [
  {
    title: 'Attendance & Shift',
    description: 'Attendance tracking, shift configuration, and related administrative workflows.',
  },
  {
    title: 'Leave Management',
    description: 'Leave configuration, requests, approvals, and balances.',
  },
  {
    title: 'Payroll',
    description: 'Salary configuration, payroll processing, and payroll reports.',
  },
  {
    title: 'Approval & Workflow',
    description: 'Approval hierarchies, approvers, permissions, and workflow configuration.',
  },
  {
    title: 'HR & Employee Management',
    description: 'Employee information, org structures, departments, designations, and grades.',
  },
  {
    title: 'Reports & Analytics',
    description: 'Data-heavy reports, dashboards, filters, and summaries.',
  },
  {
    title: 'ATS / Recruitment',
    description: 'Recruitment and applicant management workflows on the candidate/application side.',
  },
  {
    title: 'Policies, Events & Notices',
    description: 'Configuration, policies, holidays, company events, and the notice board.',
  },
]

const PROCESS_STAGES = [
  {
    title: 'Discovery',
    description:
      'Understood the business requirement, user role, existing workflow, and its relationship to the rest of the HRMS before touching UI.',
  },
  {
    title: 'Research & Flows',
    description:
      'Mapped the workflow around the user’s task — especially for approvals, payroll, leave, and attendance — and traced how one module’s action could affect another.',
  },
  {
    title: 'Wireframes & IA',
    description:
      'Structured information hierarchy, navigation, and data presentation (table, card, drawer, form) before moving into visual design.',
  },
  {
    title: 'Visual Design & System',
    description:
      'Built high-fidelity screens using existing Hajir patterns — tables, filters, tabs, statuses — reusing components across modules instead of one-off solutions.',
  },
  {
    title: 'Handoff & Iteration',
    description:
      'Worked with developers, QA, and stakeholders through implementation, refining designs based on technical constraints and real usage.',
  },
]

const DESIGN_APPROACH = [
  {
    title: 'Design for different users',
    description: 'Role, permissions, and task frequency shaped how each experience was structured.',
  },
  {
    title: 'Make information scannable',
    description: 'Prioritization, grouping, and progressive disclosure over showing everything at once.',
  },
  {
    title: 'Build consistency across modules',
    description: 'One familiar pattern for search, filter, table, detail, action, and confirmation everywhere.',
  },
  {
    title: 'Design for real business rules',
    description: 'Surfaced dependencies like company → branch → department → role instead of hiding them.',
  },
]

const OUTCOMES = [
  'A more consistent experience across a large, multi-module HRMS — shared patterns for tables, filters, approvals, and states across Company, Candidate, and Super Admin sides.',
  'Complex, rule-heavy workflows (approvals, payroll, leave) became easier for admins and employees to complete without needing prior training.',
  'A reusable set of UI patterns that reduced design and dev effort on subsequent modules.',
]

const LEARNINGS = [
  'Designing for a large HRMS is less about clean screens and more about understanding business rules, permissions, and dependencies between modules.',
  'Breaking large, ambiguous requirements into smaller workflows before designing UI led to far fewer surprises during implementation.',
  'Consistent patterns compound — once a user understands a workflow in one module, that mental model should carry across the platform.',
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
          <p className="case-page__subtitle">Company, Candidate & Super Admin sides</p>
          <p className="case-page__tagline">
            Designing workflows across the Company, Candidate, and Super
            Admin sides of Hajir — a comprehensive HRMS covering attendance,
            leave, payroll, recruitment, approvals, and employee
            administration.
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
            The Hajir web platform is part of a live HRMS product I work on
            professionally at my current company — this is a team project,
            not a personal one. Some details, data, and screens shown here
            are simplified or anonymized to respect company and client
            confidentiality.
          </p>
        </div>

        <Block title="OVERVIEW">
          <p className="draft-copy">
            Hajir is a comprehensive HRMS that manages the full employee
            lifecycle — from recruitment and onboarding to attendance, leave,
            payroll, performance, assets, and employee administration. I
            designed across the Company, Candidate, and Super Admin sides of
            the platform, building workflows used by HR teams, managers,
            employees, and platform administrators.
          </p>
        </Block>

        <Block title="MY ROLE & CONTRIBUTION">
          <ul className="case-list case-list--arrow">
            {ROLE_CONTRIBUTION.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="AREAS I WORKED ON" wide>
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
            Hajir isn't one app — it's many HR functions with different
            rules, users, and data relationships living in the same
            ecosystem. An HR admin manages employees and payroll while an
            employee just wants to check attendance or view a payslip, and
            Super Admins need platform-level configuration on top of that.
            The core challenge: keeping a large, rule-heavy platform
            understandable and efficient as more modules, roles, and
            configurations get added.
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

export default HajirEmployerCandidateCaseStudy
