/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        primary: {
          50: '#E3FDFD',
          100: '#CBF1F5',
          200: '#B8EAF0',
          300: '#A6E3E9',
          400: '#8AD5DA',
          500: '#71C9CE',
          600: '#5AB7BD',
          700: '#43A5AC',
          800: '#2C939B',
          900: '#15818A',
        },
        dark: {
          50: '#D8DBE2',
          100: '#c0c9d6',
          200: '#A9BCD0',
          300: '#90a9c2',
          400: '#778fa9',
          500: '#5e7590',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #CBF1F5 0%, #E3FDFD 50%, #CBF1F5 100%)',
        'orange-glow': 'linear-gradient(135deg, #A6E3E9 0%, #71C9CE 50%, #5AB7BD 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(113, 201, 206, 0.3)',
        'glow-lg': '0 0 60px rgba(113, 201, 206, 0.4)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

