import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff, Mail, User, Lock, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

import { AuthShell } from '@/components/auth/AuthShell'
import { SocialButtons } from '@/components/auth/SocialButtons'
import { PasswordStrengthMeter } from '@/components/auth/PasswordStrengthMeter'
import { SuccessCheck } from '@/components/auth/SuccessCheck'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/context/AuthContext'
import { registerSchema } from '@/lib/validations'
import type { RegisterValues } from '@/lib/validations'

export default function Register() {
  const navigate = useNavigate()
  const { register: registerUser } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { fullName: '', email: '', password: '', confirmPassword: '', terms: false },
  })

  const passwordValue = watch('password')

  const onSubmit = async (values: RegisterValues) => {
    try {
      await registerUser(values)
      setSuccess(true)
      toast.success('Account created', { description: 'Welcome to Nimbus — please log in to continue.' })
      setTimeout(() => navigate('/login'), 1900)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setError('email', { message })
      toast.error('Could not create account', { description: message })
    }
  }

  return (
    <AuthShell
      eyebrow="Get started"
      headline="Everything your team ships, in one calm place."
      subcopy="Create your workspace in under a minute — no credit card, no setup calls."
      points={['Free forever for teams up to 5', 'Enterprise-grade security by default', 'Loved by 500+ product teams']}
    >
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div key="success" exit={{ opacity: 0 }}>
            <SuccessCheck title="Account created!" subtitle="Taking you to the login page..." />
          </motion.div>
        ) : (
          <motion.div key="form" exit={{ opacity: 0, y: -8 }}>
            <div className="mb-6">
              <h1 className="font-display text-2xl font-semibold text-foreground">Create your account</h1>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Already have one?{' '}
                <Link to="/login" className="font-medium text-primary hover:underline">
                  Log in instead
                </Link>
              </p>
            </div>

            <SocialButtons />

            <div className="my-6 flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">or continue with email</span>
              <Separator className="flex-1" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="fullName">Full name</Label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="fullName"
                    placeholder="Alex Rivera"
                    className="pl-10"
                    autoComplete="name"
                    aria-invalid={!!errors.fullName}
                    {...register('fullName')}
                  />
                </div>
                {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
              </div>

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
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    className="pl-10 pr-10"
                    autoComplete="new-password"
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
                {errors.password ? (
                  <p className="text-xs text-destructive">{errors.password.message}</p>
                ) : (
                  <PasswordStrengthMeter password={passwordValue} />
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="Re-enter your password"
                    className="pl-10 pr-10"
                    autoComplete="new-password"
                    aria-invalid={!!errors.confirmPassword}
                    {...register('confirmPassword')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  >
                    {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>}
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Controller
                  name="terms"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="terms"
                      className="mt-0.5"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label htmlFor="terms" className="cursor-pointer text-xs font-normal leading-relaxed text-muted-foreground">
                  I agree to the{' '}
                  <a href="#" className="font-medium text-foreground hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="font-medium text-foreground hover:underline">
                    Privacy Policy
                  </a>
                </Label>
              </div>
              {errors.terms && <p className="-mt-2 text-xs text-destructive">{errors.terms.message}</p>}

              <Button type="submit" className="group mt-2 w-full" size="lg" loading={isSubmitting}>
                {!isSubmitting && (
                  <>
                    Create account
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
                {isSubmitting && 'Creating your account...'}
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </AuthShell>
  )
}
