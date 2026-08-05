import { useScroll, useSpring } from 'framer-motion'

/**
 * Exposes smoothed scroll motion values for the whole document.
 * scrollYProgress: 0 -> 1 across the full scrollable height.
 * scrollY: smoothed raw pixel offset, useful for layered parallax.
 */
export function useScrollProgress() {
  const { scrollY, scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 22, mass: 0.5 })
  const smoothY = useSpring(scrollY, { stiffness: 60, damping: 24, mass: 0.6 })

  return { scrollY: smoothY, scrollYProgress: smoothProgress }
}
