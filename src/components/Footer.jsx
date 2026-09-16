import { Link } from 'react-router-dom'
import LinkedInLink from './LinkedInLink.jsx'
import { profile } from '../data/profile.js'
import './Footer.css'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">PRABIN ACHARYA</p>
          <p className="footer__role">UI/UX DESIGNER · PRODUCT DESIGNER</p>
          <p className="footer__location">{profile.location}</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <Link to="/#work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/#contact">Contact</Link>
          <LinkedInLink />
        </nav>

        <div className="footer__bottom">
          <p>© 2026 Prabin Acharya</p>
          <button
            type="button"
            className="footer__top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            PA ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
