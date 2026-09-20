import { useReveal } from '../hooks/useReveal.js'

function MaskReveal({ as: Tag = 'span', className = '', delay = 0, children }) {
  const ref = useReveal()

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
