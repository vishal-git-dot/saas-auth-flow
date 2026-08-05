import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { useTilt } from '@/hooks/useTilt'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  accent?: 'violet' | 'cyan' | 'amber' | 'magenta'
  children?: ReactNode
}

const accentMap = {
  violet: 'text-aurora-violet bg-aurora-violet/10 border-aurora-violet/20',
  cyan: 'text-aurora-cyan bg-aurora-cyan/10 border-aurora-cyan/20',
  amber: 'text-aurora-amber bg-aurora-amber/10 border-aurora-amber/20',
  magenta: 'text-aurora-magenta bg-aurora-magenta/10 border-aurora-magenta/20',
}

export function FeatureCard({ icon: Icon, title, description, className, accent = 'violet', children }: FeatureCardProps) {
  const tilt = useTilt({ max: 5, scale: 1.008 })

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.handlers.onMouseMove}
      onMouseLeave={tilt.handlers.onMouseLeave}
      className={cn('[perspective:1000px]', className)}
    >
      <motion.div
        style={tilt.style}
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="glass-panel group flex h-full flex-col justify-between rounded-2xl p-6 transition-shadow duration-300 hover:shadow-glass"
      >
        <div>
          <div className={cn('inline-flex h-10 w-10 items-center justify-center rounded-xl border', accentMap[accent])}>
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
        {children}
      </motion.div>
    </div>
  )
}
