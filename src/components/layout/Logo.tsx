import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A0B12]">
        <div className="h-4 w-4 rounded-full bg-gradient-to-br from-aurora-violet via-aurora-blue to-aurora-cyan shadow-glow-violet" />
      </div>
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">Nimbus</span>
    </div>
  )
}
