import { motion, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

interface MorphingBlobsProps {
  scrollYProgress: MotionValue<number>
}

export function MorphingBlobs({ scrollYProgress }: MorphingBlobsProps) {
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 0.96])

  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <motion.div
        style={{ rotate, scale }}
        className="absolute -left-[10%] top-[8%] h-[46vw] w-[46vw] max-h-[560px] max-w-[560px] animate-blob-slow"
      >
        <div className="h-full w-full animate-morph bg-gradient-to-br from-aurora-violet/25 via-aurora-blue/15 to-transparent blur-2xl" />
      </motion.div>
      <motion.div
        style={{ scale }}
        className="absolute right-[-8%] bottom-[4%] h-[38vw] w-[38vw] max-h-[460px] max-w-[460px] animate-blob"
      >
        <div className="h-full w-full animate-morph bg-gradient-to-tr from-aurora-cyan/20 via-aurora-violet/10 to-transparent blur-2xl [animation-delay:-6s]" />
      </motion.div>
    </div>
  )
}
