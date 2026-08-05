import { useMousePosition } from '@/hooks/useMousePosition'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useReducedMotionPreference } from '@/hooks/useReducedMotion'
import { GradientMesh } from './GradientMesh'
import { AuroraLights } from './AuroraLights'
import { GlassOrbs } from './GlassOrbs'
import { ParticleField } from './ParticleField'
import { GridPattern } from './GridPattern'
import { MorphingBlobs } from './MorphingBlobs'

export type BackgroundVariant = 'hero' | 'auth' | 'dashboard'

interface AnimatedBackgroundProps {
  variant?: BackgroundVariant
}

const variantOpacity: Record<BackgroundVariant, string> = {
  hero: 'opacity-100',
  auth: 'opacity-80',
  dashboard: 'opacity-40',
}

export function AnimatedBackground({ variant = 'hero' }: AnimatedBackgroundProps) {
  const { x, y } = useMousePosition()
  const { scrollY, scrollYProgress } = useScrollProgress()
  const prefersReducedMotion = useReducedMotionPreference()

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 -z-50 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_rgba(124,92,255,0.18),_transparent_70%)]" />
      </div>
    )
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 -z-50 overflow-hidden bg-background transition-opacity duration-700 ${variantOpacity[variant]}`}
    >
      <MorphingBlobs scrollYProgress={scrollYProgress} />
      <GradientMesh mouseX={x} mouseY={y} scrollY={scrollY} />
      <AuroraLights />
      <GridPattern scrollY={scrollY} />
      <GlassOrbs mouseX={x} mouseY={y} />
      <ParticleField />
      <div className="noise-overlay pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,_transparent_40%,_hsl(var(--background))_100%)]" />
    </div>
  )
}
