import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import Arrow from './Arrow.jsx'
import MaskReveal from './MaskReveal.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { useTilt } from '../hooks/useTilt.js'
import { useScrollExit } from '../hooks/useScrollExit.js'
import './Hero.css'

function HeroPortrait() {
  const revealRef = useReveal()
  const tiltRef = useTilt(8)

  return (
    <div className="hero__portrait-col">
      <Link
        to="/about"
        ref={revealRef}
        className="hero__portrait reveal"
        aria-label="More about Prabin — hand-sketched self portrait"
      >
        <span ref={tiltRef} className="hero__portrait-tilt">
          <span className="hero__portrait-frame">
            <img
              src="/portrait-sketch.png"
              alt="Hand-sketched line-art portrait of Prabin Acharya"
              className="hero__portrait-img"
            />
          </span>
        </span>
      </Link>

      <div className="hero__portrait-caption">
        <span>PA / 2026</span>
        <span className="hero__meta-divider" aria-hidden="true" />
        <span>BASED IN KATHMANDU, NEPAL</span>
      </div>
    </div>
  )
}

function Hero() {
  const scrollRef = useScrollExit()
  const textRef = useReveal()

  return (
    <section className="hero">
      <div ref={scrollRef} className="hero__scroll">
        <div className="container hero__grid">
          <div ref={textRef} className="reveal-group hero__content">
            <h1 className="hero__headline">
              <MaskReveal as="span" className="hero__line" delay={80}>
                PRABIN ACHARYA
              </MaskReveal>
            </h1>

            <span
              className="hero__role-row stagger-fade"
              style={{ '--fade-delay': '220ms' }}
            >
              <span className="hero__role">ui/ux designer.</span>
              <svg
                className="hero__connector"
                width="86"
                height="36"
                viewBox="0 0 86 36"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 6C24 2 40 26 62 20C70 18 74 12 80 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4 6"
                />
                <path
                  d="M70 6L80 8L76 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
          </div>

          <HeroPortrait />
        </div>
      </div>
    </section>
  )
}

export default Hero
