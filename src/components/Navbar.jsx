import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import MobileMenu from './MobileMenu.jsx'
import ThemeToggle from './ThemeToggle.jsx'
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
    let frame = null

    const update = () => {
      frame = null
      setScrolled(window.scrollY > 8)
    }

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
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

          <div className="navbar__actions">
            <ThemeToggle />

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
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Navbar
