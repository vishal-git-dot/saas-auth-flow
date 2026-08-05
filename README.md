# Nimbus — Premium SaaS Auth Flow (Frontend-Only Demo)

A polished, animated Landing → Register → Login → Dashboard experience built as a
**pure frontend** demo. There is no backend, no API, and no database — authentication
is fully simulated in the browser using `localStorage` / `sessionStorage`.

## Stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS** with a custom "aurora" design token system (dark + light themes)
- **shadcn/ui-style components**, hand-built on top of Radix UI primitives
- **Framer Motion** for scroll/mouse-reactive backgrounds, tilt effects, and page transitions
- **React Router** for client-side routing
- **React Hook Form + Zod** for form state and validation
- **Sonner** for toast notifications
- **Recharts** for the dashboard analytics chart
- **Lucide React** for icons

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Try it out

There is a seeded demo account so you can log in immediately without registering:

- **Email:** `demo@nimbus.app`
- **Password:** `Demo1234`

Or register a brand new account on the `/register` page — it's saved to `localStorage`
under the key `nimbus_mock_users` (never sent anywhere).

## What's simulated (no backend involved)

- **Registration / Login** — validated with Zod, persisted to `localStorage`, with
  artificial network delay so loading states feel real.
- **"Remember me"** — controls whether the session lives in `localStorage` (persists
  across browser restarts) or `sessionStorage` (cleared when the tab closes).
- **Forgot password** and **social login (Google / GitHub)** — UI only. Clicking them
  shows a toast explaining that no real request is made.
- **Dashboard data** — stats, chart, activity feed, notifications, and profile info are
  all static mock data in `src/lib/mockData.ts`.

## Project structure

```
src/
  components/
    background/    the animated "Aurora Core" background system (mesh, aurora,
                    orbs, particles, grid, morphing blobs)
    ui/             hand-built shadcn-style primitives (Button, Card, Input, ...)
    layout/         Navbar, Footer, Logo, page/scroll transition helpers
    landing/        Hero, feature bento grid, workflow steps, testimonials, CTA
    auth/           AuthShell (split-screen layout), password strength meter,
                    social buttons, success animation, protected route
    dashboard/      Sidebar, TopNav, stat cards, chart, activity, quick actions
  context/          AuthContext (mock auth), ThemeContext (dark/light)
  hooks/            mouse position, scroll progress, reduced motion, card tilt
  lib/              Zod schemas, mock data, cn() helper
  pages/            Landing, Register, Login, Dashboard, NotFound
```

## Notes on accessibility & performance

- Respects `prefers-reduced-motion`: the animated background falls back to a static
  gradient and Framer Motion transforms are skipped.
- Routes are lazy-loaded (`React.lazy` + `Suspense`) to keep the initial bundle small.
- All interactive elements are keyboard-focusable with visible focus rings.
- Dark mode is the default; toggle it from the dashboard top bar (persisted to
  `localStorage`).
