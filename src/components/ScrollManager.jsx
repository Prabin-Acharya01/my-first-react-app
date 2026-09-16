import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

export default ScrollManager
