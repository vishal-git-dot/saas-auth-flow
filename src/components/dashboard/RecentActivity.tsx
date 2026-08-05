import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { recentActivity } from '@/lib/mockData'
import { cn } from '@/lib/utils'

const accentMap = {
  violet: 'text-aurora-violet bg-aurora-violet/10',
  cyan: 'text-aurora-cyan bg-aurora-cyan/10',
  amber: 'text-aurora-amber bg-aurora-amber/10',
  magenta: 'text-aurora-magenta bg-aurora-magenta/10',
}

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Recent activity</CardTitle>
          <CardDescription>What moved across your workspace</CardDescription>
        </CardHeader>
        <CardContent className="space-y-1">
          {recentActivity.map((item, i) => (
            <div key={item.id} className="relative flex gap-3.5 pb-5 last:pb-0">
              {i < recentActivity.length - 1 && (
                <span className="absolute left-[19px] top-9 h-[calc(100%-20px)] w-px bg-white/10" />
              )}
              <div className={cn('relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full', accentMap[item.accent])}>
                <item.icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 pt-1">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">{item.description}</p>
                <p className="mt-1 text-[11px] text-muted-foreground/70">{item.time}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}
