import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './FloatingBackToWork.css'

function FloatingBackToWork() {
  const { pathname } = useLocation()
  const isCaseStudy = pathname.startsWith('/work/')
  const [visible, setVisible] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    setVisible(false)
    if (!isCaseStudy) return

    function handleScroll() {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        const y = window.scrollY
        const pastHero = y > 420
        const docHeight = document.documentElement.scrollHeight
        const nearBottom = y + window.innerHeight > docHeight - 260

        setVisible(pastHero && !nearBottom)
        ticking.current = false
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isCaseStudy, pathname])

  if (!isCaseStudy) return null

  return (
    <Link
      to="/#work"
      className={`floating-back${visible ? ' floating-back--visible' : ''}`}
      aria-label="Back to work"
    >
      <svg
        className="floating-back__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M20 12H4M10 6l-6 6 6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="floating-back__label">Back to Work</span>
    </Link>
  )
}

export default FloatingBackToWork
