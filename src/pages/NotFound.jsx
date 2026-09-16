import { Link } from 'react-router-dom'
import './CaseStudy.css'

function NotFound() {
  return (
    <section className="case-study">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="case-study__title">Page not found.</h1>
        <p className="case-study__text">
          The page you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link to="/" className="case-study__back">
          ← BACK TO HOME
        </Link>
      </div>
    </section>
  )
}

export default NotFound
