import { Star } from 'lucide-react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { initialsFromName } from '@/lib/utils'

const testimonials = [
  {
    name: 'Maya Whitfield',
    role: 'Head of Product, Fieldstone Analytics',
    quote:
      'Nimbus quietly took over the coordination work our team used to do by hand. We shipped our last three releases without a single missed hand-off.',
  },
  {
    name: 'Daniel Osei',
    role: 'Engineering Lead, Northwind Studio',
    quote:
      'The workspace finally feels like it moves at the same speed we think. Search alone probably saves each engineer an hour a week.',
  },
  {
    name: 'Priya Raman',
    role: 'COO, Pulsecraft Labs',
    quote:
      'Rolling this out to 40 people took an afternoon, not a quarter. Support tickets about "where is X" basically disappeared.',
  },
]

export function TestimonialSection() {
  return (
    <section id="testimonials" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <Badge className="mx-auto mb-4 w-fit">Loved by builders</Badge>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Teams that switched, stayed
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="glass-panel flex h-full flex-col justify-between rounded-2xl p-6">
                <div>
                  <div className="flex gap-0.5 text-aurora-amber">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.quote}"</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="text-xs">{initialsFromName(t.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
