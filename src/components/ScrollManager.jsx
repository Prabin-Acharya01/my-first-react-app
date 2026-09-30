import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollManager() {
  const { pathname, hash, key } = useLocation()

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
  }, [pathname, hash, key])

  return null
}

export default ScrollManager
