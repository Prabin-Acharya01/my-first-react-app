import { Link } from 'react-router-dom'
import './Logo.css'

function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Prabin Acharya, home">
      <span className="logo__mark">
        PA<span className="logo__dot" aria-hidden="true" />
      </span>
      <span className="logo__name">
        <span className="logo__first">PRABIN</span>
        <br className="logo__break" />
        <span className="logo__last">ACHARYA</span>
      </span>
    </Link>
  )
}

export default Logo
