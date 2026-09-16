import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import Arrow from './Arrow.jsx'
import MobileMenu from './MobileMenu.jsx'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'WORK', to: '/#work' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <Logo />

          <nav className="navbar__links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} to={link.to} className="navbar__link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="navbar__cta">
            <Button to="/#contact" variant="primary">
              LET&rsquo;S TALK <Arrow />
            </Button>
          </div>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Navbar
