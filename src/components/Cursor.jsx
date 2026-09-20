import { useEffect, useRef } from 'react'
import './Cursor.css'

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"]'

function Cursor() {
  const dotRef = useRef(null)

  useEffect(() => {
    const canHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches
    if (!canHover) return

    const dot = dotRef.current
    if (!dot) return

    document.body.classList.add('has-custom-cursor')

    let revealed = false

    // Position tracks the pointer with no transition (any easing here
    // would make the cursor visibly lag behind the real pointer). The
    // hover "expand" effect animates width/height/margin instead of
    // scale, so it never touches this transform.
    function onMouseMove(event) {
      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      if (!revealed) {
        revealed = true
        dot.classList.add('cursor-dot--visible')
      }
    }

    function onOver(event) {
      if (event.target.closest?.(INTERACTIVE_SELECTOR)) {
        dot.classList.add('cursor-dot--active')
      }
    }

    function onOut(event) {
      if (event.target.closest?.(INTERACTIVE_SELECTOR)) {
        dot.classList.remove('cursor-dot--active')
      }
    }

    function onLeaveWindow() {
      dot.classList.remove('cursor-dot--visible')
    }

    function onEnterWindow() {
      if (revealed) dot.classList.add('cursor-dot--visible')
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    document.documentElement.addEventListener('mouseleave', onLeaveWindow)
    document.documentElement.addEventListener('mouseenter', onEnterWindow)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.documentElement.removeEventListener(
        'mouseleave',
        onLeaveWindow,
      )
      document.documentElement.removeEventListener(
        'mouseenter',
        onEnterWindow,
      )
    }
  }, [])

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
}

export default Cursor
