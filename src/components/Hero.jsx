import Button from './Button.jsx'
import Arrow from './Arrow.jsx'
import HeroVisual from './HeroVisual.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './Hero.css'

function Hero() {
  const textRef = useReveal()
  const visualRef = useReveal()

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div ref={textRef} className="reveal hero__text">
          <p className="eyebrow">
            UI/UX DESIGNER · PRODUCT DESIGNER · KATHMANDU, NEPAL
          </p>

          <h1 className="hero__headline">
            DESIGNING DIGITAL
            <br />
            PRODUCTS THAT MAKE
            <br />
            <span className="accent">COMPLEX THINGS</span>
            <br />
            FEEL SIMPLE.
          </h1>

          <p className="hero__intro">
            I&rsquo;m Prabin — a Junior UI/UX Designer focused on creating
            intuitive experiences for SaaS, HRMS, telecommunications, CRM,
            EdTech, and consumer products.
          </p>

          <div className="hero__actions">
            <Button to="/#work" variant="primary">
              VIEW MY WORK <Arrow />
            </Button>
            <Button to="/#contact" variant="secondary">
              LET&rsquo;S CONNECT
            </Button>
          </div>

          <div className="hero__meta">
            <span>PA / 2026</span>
            <span className="hero__meta-divider" aria-hidden="true" />
            <span>BASED IN KATHMANDU, NEPAL</span>
          </div>
        </div>

        <div ref={visualRef} className="reveal hero__visual">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

export default Hero
