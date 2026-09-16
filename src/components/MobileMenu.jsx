import { Link } from 'react-router-dom'
import Arrow from './Arrow.jsx'
import LinkedInLink from './LinkedInLink.jsx'
import './MobileMenu.css'

const LINKS = [
  { label: 'WORK', to: '/#work' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/#contact' },
]

function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}
      aria-hidden={!open}
    >
      <nav className="mobile-menu__links" aria-label="Mobile">
        {LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="mobile-menu__link"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mobile-menu__footer">
        <Link
          to="/#contact"
          className="mobile-menu__talk"
          onClick={onClose}
          tabIndex={open ? 0 : -1}
        >
          LET&rsquo;S TALK <Arrow />
        </Link>
        <LinkedInLink
          className="mobile-menu__linkedin"
          tabIndex={open ? 0 : -1}
        />
      </div>
    </div>
  )
}

export default MobileMenu
