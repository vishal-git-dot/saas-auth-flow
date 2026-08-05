import { z } from 'zod'

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(1, 'Enter your full name')
      .min(2, 'Name must be at least 2 characters')
      .max(60, 'Name is too long'),
    email: z.string().min(1, 'Enter your email').email('Enter a valid email address'),
    password: z
      .string()
      .min(1, 'Create a password')
      .min(8, 'Use at least 8 characters')
      .regex(/[A-Z]/, 'Include at least one uppercase letter')
      .regex(/[0-9]/, 'Include at least one number'),
    confirmPassword: z.string().min(1, 'Confirm your password'),
    terms: z.boolean().refine((v) => v === true, {
      message: 'Accept the terms to continue',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type RegisterValues = z.infer<typeof registerSchema>

export const loginSchema = z.object({
  email: z.string().min(1, 'Enter your email').email('Enter a valid email address'),
  password: z.string().min(1, 'Enter your password'),
  remember: z.boolean().optional(),
})

export type LoginValues = z.infer<typeof loginSchema>

export function getPasswordStrength(password: string) {
  let score = 0
  if (!password) return { score: 0, label: 'Empty', percent: 0 }

  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++

  const clamped = Math.min(score, 5)
  const labels = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong', 'Excellent']
  const percent = (clamped / 5) * 100

  return { score: clamped, label: labels[clamped], percent }
}
