import { useEffect, useRef } from 'react'

/**
 * Exposes page scroll progress (0 → 1 over ~one viewport) as `--scroll-p`
 * on the ref'd element, so its CSS can choreograph how the content
 * fades, shifts and shrinks as the next section slides over it.
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
      // Based on window scroll (not the element's rect) so it keeps working
      // when the element is pinned with position: sticky.
      const distance = Math.max(window.innerHeight * 0.9, 1)
      const progress = Math.min(Math.max(window.scrollY / distance, 0), 1)
      node.style.setProperty('--scroll-p', progress.toFixed(3))
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
