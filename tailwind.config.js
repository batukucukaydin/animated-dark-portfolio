/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b0b12',
        foreground: '#e7e7ea',
        muted: '#9ca3af'
      }
    },
  },
  plugins: [],
}