import { Plug, Sparkles, Rocket } from 'lucide-react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { Badge } from '@/components/ui/badge'

const steps = [
  {
    number: '01',
    icon: Plug,
    title: 'Connect your tools',
    description: 'Link your stack in minutes — Nimbus pulls context from every corner of your workflow automatically.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Automate the busywork',
    description: 'Set the outcome you want; Nimbus handles routing, reminders, and approvals in the background.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Ship with confidence',
    description: 'Track progress on a single live surface, and release knowing nothing slipped through.',
  },
]

export function WorkflowSteps() {
  return (
    <section id="workflow" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <Badge className="mx-auto mb-4 w-fit">How it works</Badge>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From setup to shipped, in three steps
          </h2>
        </ScrollReveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.12}>
              <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-white/10 bg-background">
                  <div className="glass-panel flex h-14 w-14 items-center justify-center rounded-xl">
                    <step.icon className="h-6 w-6 text-aurora-cyan" />
                  </div>
                </div>
                <span className="mt-5 font-mono text-xs text-muted-foreground">{step.number}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
