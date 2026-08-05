import { ScrollReveal } from '@/components/layout/ScrollReveal'

const stats = [
  { value: '500+', label: 'Teams onboarded' },
  { value: '12M', label: 'Actions run monthly' },
  { value: '99.98%', label: 'Platform uptime' },
  { value: '4.9/5', label: 'Average team rating' },
]

export function StatsStrip() {
  return (
    <section className="relative px-4 pb-24">
      <ScrollReveal>
        <div className="glass-panel mx-auto grid max-w-5xl grid-cols-2 gap-6 rounded-3xl p-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
