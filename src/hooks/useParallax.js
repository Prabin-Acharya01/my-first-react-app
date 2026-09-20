import { useEffect, useRef } from 'react'

/**
 * Applies a subtle scroll-linked translateY offset to the ref'd element,
 * exposed as the `--parallax-y` custom property for the element's own CSS
 * to consume (e.g. `transform: translateY(var(--parallax-y, 0px))`).
 */
export function useParallax(speed = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let frame = null

    const update = () => {
      frame = null
      const rect = node.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const elementCenter = rect.top + rect.height / 2
      const offset = (viewportCenter - elementCenter) * speed
      node.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`)
    }

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [speed])

  return ref
}
