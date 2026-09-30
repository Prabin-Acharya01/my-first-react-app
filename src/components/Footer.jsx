import { useEffect, useId, useState } from 'react'
import { profile } from '../data/profile.js'
import './Footer.css'

const TZ = 'Asia/Kathmandu'

const timeFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: TZ,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

function nepalHour(date) {
  return Number(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: TZ,
      hour: '2-digit',
      hour12: false,
    }).format(date),
  ) % 24
}

function greetingFor(hour) {
  if (hour >= 5 && hour < 12) return 'Good morning. Fresh pixels, clear thinking.'
  if (hour >= 12 && hour < 17) return 'Afternoon. Sketching ideas over a cup of chiya.'
  if (hour >= 17 && hour < 21) return 'Evening. Polishing the details nobody notices, but everyone feels.'
  return 'Late night. When the quietest ideas get loud.'
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function Footer() {
  const pathId = useId()
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <p className="footer__meta">
            {profile.name} · Kathmandu ·{' '}
            <time className="footer__time" dateTime={now.toISOString()}>
              {timeFormat.format(now)} NPT
            </time>
          </p>
          <p className="footer__note">{greetingFor(nepalHour(now))}</p>
        </div>

        <div className="footer__right">
          <p className="footer__copy">
            © 2026 {profile.name}. All rights reserved.
          </p>
          <button
            type="button"
            className="footer__top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <svg
              className="footer__ring"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <defs>
                <path
                  id={pathId}
                  d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0"
                />
              </defs>
              <text>
                <textPath
                  href={`#${pathId}`}
                  textLength="236"
                  lengthAdjust="spacing"
                >
                  BACK TO TOP • BACK TO TOP • BACK TO TOP •
                </textPath>
              </text>
            </svg>
            <span className="footer__arrow" aria-hidden="true">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
