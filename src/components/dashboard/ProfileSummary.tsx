import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/context/AuthContext'
import { profileSummary } from '@/lib/mockData'
import { initialsFromName } from '@/lib/utils'

export function ProfileSummary() {
  const { user } = useAuth()

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Profile summary</CardTitle>
          <CardDescription>Your account at a glance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border border-white/10">
              <AvatarFallback className="text-base">{initialsFromName(user?.fullName ?? 'Nimbus User')}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{user?.fullName ?? 'Nimbus User'}</p>
              <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <Badge>{profileSummary.plan}</Badge>
            <span className="text-xs text-muted-foreground">{profileSummary.seats}</span>
          </div>

          <div className="mt-4">
            <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
              <span>Workspace usage</span>
              <span>{profileSummary.usage}%</span>
            </div>
            <Progress value={profileSummary.usage} />
          </div>

          <p className="mt-3 text-[11px] text-muted-foreground">{profileSummary.renews}</p>

          <Button variant="outline" className="mt-4 w-full" size="sm">
            Manage plan
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
