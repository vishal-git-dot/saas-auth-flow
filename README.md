<div align="center">

<img src="public/aurora-favicon.svg" width="56" height="56" alt="Nimbus logo" />

# Nimbus

### A premium, frontend-only SaaS authentication experience

Landing → Register → Login → Dashboard — fully animated, fully mocked, no backend required.

<p>
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white" />
  <img alt="Backend" src="https://img.shields.io/badge/Backend-None_(mocked)-6B7280?style=flat-square" />
  <a href="https://saas-auth-flow.netlify.app/"><img alt="Live demo" src="https://img.shields.io/badge/Live_Demo-saas--auth--flow.netlify.app-00C7B7?style=flat-square&logo=netlify&logoColor=white" /></a>
</p>

<p>
  <a href="#live-demo"><b>Live Demo</b></a> ·
  <a href="#screenshots"><b>Screenshots</b></a> ·
  <a href="#quick-start"><b>Quick Start</b></a> ·
  <a href="#features"><b>Features</b></a> ·
  <a href="#tech-stack"><b>Tech Stack</b></a>
</p>

</div>

<br />

## Live demo

### 🔗 **[saas-auth-flow.netlify.app](https://saas-auth-flow.netlify.app/)**

Log straight in with the [demo credentials](#demo-credentials) below, or register a new
account — everything is stored in your browser, nothing touches a server.

<details>
<summary>Deploy your own copy</summary>
<br />

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

</details>

<br />

## Screenshots

<div align="center">

| Landing | Register |
|---|---|
| ![Landing page](docs/screenshots/landing.png) | ![Register page](docs/screenshots/register.png) |

| Login | Dashboard |
|---|---|
| ![Login page](docs/screenshots/login.png) | ![Dashboard](docs/screenshots/dashboard.png) |

</div>

<br />

## Overview

Nimbus is a self-contained demo of a modern SaaS product's front door — the part every
product needs but nobody wants to rebuild from scratch. It pairs a cinematic,
scroll- and mouse-reactive background with a complete authentication flow and a
working dashboard shell, all running entirely in the browser.

There's no API, no database, and no server. Accounts and sessions live in
`localStorage` / `sessionStorage`, so you can clone it, run it, and wire up a real
backend whenever you're ready.

<br />

## Features

**Landing**
- Cinematic hero with a tilting glass "product preview" card
- Scroll-reactive aurora background — gradient meshes, glass orbs, particles, a moving grid, and morphing blobs
- Asymmetric bento feature grid, workflow steps, testimonials, and a closing CTA

**Authentication**
- Split-screen glass register / login cards
- Real-time validation with React Hook Form + Zod
- Password strength meter, visibility toggles, "remember me," and a success animation before redirect

**Dashboard**
- Collapsible sidebar and a command-style top bar with search, notifications, and profile menu
- Stat cards, a live-feeling analytics chart, activity feed, quick actions, and a profile summary
- Loading skeletons and dark / light theming

<br />

## Tech stack

| Layer | Tool |
|---|---|
| Framework | React 19 + TypeScript + Vite |
| Styling | Tailwind CSS with custom "aurora" design tokens |
| Components | Hand-built shadcn/ui-style primitives on Radix UI |
| Motion | Framer Motion |
| Forms | React Hook Form + Zod |
| Routing | React Router |
| Charts | Recharts |
| Notifications | Sonner |
| Icons | Lucide |

<br />

## Quick start

```bash
npm install
npm run dev
```

Open the printed local URL — usually `http://localhost:5173`.

```bash
npm run build     # production build
npm run preview   # preview the production build locally
```

<br />

## Demo credentials

No need to register — log straight in:

| Field | Value |
|---|---|
| Email | `demo@nimbus.app` |
| Password | `Demo1234` |

Or create a new account on `/register` — it's saved to `localStorage` and never leaves your browser.

<br />

## What's mocked

| Feature | Behavior |
|---|---|
| Register / Login | Validated locally, persisted to `localStorage`, with an artificial delay so loading states feel real |
| Remember me | Toggles between `localStorage` (persists) and `sessionStorage` (clears on tab close) |
| Forgot password / social login | UI only — clicking shows a toast explaining nothing is actually sent |
| Dashboard data | Static mock data in `src/lib/mockData.ts` |

<br />

## Project structure

```
src/
├─ components/
│  ├─ background/   Aurora Core — the animated mesh / aurora / orb / particle system
│  ├─ ui/            shadcn-style primitives (Button, Card, Input, ...)
│  ├─ layout/         Navbar, Footer, Logo, page transitions
│  ├─ landing/        Hero, feature grid, workflow steps, testimonials, CTA
│  ├─ auth/           Auth shell, password strength, social buttons, protected route
│  └─ dashboard/      Sidebar, top nav, stats, chart, activity, quick actions
├─ context/           AuthContext (mock auth), ThemeContext (dark / light)
├─ hooks/             Mouse position, scroll progress, reduced motion, card tilt
├─ lib/               Zod schemas, mock data, utilities
└─ pages/             Landing, Register, Login, Dashboard, NotFound
```

<br />

## Accessibility & performance

- Respects `prefers-reduced-motion` — the animated background falls back to a static gradient
- Routes are code-split with `React.lazy` + `Suspense`
- Full keyboard navigation with visible focus states
- Dark mode by default, persisted across visits

<br />

<div align="center">

Built as a design & engineering showcase — not affiliated with any real product or company.

</div>
