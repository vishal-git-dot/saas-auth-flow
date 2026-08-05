import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Logo } from '@/components/layout/Logo'
import { AnimatedBackground } from '@/components/background/AnimatedBackground'

interface AuthShellProps {
  children: ReactNode
  eyebrow: string
  headline: string
  subcopy: string
  points: string[]
}

export function AuthShell({ children, eyebrow, headline, subcopy, points }: AuthShellProps) {
  return (
    <div className="relative min-h-screen lg:flex">
      <AnimatedBackground variant="auth" />

      {/* Illustration / value-prop panel */}
      <div className="relative flex flex-col justify-between overflow-hidden px-8 py-10 lg:w-[44%] lg:px-14 lg:py-14">
        <Link to="/" aria-label="Nimbus home">
          <Logo />
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hidden py-10 lg:block"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-aurora-cyan">{eyebrow}</span>
          <h2 className="mt-4 max-w-sm font-display text-3xl font-semibold leading-tight tracking-tight text-foreground">
            {headline}
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{subcopy}</p>

          <ul className="mt-8 space-y-3">
            {points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2.5 text-sm text-foreground/80"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-aurora-violet" />
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <p className="hidden text-xs text-muted-foreground lg:block">
          © {new Date().getFullYear()} Nimbus Labs. All rights reserved.
        </p>
      </div>

      {/* Form panel */}
      <div className="relative flex flex-1 items-center justify-center px-4 pb-14 pt-4 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel w-full max-w-md rounded-3xl p-7 shadow-glass sm:p-9"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
