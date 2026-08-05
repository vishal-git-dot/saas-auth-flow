import { AnimatedBackground } from '@/components/background/AnimatedBackground'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/landing/Hero'
import { StatsStrip } from '@/components/landing/StatsStrip'
import { FeatureBento } from '@/components/landing/FeatureBento'
import { WorkflowSteps } from '@/components/landing/WorkflowSteps'
import { TestimonialSection } from '@/components/landing/TestimonialSection'
import { CTABand } from '@/components/landing/CTABand'

export default function Landing() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground variant="hero" />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <FeatureBento />
        <WorkflowSteps />
        <TestimonialSection />
        <CTABand />
      </main>
      <Footer />
    </div>
  )
}
