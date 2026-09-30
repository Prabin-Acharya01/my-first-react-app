import { useReveal } from '../hooks/useReveal.js'

/**
 * Letter-by-letter mask reveal: each character rises into place from
 * behind a clipping edge, staggered from the first letter to the last.
 */
function SplitText({
  as: Tag = 'span',
  className = '',
  delay = 0,
  step = 55,
  children,
}) {
  const ref = useReveal()
  const text = String(children)
  const total = text.replace(/ /g, '').length
  let index = 0

  return (
    <Tag
      ref={ref}
      className={`split-reveal ${className}`.trim()}
      aria-label={text}
    >
      {text.split(' ').map((word, w, words) => (
        <span key={w} aria-hidden="true">
          <span className="split-word">
            {[...word].map((char, c) => {
              const i = index++
              const d = delay + i * step
              const out = (total - 1 - i) * 18
              return (
                <span key={c} className="split-char">
                  <span
                    className="split-char__inner"
                    style={{
                      '--char-delay': `${d}ms`,
                      '--char-out': `${out}ms`,
                    }}
                  >
                    {char}
                  </span>
                </span>
              )
            })}
          </span>
          {w < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </Tag>
  )
}

export default SplitText
