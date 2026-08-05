import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { statCards } from '@/lib/mockData'
import { useTilt } from '@/hooks/useTilt'
import { cn } from '@/lib/utils'

const accentMap = {
  violet: 'text-aurora-violet bg-aurora-violet/10',
  cyan: 'text-aurora-cyan bg-aurora-cyan/10',
  amber: 'text-aurora-amber bg-aurora-amber/10',
  magenta: 'text-aurora-magenta bg-aurora-magenta/10',
}

function StatCard({ stat, index }: { stat: (typeof statCards)[number]; index: number }) {
  const tilt = useTilt({ max: 4, scale: 1.01 })
  const Icon = stat.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      ref={tilt.ref}
      onMouseMove={tilt.handlers.onMouseMove}
      onMouseLeave={tilt.handlers.onMouseLeave}
      style={{ perspective: 900 }}
    >
      <motion.div style={tilt.style} className="glass-panel rounded-2xl p-5 transition-shadow hover:shadow-glass">
        <div className="flex items-center justify-between">
          <div className={cn('flex h-10 w-10 items-center justify-center rounded-xl', accentMap[stat.accent])}>
            <Icon className="h-5 w-5" />
          </div>
          <span
            className={cn(
              'flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium',
              stat.trend === 'up' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive',
            )}
          >
            {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {stat.delta}
          </span>
        </div>
        <p className="mt-4 font-display text-2xl font-semibold text-foreground">{stat.value}</p>
        <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
      </motion.div>
    </motion.div>
  )
}

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {statCards.map((stat, i) => (
        <StatCard key={stat.id} stat={stat} index={i} />
      ))}
    </div>
  )
}
