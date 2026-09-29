import { useEffect, useRef } from 'react'

/**
 * Tracks the pointer within the ref'd element and exposes the offset as
 * `--tilt-x` / `--tilt-y` custom properties for the element's own CSS to
 * consume (e.g. `transform: rotateX(var(--tilt-x)) rotateY(var(--tilt-y))`).
 */
export function useTilt(strength = 10) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const canHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches
    if (
      !canHover ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    function onMove(event) {
      const rect = node.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width - 0.5
      const py = (event.clientY - rect.top) / rect.height - 0.5
      node.style.setProperty('--tilt-x', `${(-py * strength).toFixed(2)}deg`)
      node.style.setProperty('--tilt-y', `${(px * strength).toFixed(2)}deg`)
    }

    function onLeave() {
      node.style.setProperty('--tilt-x', '0deg')
      node.style.setProperty('--tilt-y', '0deg')
    }

    node.addEventListener('mousemove', onMove)
    node.addEventListener('mouseleave', onLeave)

    return () => {
      node.removeEventListener('mousemove', onMove)
      node.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return ref
}
