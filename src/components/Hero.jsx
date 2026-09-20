import Button from './Button.jsx'
import Arrow from './Arrow.jsx'
import MaskReveal from './MaskReveal.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './Hero.css'

function Hero() {
  const textRef = useReveal()

  return (
    <section className="hero">
      <div className="container">
        <div ref={textRef} className="reveal-group hero__content">
          <h1 className="hero__headline">
            <MaskReveal as="span" className="hero__line" delay={80}>
              PRABIN ACHARYA
            </MaskReveal>
          </h1>

          <span
            className="hero__role stagger-fade"
            style={{ '--fade-delay': '220ms' }}
          >
            ui/ux designer.
          </span>

          <p
            className="hero__subtext stagger-fade"
            style={{ '--fade-delay': '300ms' }}
          >
            Designing digital products that make{' '}
            <span className="accent">complex</span> things feel{' '}
            <span className="accent">simple</span>.
          </p>

          <p
            className="hero__intro stagger-fade"
            style={{ '--fade-delay': '380ms' }}
          >
            I&rsquo;m Prabin — a UI/UX Designer focused on creating
            intuitive experiences for SaaS, HRMS, telecommunications, CRM,
            EdTech, and consumer products.
          </p>

          <div
            className="hero__actions stagger-fade"
            style={{ '--fade-delay': '440ms' }}
          >
            <Button to="/#work" variant="primary">
              VIEW MY WORK <Arrow />
            </Button>
            <Button to="/#contact" variant="secondary">
              LET&rsquo;S CONNECT
            </Button>
          </div>

          <div
            className="hero__meta stagger-fade"
            style={{ '--fade-delay': '500ms' }}
          >
            <span>PA / 2026</span>
            <span className="hero__meta-divider" aria-hidden="true" />
            <span>BASED IN KATHMANDU, NEPAL</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
