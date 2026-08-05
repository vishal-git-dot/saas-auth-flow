import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedBackground } from '@/components/background/AnimatedBackground'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { TopNav } from '@/components/dashboard/TopNav'
import { WelcomeBanner } from '@/components/dashboard/WelcomeBanner'
import { StatsGrid } from '@/components/dashboard/StatCard'
import { AnalyticsChart } from '@/components/dashboard/AnalyticsChart'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { ProfileSummary } from '@/components/dashboard/ProfileSummary'
import { DashboardSkeleton } from '@/components/dashboard/DashboardSkeleton'

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative flex min-h-screen">
      <AnimatedBackground variant="dashboard" />
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopNav />

        <main className="flex-1">
          {loading ? (
            <DashboardSkeleton />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-5 p-4 sm:p-6"
            >
              <WelcomeBanner />
              <StatsGrid />

              <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                <div className="xl:col-span-2">
                  <AnalyticsChart />
                </div>
                <RecentActivity />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <QuickActions />
                <ProfileSummary />
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  )
}
