import Arrow from './Arrow.jsx'
import LinkedInLink from './LinkedInLink.jsx'
import { profile } from '../data/profile.js'
import { useReveal } from '../hooks/useReveal.js'
import './ContactSection.css'

function ContactSection() {
  const ref = useReveal()

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div ref={ref} className="reveal contact-section__inner">
          <div>
            <h2 className="contact-section__title">
              LET&rsquo;S BUILD
              <br />
              SOMETHING
              <br />
              USEFUL.
            </h2>

            <p className="contact-section__text">
              Have a product idea, UX problem, or design opportunity?
              <br />
              I&rsquo;d be happy to hear about it.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="contact-section__email"
            >
              {profile.email} <Arrow />
            </a>
          </div>

          <div className="contact-section__details">
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
