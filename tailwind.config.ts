import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/[locale]/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
      colors: {
        primary: {
          50: '#BABF94',
          100: '#F2EFEB',
          200: '#E8E2DC',
          300: '#DDD5CD',
          400: '#D2C8BE',
          500: '#C9B59C',
          600: '#B8A58D',
          700: '#A98B76',
          800: '#83715F',
          900: '#665849',
          950: '#4A3D34'
        },
        secondary: {
          50: '#F9F9F7',
          100: '#F3F2EE',
          200: '#E9E7E0',
          300: '#DDDCD2',
          400: '#D3D0C4',
          500: '#C9C6B6',
          600: '#B8B4A2',
          700: '#A8A28E',
          800: '#877F70',
          900: '#675D52',
          950: '#4B4537'
        },
      },
      animation: {
        'gradient-x': 'gradientX 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%' },
          '50%': { 'background-size': '100% 100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 20px rgb(166, 77, 121)' },
          '100%': { textShadow: '0 0 30px rgb(106, 30, 85)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

