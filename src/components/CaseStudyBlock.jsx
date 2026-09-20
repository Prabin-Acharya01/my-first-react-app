import { useReveal } from '../hooks/useReveal.js'
import MaskReveal from './MaskReveal.jsx'

export function Block({ title, children, wide = false }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal case-block__grid">
      <MaskReveal as="h2" className="case-block__title">
        {title}
      </MaskReveal>
      <div
        className={`case-block__content${wide ? ' case-block__content--wide' : ''}`}
      >
        {children}
      </div>
    </div>
  )
}

export function ShotGrid({ shots, aspect = 'default' }) {
  return (
    <div className={`case-shot-grid case-shot-grid--${aspect}`}>
      {shots.map((shot) => {
        const { label, src } =
          typeof shot === 'string' ? { label: shot, src: null } : shot

        return (
          <div key={label} className="case-shot">
            {src ? (
              <img src={src} alt={label} loading="lazy" />
            ) : (
              <span>{label}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}
