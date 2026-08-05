import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { AnimatedBackground } from '@/components/background/AnimatedBackground'

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 text-center">
      <AnimatedBackground variant="auth" />
      <div className="glass-panel rounded-3xl p-10">
        <p className="font-mono text-sm text-aurora-cyan">404</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-foreground">Page not found</h1>
        <p className="mt-3 max-w-sm text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Button asChild className="mt-6">
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  )
}
