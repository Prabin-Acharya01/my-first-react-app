import { profile } from '../data/profile.js'

function LinkedInLink({ className, tabIndex }) {
  if (profile.linkedinUrl) {
    return (
      <a
        href={profile.linkedinUrl}
        target="_blank"
        rel="noreferrer"
        className={className}
        tabIndex={tabIndex}
      >
        LINKEDIN
      </a>
    )
  }

  return (
    <span
      className={className}
      aria-disabled="true"
      title="LinkedIn link coming soon"
      tabIndex={tabIndex}
    >
      LINKEDIN
    </span>
  )
}

export default LinkedInLink
