import { motion } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

interface GridPatternProps {
  scrollY: MotionValue<number>
  opacityClass?: string
}

export function GridPattern({ opacityClass = 'opacity-[0.35]' }: GridPatternProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${opacityClass}`}>
      <motion.div
        className="absolute inset-[-10%] bg-grid-pattern dark:bg-grid-pattern bg-grid-pattern-light [background-size:56px_56px] animate-grid-pan"
        style={{
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, black 10%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, black 10%, transparent 75%)',
        }}
      />
    </div>
  )
}
