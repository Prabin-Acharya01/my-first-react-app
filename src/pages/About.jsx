import { skills, tools, experience } from '../data/about.js'
import MaskReveal from '../components/MaskReveal.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './About.css'

function AboutHero() {
  const ref = useReveal()
  return (
    <section className="about-hero">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className="eyebrow">ABOUT</p>
          <MaskReveal as="h1" className="about-hero__title">
            Hi, I&rsquo;m Prabin.
          </MaskReveal>
          <p className="about-hero__text">
            I design digital products with a focus on clarity, usability, and
            thoughtful interaction.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhatIDo() {
  return (
    <section className="about-block">
      <div className="container about-block__grid">
        <MaskReveal as="h2" className="about-block__title">
          WHAT I DO
        </MaskReveal>
        <ul className="about-tag-list">
          {skills.map((skill) => (
            <li key={skill} className="about-tag">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Tools() {
  return (
    <section className="about-block">
      <div className="container about-block__grid">
        <MaskReveal as="h2" className="about-block__title">
          TOOLS
        </MaskReveal>
        <ul className="about-tag-list">
          {tools.map((tool) => (
            <li key={tool} className="about-tag">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="about-block">
      <div className="container about-block__grid">
        <MaskReveal as="h2" className="about-block__title">
          EXPERIENCE
        </MaskReveal>

        <div className="about-experience">
          {experience.map((job) => (
            <div key={job.company} className="about-experience__item">
              <div className="about-experience__head">
                <h3>{job.company}</h3>
                <span className="about-experience__period">
                  {job.period}
                </span>
              </div>
              <p className="about-experience__role">{job.role}</p>
              <p className="about-experience__description">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <>
      <AboutHero />
      <WhatIDo />
      <Tools />
      <Experience />
    </>
  )
}

export default About
