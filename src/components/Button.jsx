import { Link } from 'react-router-dom'
import './Button.css'

function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim()

  const content = <span className="btn__label">{children}</span>

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}

export default Button
