import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, TrendingUp, Users2, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useTilt } from '@/hooks/useTilt'

export function Hero() {
  const tilt = useTilt({ max: 6, scale: 1.01 })

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* Copy column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge className="mb-6">
              <Sparkles className="h-3 w-3" />
              Now with adaptive workflows
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]"
          >
            Build your product in
            <span className="text-gradient"> a calmer state of flow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            Nimbus brings your team, data, and workflows into one focused workspace —
            so decisions move at the speed of thought, not the speed of tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="group">
              <Link to="/register">
                Get started free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/login">Log in to your workspace</Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 text-xs text-muted-foreground"
          >
            No credit card required · Free forever for small teams
          </motion.p>
        </div>

        {/* Visual column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            ref={tilt.ref}
            onMouseMove={tilt.handlers.onMouseMove}
            onMouseLeave={tilt.handlers.onMouseLeave}
            className="[perspective:1000px]"
          >
            <motion.div
              style={tilt.style}
              className="glass-panel relative rounded-3xl p-6 shadow-glass"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-aurora-magenta/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-aurora-amber/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-aurora-cyan/70" />
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">nimbus.app/dashboard</span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { icon: Users2, label: 'Active', value: '12.8k' },
                  { icon: Zap, label: 'Runs', value: '3,092' },
                  { icon: TrendingUp, label: 'Growth', value: '+24%' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <stat.icon className="h-4 w-4 text-aurora-cyan" />
                    <p className="mt-2 font-display text-lg font-semibold">{stat.value}</p>
                    <p className="text-[11px] text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex h-28 items-end gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                {[40, 65, 50, 80, 60, 95, 72].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-aurora-violet/70 to-aurora-cyan/60"
                  />
                ))}
              </div>

              <div className="mt-4 space-y-2">
                {['Design review approved', 'Deploy to production complete'].map((row) => (
                  <div key={row} className="flex items-center gap-2.5 rounded-lg bg-white/[0.02] px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    <span className="text-xs text-foreground/80">{row}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Floating chips */}
          <motion.div
            className="glass-panel absolute -left-6 top-10 hidden rounded-2xl px-4 py-3 shadow-glass-sm sm:block animate-float"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <p className="text-[11px] text-muted-foreground">Workflow automated</p>
            <p className="font-display text-sm font-semibold text-aurora-cyan">98% faster</p>
          </motion.div>

          <motion.div
            className="glass-panel absolute -right-4 bottom-6 hidden rounded-2xl px-4 py-3 shadow-glass-sm sm:block animate-float-slow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.05, duration: 0.5 }}
          >
            <p className="text-[11px] text-muted-foreground">Team velocity</p>
            <p className="font-display text-sm font-semibold text-aurora-violet">+24% this month</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
