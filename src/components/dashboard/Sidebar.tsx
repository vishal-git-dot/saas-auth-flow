import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BarChart3,
  FolderKanban,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Logo } from '@/components/layout/Logo'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import { useAuth } from '@/context/AuthContext'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Projects', icon: FolderKanban },
  { label: 'Team', icon: Users },
  { label: 'Messages', icon: MessageSquare },
  { label: 'Settings', icon: Settings },
]

interface SidebarContentProps {
  collapsed?: boolean
  onNavigate?: () => void
}

export function SidebarContent({ collapsed = false, onNavigate }: SidebarContentProps) {
  const { logout } = useAuth()

  return (
    <div className="flex h-full flex-col">
      <div className={cn('flex items-center px-5 py-6', collapsed && 'justify-center px-0')}>
        {collapsed ? (
          <div className="h-8 w-8 rounded-lg bg-[#0A0B12] p-1">
            <div className="h-full w-full rounded-full bg-gradient-to-br from-aurora-violet via-aurora-blue to-aurora-cyan" />
          </div>
        ) : (
          <Logo />
        )}
      </div>

      <nav className="flex-1 space-y-1 px-3">
        <TooltipProvider delayDuration={200}>
          {navItems.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <button
                  onClick={onNavigate}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                    collapsed && 'justify-center px-0',
                    item.active
                      ? 'bg-primary/15 text-primary shadow-[inset_0_0_0_1px_rgba(124,92,255,0.25)]'
                      : 'text-muted-foreground hover:bg-white/5 hover:text-foreground',
                  )}
                >
                  <item.icon className="h-[18px] w-[18px] shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              </TooltipTrigger>
              {collapsed && (
                <TooltipContent side="right">
                  <p>{item.label}</p>
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>

      <div className="border-t border-white/10 p-3">
        <button
          onClick={logout}
          className={cn(
            'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive',
            collapsed && 'justify-center px-0',
          )}
        >
          <LogOut className="h-[18px] w-[18px] shrink-0" />
          {!collapsed && <span>Log out</span>}
        </button>
      </div>
    </div>
  )
}

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <motion.aside
      animate={{ width: collapsed ? 76 : 248 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel relative hidden shrink-0 rounded-none border-y-0 border-l-0 lg:block"
    >
      <SidebarContent collapsed={collapsed} />
      <button
        onClick={onToggle}
        className="absolute -right-3 top-8 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-card text-muted-foreground shadow-glass-sm transition-colors hover:text-foreground"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <ChevronsRight className="h-3.5 w-3.5" /> : <ChevronsLeft className="h-3.5 w-3.5" />}
      </button>
    </motion.aside>
  )
}
