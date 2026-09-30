import { useEffect, useRef } from 'react'

/**
 * Toggles `.is-visible` on the ref'd element as it enters the viewport.
 * By default the class is removed again when the element leaves, so the
 * entrance animation plays in reverse when scrolling back up and replays
 * on re-entry. Pass `{ once: true }` to reveal a single time instead.
 */
export function useReveal({ once = false } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          if (once) observer.unobserve(node)
        } else if (!once) {
          node.classList.remove('is-visible')
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once])

  return ref
}
