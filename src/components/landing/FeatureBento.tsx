import { Workflow, Users2, ShieldCheck, Puzzle, Search, BarChart3 } from 'lucide-react'
import { FeatureCard } from './FeatureCard'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { Badge } from '@/components/ui/badge'

export function FeatureBento() {
  return (
    <section id="features" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <Badge className="mx-auto mb-4 w-fit">Built for focus</Badge>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything your team needs, nothing it doesn't
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every surface in Nimbus is designed to remove friction — from the first idea to the shipped release.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
          <ScrollReveal delay={0.05} className="md:col-span-2">
            <FeatureCard
              icon={Workflow}
              title="Adaptive workflows"
              description="Automations that learn from how your team actually works, and adjust routing, approvals, and hand-offs without you touching a config file."
              accent="violet"
              className="h-full"
            >
              <div className="mt-6 flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-3">
                {['Design', 'Review', 'Ship'].map((step, i) => (
                  <div key={step} className="flex flex-1 items-center gap-2">
                    <div className="flex h-8 flex-1 items-center justify-center rounded-lg bg-white/[0.04] text-xs text-foreground/80">
                      {step}
                    </div>
                    {i < 2 && <div className="h-px w-3 bg-white/20" />}
                  </div>
                ))}
              </div>
            </FeatureCard>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <FeatureCard
              icon={BarChart3}
              title="Actionable analytics"
              description="Real-time dashboards that surface the one metric that matters today."
              accent="cyan"
              className="h-full"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <FeatureCard
              icon={Users2}
              title="Real-time collaboration"
              description="See changes, comments, and cursors update live — no refresh required."
              accent="amber"
              className="h-full"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <FeatureCard
              icon={ShieldCheck}
              title="Enterprise-grade security"
              description="SOC 2 aligned controls, granular permissions, and full audit trails by default."
              accent="magenta"
              className="h-full"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.25} className="md:col-span-1">
            <FeatureCard
              icon={Puzzle}
              title="Powerful integrations"
              description="Connect the tools you already use in a couple of clicks — no code needed."
              accent="violet"
              className="h-full"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <FeatureCard
              icon={Search}
              title="Instant search"
              description="Find any file, thread, or decision across your workspace in milliseconds."
              accent="cyan"
              className="h-full"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
