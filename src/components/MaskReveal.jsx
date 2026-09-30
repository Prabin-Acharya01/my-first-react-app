import SplitText from './SplitText.jsx'
import { useReveal } from '../hooks/useReveal.js'

/**
 * Section-heading reveal. Plain-text headings animate letter by letter
 * (same effect as the hero name) so the whole site feels consistent;
 * headings with markup inside fall back to a single-line mask wipe.
 */
function MaskReveal({ as: Tag = 'span', className = '', delay = 0, children }) {
  const ref = useReveal()

  if (typeof children === 'string') {
    const step = children.length > 16 ? 28 : 45
    return (
      <SplitText as={Tag} className={className} delay={delay} step={step}>
        {children}
      </SplitText>
    )
  }

  return (
    <Tag
      ref={ref}
      className={`mask-reveal ${className}`.trim()}
      style={delay ? { '--mask-delay': `${delay}ms` } : undefined}
    >
      <span className="mask-reveal__inner">{children}</span>
    </Tag>
  )
}

export default MaskReveal
