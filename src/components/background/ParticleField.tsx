import { useMemo } from 'react'

interface Particle {
  left: string
  size: number
  duration: number
  delay: number
  hue: string
}

const hues = ['bg-aurora-violet', 'bg-aurora-cyan', 'bg-aurora-amber', 'bg-aurora-magenta']

function seededParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => {
    const seed = (i * 37) % 100
    return {
      left: `${(seed * 1.7) % 100}%`,
      size: 2 + (i % 4),
      duration: 18 + (i % 7) * 3,
      delay: (i % 10) * 1.4,
      hue: hues[i % hues.length],
    }
  })
}

export function ParticleField() {
  const particles = useMemo(() => seededParticles(28), [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      {particles.map((p, i) => (
        <span
          key={i}
          className={`absolute bottom-0 rounded-full ${p.hue} animate-particle`}
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: 0.5,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  )
}
