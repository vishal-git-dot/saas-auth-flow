import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function SuccessCheck({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-center py-6 text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="relative flex h-20 w-20 items-center justify-center rounded-full bg-success/15"
      >
        <motion.span
          initial={{ scale: 0.6, opacity: 0.6 }}
          animate={{ scale: [0.6, 1.4], opacity: [0.6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
          className="absolute inset-0 rounded-full bg-success/25"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 300, damping: 16 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-success text-success-foreground"
        >
          <Check className="h-6 w-6" strokeWidth={3} />
        </motion.div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-5 font-display text-xl font-semibold text-foreground"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-1.5 max-w-xs text-sm text-muted-foreground"
      >
        {subtitle}
      </motion.p>
    </div>
  )
}
