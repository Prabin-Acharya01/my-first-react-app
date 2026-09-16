import Arrow from './Arrow.jsx'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import './AboutTeaser.css'

function AboutTeaser() {
  const ref = useReveal()

  return (
    <section id="about" className="about-teaser">
      <div className="container">
        <div ref={ref} className="reveal about-teaser__inner">
          <h2 className="about-teaser__title">A LITTLE ABOUT ME.</h2>

          <div className="about-teaser__body">
            <p>
              I&rsquo;m Prabin, a Junior UI/UX Designer based in Kathmandu,
              Nepal.
            </p>
            <p>
              I enjoy understanding how products work, identifying where
              users struggle, and turning complex workflows into clear and
              intuitive experiences.
            </p>
            <p>
              My experience includes working on SaaS, HRMS,
              telecommunications, CRM, EdTech, and mobile products.
            </p>
            <p>
              I also have a background in computer science, which helps me
              understand both design and the technology behind the products I
              work on.
            </p>

            <Link to="/about" className="about-teaser__link">
              MORE ABOUT ME <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTeaser
