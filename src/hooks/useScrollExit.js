import { useEffect, useRef } from 'react'

/**
 * Tracks how far the ref'd element has scrolled past the top of the
 * viewport and exposes the progress (0 → 1) as `--scroll-fade`,
 * `--scroll-scale`, and `--scroll-y` custom properties, so the element's
 * own CSS can fade/shrink/lift it away as the user scrolls past it.
 */
export function useScrollExit() {
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
      const distance = Math.max(window.innerHeight * 0.85, 1)
      const progress = Math.min(Math.max(-rect.top / distance, 0), 1)
      node.style.setProperty('--scroll-fade', (1 - progress).toFixed(3))
      node.style.setProperty(
        '--scroll-scale',
        (1 - progress * 0.08).toFixed(3),
      )
      node.style.setProperty('--scroll-y', `${(progress * -40).toFixed(1)}px`)
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
  }, [])

  return ref
}
