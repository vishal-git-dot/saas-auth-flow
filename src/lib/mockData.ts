import {
  Users,
  Zap,
  TrendingUp,
  Clock,
  FileText,
  MessageSquare,
  UserPlus,
  CheckCircle2,
  GitBranch,
  CreditCard,
} from 'lucide-react'

export const statCards = [
  {
    id: 'active-users',
    label: 'Active users',
    value: '12,847',
    delta: '+12.4%',
    trend: 'up' as const,
    icon: Users,
    accent: 'violet' as const,
  },
  {
    id: 'workflows',
    label: 'Workflows run',
    value: '3,092',
    delta: '+8.1%',
    trend: 'up' as const,
    icon: Zap,
    accent: 'cyan' as const,
  },
  {
    id: 'conversion',
    label: 'Conversion rate',
    value: '4.62%',
    delta: '-0.4%',
    trend: 'down' as const,
    icon: TrendingUp,
    accent: 'amber' as const,
  },
  {
    id: 'avg-session',
    label: 'Avg. session time',
    value: '6m 42s',
    delta: '+3.2%',
    trend: 'up' as const,
    icon: Clock,
    accent: 'magenta' as const,
  },
]

export const chartData = [
  { month: 'Feb', value: 2200, projects: 18 },
  { month: 'Mar', value: 3100, projects: 24 },
  { month: 'Apr', value: 2800, projects: 21 },
  { month: 'May', value: 3900, projects: 32 },
  { month: 'Jun', value: 4600, projects: 38 },
  { month: 'Jul', value: 4100, projects: 34 },
  { month: 'Aug', value: 5400, projects: 45 },
]

export const recentActivity = [
  {
    id: 1,
    icon: CheckCircle2,
    title: 'Design review approved',
    description: 'Aria Chen approved "Onboarding v2" for release',
    time: '5 min ago',
    accent: 'violet' as const,
  },
  {
    id: 2,
    icon: GitBranch,
    title: 'New deployment',
    description: 'nimbus-web deployed to production · commit 4a1c9e2',
    time: '32 min ago',
    accent: 'cyan' as const,
  },
  {
    id: 3,
    icon: UserPlus,
    title: 'Teammate joined',
    description: 'Marcus Wells accepted the invite to Growth team',
    time: '1 hr ago',
    accent: 'amber' as const,
  },
  {
    id: 4,
    icon: MessageSquare,
    title: 'New comment',
    description: 'Priya left feedback on "Q3 pricing experiment"',
    time: '3 hr ago',
    accent: 'magenta' as const,
  },
  {
    id: 5,
    icon: FileText,
    title: 'Report generated',
    description: 'Monthly analytics report is ready to view',
    time: 'Yesterday',
    accent: 'violet' as const,
  },
]

export const quickActions = [
  { id: 'new-project', label: 'New project', icon: FileText, hint: '⌘N' },
  { id: 'invite', label: 'Invite teammate', icon: UserPlus, hint: '⌘I' },
  { id: 'billing', label: 'Manage billing', icon: CreditCard, hint: '⌘B' },
  { id: 'automation', label: 'Create automation', icon: Zap, hint: '⌘K' },
]

export const notificationsMock = [
  {
    id: 1,
    title: 'Your export is ready',
    description: 'analytics-q3.csv finished processing',
    time: '2 min ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Storage at 82%',
    description: 'Consider upgrading your workspace plan',
    time: '1 hr ago',
    unread: true,
  },
  {
    id: 3,
    title: 'Weekly digest',
    description: 'See what your team shipped this week',
    time: 'Yesterday',
    unread: false,
  },
]

export const profileSummary = {
  plan: 'Pro workspace',
  seats: '8 / 10 seats used',
  renews: 'Renews on Sep 14, 2026',
  usage: 68,
}
