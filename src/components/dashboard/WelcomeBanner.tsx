import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'

export function WelcomeBanner() {
  const { user } = useAuth()
  const firstName = user?.fullName?.split(' ')[0] ?? 'there'
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel relative overflow-hidden rounded-2xl p-6 sm:p-7"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_100%_0%,_rgba(124,92,255,0.18),_transparent_60%)]" />
      <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs text-muted-foreground">{today}</p>
          <h1 className="mt-1 font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Welcome back, {firstName} 👋
          </h1>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Your workspace is up 12% this week. Here's a quick look at what changed while you were away.
          </p>
        </div>
        <Button variant="outline" className="group w-fit">
          View full report
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </div>
    </motion.div>
  )
}
