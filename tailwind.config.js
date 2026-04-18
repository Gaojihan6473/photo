/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        'primary-soft': '#1a1a1a',
        accent: '#c9a96e',
        'accent-soft': '#e8d5b5',
        'gray-100': '#fafafa',
        'gray-200': '#f5f5f5',
        'gray-300': '#e5e5e5',
        'gray-400': '#a3a3a3',
        'gray-500': '#737373',
        'gray-600': '#525252',
      },
      fontFamily: {
        display: ['Playfair Display', 'Noto Serif SC', 'serif'],
        heading: ['Noto Sans SC', 'sans-serif'],
        body: ['Noto Sans SC', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
