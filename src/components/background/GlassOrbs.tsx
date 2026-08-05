import { motion, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

interface GlassOrbsProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

interface OrbConfig {
  size: number
  top: string
  left?: string
  right?: string
  depth: number
  hue: 'violet' | 'cyan' | 'amber' | 'magenta'
  floatClass: string
  delay: number
}

const orbs: OrbConfig[] = [
  { size: 120, top: '12%', left: '8%', depth: 26, hue: 'violet', floatClass: 'animate-float', delay: 0 },
  { size: 70, top: '65%', left: '18%', depth: 40, hue: 'cyan', floatClass: 'animate-float-slow', delay: 0.6 },
  { size: 90, top: '22%', right: '12%', depth: 18, hue: 'amber', floatClass: 'animate-float', delay: 1.1 },
  { size: 56, top: '78%', right: '22%', depth: 34, hue: 'magenta', floatClass: 'animate-float-slow', delay: 0.3 },
  { size: 44, top: '42%', right: '38%', depth: 50, hue: 'cyan', floatClass: 'animate-float', delay: 1.6 },
]

const hueMap: Record<OrbConfig['hue'], string> = {
  violet: 'from-aurora-violet/40 to-aurora-violet/5',
  cyan: 'from-aurora-cyan/35 to-aurora-cyan/5',
  amber: 'from-aurora-amber/35 to-aurora-amber/5',
  magenta: 'from-aurora-magenta/30 to-aurora-magenta/5',
}

function Orb({ config, mouseX, mouseY }: { config: OrbConfig; mouseX: MotionValue<number>; mouseY: MotionValue<number> }) {
  const x = useTransform(mouseX, [-0.5, 0.5], [-config.depth, config.depth])
  const y = useTransform(mouseY, [-0.5, 0.5], [-config.depth, config.depth])

  return (
    <motion.div
      style={{ top: config.top, left: config.left, right: config.right, x, y }}
      className={`absolute rounded-full ${config.floatClass}`}
      animate={{ opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 6, repeat: Infinity, delay: config.delay, ease: 'easeInOut' }}
    >
      <div
        style={{ width: config.size, height: config.size, animationDelay: `${config.delay}s` }}
        className={`rounded-full bg-gradient-to-br ${hueMap[config.hue]} border border-white/20 backdrop-blur-md shadow-glass-sm`}
      />
    </motion.div>
  )
}

export function GlassOrbs({ mouseX, mouseY }: GlassOrbsProps) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {orbs.map((orb, i) => (
        <Orb key={i} config={orb} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </div>
  )
}
