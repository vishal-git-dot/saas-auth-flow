import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { quickActions } from '@/lib/mockData'

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Quick actions</CardTitle>
          <CardDescription>Jump back into what matters</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-2.5">
          {quickActions.map((action) => (
            <button
              key={action.id}
              onClick={() => toast(`${action.label}`, { description: 'This is a UI preview action.' })}
              className="group flex flex-col items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-left transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="flex w-full items-center justify-between">
                <action.icon className="h-4 w-4 text-aurora-cyan" />
                <span className="font-mono text-[10px] text-muted-foreground">{action.hint}</span>
              </div>
              <span className="text-xs font-medium text-foreground/85">{action.label}</span>
            </button>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}
