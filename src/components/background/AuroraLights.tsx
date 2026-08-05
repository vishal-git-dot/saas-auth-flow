export function AuroraLights() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <div
        className="absolute left-1/2 top-[-20%] h-[140%] w-[180%] -translate-x-1/2 animate-aurora mix-blend-screen opacity-60 dark:opacity-70"
        style={{
          background:
            'conic-gradient(from 90deg at 50% 50%, transparent 0deg, rgba(124,92,255,0.35) 60deg, transparent 140deg, rgba(69,232,209,0.3) 210deg, transparent 280deg, rgba(255,111,216,0.22) 330deg, transparent 360deg)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute left-1/3 top-[-10%] h-[120%] w-[140%] animate-[aurora_24s_ease-in-out_infinite_reverse] mix-blend-screen opacity-40 dark:opacity-50"
        style={{
          background:
            'conic-gradient(from 200deg at 50% 50%, transparent 0deg, rgba(91,140,255,0.3) 80deg, transparent 160deg, rgba(245,184,96,0.18) 260deg, transparent 360deg)',
          filter: 'blur(70px)',
        }}
      />
    </div>
  )
}
