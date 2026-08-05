import { motion } from 'framer-motion'
import { getPasswordStrength } from '@/lib/validations'
import { cn } from '@/lib/utils'

const colorByScore = [
  'bg-destructive',
  'bg-destructive',
  'bg-aurora-amber',
  'bg-aurora-amber',
  'bg-aurora-cyan',
  'bg-success',
]

export function PasswordStrengthMeter({ password }: { password: string }) {
  const { score, label, percent } = getPasswordStrength(password)

  if (!password) return null

  return (
    <div className="mt-2.5 space-y-1.5">
      <div className="flex h-1.5 gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-full flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: i < score ? '100%' : '0%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={cn('h-full rounded-full', colorByScore[score])}
            />
          </div>
        ))}
      </div>
      <p className="text-right text-[11px] text-muted-foreground">
        Strength: <span className="font-medium text-foreground/80">{label}</span> · {Math.round(percent)}%
      </p>
    </div>
  )
}
