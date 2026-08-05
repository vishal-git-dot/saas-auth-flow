import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

import { AuthShell } from '@/components/auth/AuthShell'
import { SocialButtons } from '@/components/auth/SocialButtons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/context/AuthContext'
import { loginSchema } from '@/lib/validations'
import type { LoginValues } from '@/lib/validations'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', remember: false },
  })

  const onSubmit = async (values: LoginValues) => {
    try {
      await login(values)
      toast.success('Welcome back', { description: 'Redirecting to your dashboard...' })
      navigate('/dashboard')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setError('password', { message: ' ' })
      setError('email', { message })
      toast.error('Login failed', { description: message })
    }
  }

  return (
    <AuthShell
      eyebrow="Welcome back"
      headline="Pick up right where your team left off."
      subcopy="Log in to see live workflows, fresh analytics, and everything your team shipped overnight."
      points={['Single sign-on ready', 'Synced across every device', '2-minute onboarding for new teammates']}
    >
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="mb-6">
          <h1 className="font-display text-2xl font-semibold text-foreground">Log in to Nimbus</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            New here?{' '}
            <Link to="/register" className="font-medium text-primary hover:underline">
              Create an account
            </Link>
          </p>
        </div>

        <div className="mb-5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-muted-foreground">
          Try the demo: <span className="font-mono text-foreground/80">demo@nimbus.app</span> ·{' '}
          <span className="font-mono text-foreground/80">Demo1234</span>
        </div>

        <SocialButtons />

        <div className="my-6 flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground">or continue with email</span>
          <Separator className="flex-1" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email address</Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="pl-10"
                autoComplete="email"
                aria-invalid={!!errors.email}
                {...register('email')}
              />
            </div>
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <button
                type="button"
                onClick={() =>
                  toast.info('Password reset is a UI preview', {
                    description: 'This demo has no email backend, so reset links are not sent.',
                  })
                }
                className="text-xs font-medium text-primary hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="pl-10 pr-10"
                autoComplete="current-password"
                aria-invalid={!!errors.password}
                {...register('password')}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && errors.password.message?.trim() && (
              <p className="text-xs text-destructive">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center gap-2.5 pt-1">
            <Controller
              name="remember"
              control={control}
              render={({ field }) => (
                <Checkbox id="remember" checked={field.value} onCheckedChange={field.onChange} />
              )}
            />
            <Label htmlFor="remember" className="cursor-pointer text-xs font-normal text-muted-foreground">
              Remember me on this device
            </Label>
          </div>

          <Button type="submit" className="group mt-2 w-full" size="lg" loading={isSubmitting}>
            {!isSubmitting && (
              <>
                Log in
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
            {isSubmitting && 'Signing you in...'}
          </Button>
        </form>
      </motion.div>
    </AuthShell>
  )
}
