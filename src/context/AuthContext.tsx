import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { sleep } from '@/lib/utils'

export interface MockUser {
  id: string
  fullName: string
  email: string
  createdAt: string
}

interface StoredUser extends MockUser {
  password: string
}

interface AuthContextValue {
  user: MockUser | null
  isAuthenticated: boolean
  isInitializing: boolean
  register: (input: { fullName: string; email: string; password: string }) => Promise<void>
  login: (input: { email: string; password: string; remember?: boolean }) => Promise<void>
  logout: () => void
}

const USERS_KEY = 'nimbus_mock_users'
const SESSION_KEY = 'nimbus_session'

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY)
    return raw ? (JSON.parse(raw) as StoredUser[]) : []
  } catch {
    return []
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function toPublicUser(user: StoredUser): MockUser {
  return { id: user.id, fullName: user.fullName, email: user.email, createdAt: user.createdAt }
}

// Seed a demo account so visitors can log in without registering first.
function ensureDemoUser() {
  const users = readUsers()
  if (!users.find((u) => u.email === 'demo@nimbus.app')) {
    users.push({
      id: 'demo-user',
      fullName: 'Demo Explorer',
      email: 'demo@nimbus.app',
      password: 'Demo1234',
      createdAt: new Date().toISOString(),
    })
    writeUsers(users)
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null)
  const [isInitializing, setIsInitializing] = useState(true)

  useEffect(() => {
    ensureDemoUser()
    const sessionRaw = localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY)
    if (sessionRaw) {
      try {
        const { userId } = JSON.parse(sessionRaw) as { userId: string }
        const found = readUsers().find((u) => u.id === userId)
        if (found) {
          setUser(toPublicUser(found))
        }
      } catch {
        // ignore malformed session
      }
    }
    const timer = setTimeout(() => setIsInitializing(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const register: AuthContextValue['register'] = async ({ fullName, email, password }) => {
    await sleep(1100)
    const users = readUsers()
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error('An account with this email already exists.')
    }
    const newUser: StoredUser = {
      id: crypto.randomUUID(),
      fullName,
      email,
      password,
      createdAt: new Date().toISOString(),
    }
    writeUsers([...users, newUser])
  }

  const login: AuthContextValue['login'] = async ({ email, password, remember }) => {
    await sleep(1000)
    const users = readUsers()
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase())
    if (!found || found.password !== password) {
      throw new Error('Incorrect email or password.')
    }
    setUser(toPublicUser(found))
    const payload = JSON.stringify({ userId: found.id })
    if (remember) {
      localStorage.setItem(SESSION_KEY, payload)
    } else {
      sessionStorage.setItem(SESSION_KEY, payload)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(SESSION_KEY)
    sessionStorage.removeItem(SESSION_KEY)
  }

  const value = useMemo(
    () => ({ user, isAuthenticated: !!user, isInitializing, register, login, logout }),
    [user, isInitializing],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
