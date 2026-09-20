import Arrow from './Arrow.jsx'
import { Link } from 'react-router-dom'
import MaskReveal from './MaskReveal.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './AboutTeaser.css'

function AboutTeaser() {
  const ref = useReveal()

  return (
    <section id="about" className="about-teaser">
      <div className="container">
        <div ref={ref} className="reveal reveal-group about-teaser__inner">
          <MaskReveal as="h2" className="about-teaser__title">
            A LITTLE ABOUT ME.
          </MaskReveal>

          <div className="about-teaser__body">
            <p className="stagger-fade" style={{ '--fade-delay': '80ms' }}>
              I&rsquo;m Prabin, a UI/UX Designer based in Kathmandu,
              Nepal.
            </p>
            <p className="stagger-fade" style={{ '--fade-delay': '160ms' }}>
              I enjoy understanding how products work, identifying where
              users struggle, and turning complex workflows into clear and
              intuitive experiences.
            </p>
            <p className="stagger-fade" style={{ '--fade-delay': '240ms' }}>
              My experience includes working on SaaS, HRMS,
              telecommunications, CRM, EdTech, and mobile products.
            </p>
            <p className="stagger-fade" style={{ '--fade-delay': '320ms' }}>
              I also have a background in computer science, which helps me
              understand both design and the technology behind the products I
              work on.
            </p>

            <Link
              to="/about"
              className="about-teaser__link stagger-fade"
              style={{ '--fade-delay': '400ms' }}
            >
              MORE ABOUT ME <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTeaser
