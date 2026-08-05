import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/layout/ScrollReveal'

export function CTABand() {
  return (
    <section className="relative px-4 pb-28 pt-6">
      <ScrollReveal>
        <div className="glass-panel relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-8 py-16 text-center shadow-glass">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,_rgba(124,92,255,0.25),_transparent_70%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ready to build in flow?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Join hundreds of teams who traded scattered tools for one calm, connected workspace.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link to="/register">
                  Get started free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/login">Log in</Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
