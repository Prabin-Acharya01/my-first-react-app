import Arrow from './Arrow.jsx'
import LinkedInLink from './LinkedInLink.jsx'
import MaskReveal from './MaskReveal.jsx'
import { profile } from '../data/profile.js'
import { useReveal } from '../hooks/useReveal.js'
import { useParallax } from '../hooks/useParallax.js'
import './ContactSection.css'

function ContactSection() {
  const ref = useReveal()
  const parallaxRef = useParallax(0.08)

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div ref={ref} className="reveal reveal-group contact-section__inner">
          <div ref={parallaxRef} className="contact-section__parallax">
            <h2 className="contact-section__title">
              <MaskReveal as="span" className="contact-section__title-line">
                LET&rsquo;S BUILD
              </MaskReveal>
              <MaskReveal
                as="span"
                className="contact-section__title-line"
                delay={80}
              >
                SOMETHING
              </MaskReveal>
              <MaskReveal
                as="span"
                className="contact-section__title-line"
                delay={160}
              >
                USEFUL.
              </MaskReveal>
            </h2>

            <p
              className="contact-section__text stagger-fade"
              style={{ '--fade-delay': '260ms' }}
            >
              Have a product idea, UX problem, or design opportunity?
              <br />
              I&rsquo;d be happy to hear about it.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="contact-section__email stagger-fade"
              style={{ '--fade-delay': '340ms' }}
            >
              {profile.email} <Arrow />
            </a>
          </div>

          <div
            className="contact-section__details stagger-fade"
            style={{ '--fade-delay': '400ms' }}
          >
            <div>
              <span className="contact-section__label">LOCATION</span>
              <p>{profile.location}</p>
            </div>
            <div>
              <span className="contact-section__label">PHONE</span>
              <p>{profile.phone}</p>
            </div>
            <div>
              <span className="contact-section__label">SOCIAL</span>
              <LinkedInLink className="contact-section__linkedin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
