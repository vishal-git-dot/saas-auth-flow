import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1320px' },
    },
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        aurora: {
          violet: '#7C5CFF',
          cyan: '#45E8D1',
          magenta: '#FF6FD8',
          amber: '#F5B860',
          blue: '#5B8CFF',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 12px)',
        '3xl': 'calc(var(--radius) + 20px)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.28)',
        'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.18)',
        'glow-violet': '0 0 40px -8px rgba(124, 92, 255, 0.55)',
        'glow-cyan': '0 0 40px -8px rgba(69, 232, 209, 0.45)',
        'glow-amber': '0 0 30px -6px rgba(245, 184, 96, 0.5)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'grid-pattern-light':
          'linear-gradient(to right, rgba(10,10,20,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,20,0.05) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse 80% 50% at 50% -10%, var(--tw-gradient-stops))',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(40px, -60px) scale(1.08)' },
          '50%': { transform: 'translate(-30px, 30px) scale(0.94)' },
          '75%': { transform: 'translate(60px, 40px) scale(1.04)' },
        },
        'blob-slow': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(-50px, 40px) scale(1.1) rotate(8deg)' },
          '66%': { transform: 'translate(40px, -30px) scale(0.92) rotate(-6deg)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translateX(-10%) translateY(-5%) rotate(0deg)', opacity: '0.55' },
          '50%': { transform: 'translateX(10%) translateY(5%) rotate(8deg)', opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-24px) translateX(10px)' },
        },
        'grid-pan': {
          '0%': { backgroundPosition: '0px 0px' },
          '100%': { backgroundPosition: '64px 64px' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        particle: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-120vh) translateX(30px)', opacity: '0' },
        },
        morph: {
          '0%, 100%': { borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%' },
          '25%': { borderRadius: '58% 42% 35% 65% / 60% 55% 45% 40%' },
          '50%': { borderRadius: '65% 35% 50% 50% / 35% 60% 40% 65%' },
          '75%': { borderRadius: '35% 65% 55% 45% / 55% 35% 65% 45%' },
        },
      },
      animation: {
        blob: 'blob 22s ease-in-out infinite',
        'blob-slow': 'blob-slow 34s ease-in-out infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 12s ease-in-out infinite',
        'grid-pan': 'grid-pan 18s linear infinite',
        shimmer: 'shimmer 2.4s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulse-glow 3.5s ease-in-out infinite',
        particle: 'particle linear infinite',
        morph: 'morph 16s ease-in-out infinite',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
