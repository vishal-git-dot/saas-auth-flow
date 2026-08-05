import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltOptions {
  max?: number
  scale?: number
}

export function useTilt({ max = 8, scale = 1.015 }: TiltOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const springX = useSpring(x, { stiffness: 220, damping: 22 })
  const springY = useSpring(y, { stiffness: 220, damping: 22 })

  const rotateX = useTransform(springY, [0, 1], [max, -max])
  const rotateY = useTransform(springX, [0, 1], [-max, max])
  const glowX = useTransform(x, [0, 1], ['0%', '100%'])
  const glowY = useTransform(y, [0, 1], ['0%', '100%'])

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width)
    y.set((event.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return {
    ref,
    style: { rotateX, rotateY, transformPerspective: 900 },
    handlers: { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave },
    glowX,
    glowY,
    hoverScale: scale,
  }
}
