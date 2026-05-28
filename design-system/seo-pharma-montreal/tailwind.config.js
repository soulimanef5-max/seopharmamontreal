/** @type {import('tailwindcss').Config} */

// Design System — SEO Pharma Montréal
// Style: Trust & Authority | seopharmamontreal.com

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {

      // ─── COULEURS ───────────────────────────────────────────────────
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          light:   '#1E293B',
          muted:   '#334155',
        },
        cta: {
          DEFAULT: '#CA8A04',
          hover:   '#A16207',
          light:   '#FEF3C7',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt:     '#F1F5F9',
        },
        brand: {
          navy:   '#0F172A',
          gold:   '#CA8A04',
          slate:  '#334155',
          bg:     '#F8FAFC',
          text:   '#020617',
          muted:  '#475569',
          subtle: '#64748B',
          border: '#E2E8F0',
        },
      },

      // ─── TYPOGRAPHIE ───────────────────────────────────────────────
      fontFamily: {
        heading: ['Figtree', 'system-ui', 'sans-serif'],
        body:    ['Noto Sans', 'system-ui', 'sans-serif'],
        sans:    ['Noto Sans', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      fontSize: {
        'display': ['4rem',   { lineHeight: '1.1',  letterSpacing: '-0.025em', fontWeight: '700' }],
        '6xl':     ['3.75rem',{ lineHeight: '1.1',  letterSpacing: '-0.025em' }],
        '5xl':     ['3rem',   { lineHeight: '1.15', letterSpacing: '-0.02em'  }],
        '4xl':     ['2.25rem',{ lineHeight: '1.2',  letterSpacing: '-0.015em' }],
        '3xl':     ['1.875rem',{ lineHeight: '1.3'  }],
        '2xl':     ['1.5rem', { lineHeight: '1.35' }],
        'xl':      ['1.25rem',{ lineHeight: '1.4'  }],
        'lg':      ['1.125rem',{ lineHeight: '1.6' }],
        'base':    ['1rem',   { lineHeight: '1.65' }],  /* min 16px mobile */
        'sm':      ['0.875rem',{ lineHeight: '1.5' }],
        'xs':      ['0.75rem',{ lineHeight: '1.5'  }],
      },

      fontWeight: {
        light:    '300',
        regular:  '400',
        medium:   '500',
        semibold: '600',
        bold:     '700',
      },

      // ─── ESPACEMENT ────────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },

      // ─── BORDER RADIUS ─────────────────────────────────────────────
      borderRadius: {
        'sm':  '0.25rem',
        'md':  '0.5rem',
        DEFAULT: '0.5rem',
        'lg':  '0.75rem',
        'xl':  '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

      // ─── OMBRES ────────────────────────────────────────────────────
      boxShadow: {
        'xs':    '0 1px 2px rgba(15, 23, 42, 0.04)',
        'sm':    '0 1px 3px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04)',
        'DEFAULT':'0 4px 6px rgba(15, 23, 42, 0.07), 0 2px 4px rgba(15, 23, 42, 0.05)',
        'md':    '0 4px 6px rgba(15, 23, 42, 0.07), 0 2px 4px rgba(15, 23, 42, 0.05)',
        'lg':    '0 10px 15px rgba(15, 23, 42, 0.08), 0 4px 6px rgba(15, 23, 42, 0.04)',
        'xl':    '0 20px 25px rgba(15, 23, 42, 0.1), 0 8px 10px rgba(15, 23, 42, 0.04)',
        '2xl':   '0 25px 50px rgba(15, 23, 42, 0.15)',
        'cta':   '0 4px 14px rgba(202, 138, 4, 0.35)',   /* lueur or */
        'inner': 'inset 0 2px 4px rgba(15, 23, 42, 0.06)',
        'none':  'none',
      },

      // ─── ANIMATIONS ────────────────────────────────────────────────
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },

      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },

      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'stat-reveal': {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(202, 138, 4, 0)' },
          '50%':       { boxShadow: '0 0 0 6px rgba(202, 138, 4, 0.15)' },
        },
        'badge-hover': {
          '0%':   { transform: 'translateY(0) scale(1)' },
          '50%':  { transform: 'translateY(-2px) scale(1.02)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
        'skeleton': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },

      animation: {
        'fade-in':        'fade-in 0.3s ease-out',
        'fade-up':        'fade-up 0.4s ease-out',
        'fade-up-slow':   'fade-up 0.6s ease-out',
        'slide-right':    'slide-in-right 0.3s ease-out',
        'stat-reveal':    'stat-reveal 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'pulse-gold':     'pulse-gold 2s ease-in-out infinite',
        'badge-hover':    'badge-hover 0.3s ease-in-out',
        'skeleton':       'skeleton 1.5s infinite linear',
      },

      // ─── Z-INDEX ───────────────────────────────────────────────────
      zIndex: {
        'raised':   '10',
        'dropdown': '20',
        'sticky':   '30',
        'overlay':  '40',
        'modal':    '50',
        'toast':    '60',
        'tooltip':  '70',
      },

      // ─── TAILLES MAX ───────────────────────────────────────────────
      maxWidth: {
        'container':  '1280px',
        'narrow':     '720px',
        'wide':       '1440px',
        'prose':      '65ch',     /* lisibilité optimale */
      },

      // ─── BREAKPOINTS (inchangés mais documentés) ──────────────────
      // sm:  640px   (phablet)
      // md:  768px   (tablette portrait)
      // lg:  1024px  (tablette paysage / petit laptop)
      // xl:  1280px  (desktop standard)
      // 2xl: 1536px  (grand écran)
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
