import { motion } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { useTransform } from 'framer-motion'

interface GradientMeshProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  scrollY: MotionValue<number>
}

export function GradientMesh({ mouseX, mouseY, scrollY }: GradientMeshProps) {
  const driftX = useTransform(mouseX, [-0.5, 0.5], [-40, 40])
  const driftY = useTransform(mouseY, [-0.5, 0.5], [-30, 30])
  const parallaxY = useTransform(scrollY, [0, 1200], [0, -160])

  const driftX2 = useTransform(driftX, (v) => -v * 0.6)
  const driftY2 = useTransform(driftY, (v) => -v * 0.6)
  const driftX3 = useTransform(driftX, (v) => v * 0.4)
  const driftY3 = useTransform(driftY, (v) => -v * 0.3)

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{ y: parallaxY }}
    >
      <motion.div
        style={{ x: driftX, y: driftY }}
        className="absolute -top-1/4 left-[-10%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle_at_center,_rgba(124,92,255,0.35),_transparent_65%)] blur-3xl"
      />
      <motion.div
        style={{ x: driftX2, y: driftY2 }}
        className="absolute top-1/3 right-[-15%] h-[65vh] w-[65vh] rounded-full bg-[radial-gradient(circle_at_center,_rgba(69,232,209,0.28),_transparent_65%)] blur-3xl"
      />
      <motion.div
        style={{ x: driftX3, y: driftY3 }}
        className="absolute bottom-[-15%] left-1/4 h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,111,216,0.2),_transparent_65%)] blur-3xl"
      />
    </motion.div>
  )
}
