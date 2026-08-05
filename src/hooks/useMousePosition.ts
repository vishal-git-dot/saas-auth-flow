import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

/**
 * Tracks pointer position as normalized values (-0.5 to 0.5 on each axis,
 * with 0,0 at the viewport center), smoothed with a spring so ambient
 * lighting drifts rather than snaps.
 */
export function useMousePosition() {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 40, damping: 20, mass: 0.6 })
  const y = useSpring(rawY, { stiffness: 40, damping: 20, mass: 0.6 })

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const normX = event.clientX / window.innerWidth - 0.5
      const normY = event.clientY / window.innerHeight - 0.5
      rawX.set(normX)
      rawY.set(normY)
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [rawX, rawY])

  return { x, y }
}
