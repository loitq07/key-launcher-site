/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50: '#fffdf0',
          100: '#fef7c2',
          400: '#fcd34d',
          500: '#fbbc06',
          600: '#e2a300',
          900: '#713f12',
          950: '#030014',
        },
        dark: {
          950: '#09090b',
          900: '#121214',
          800: '#1c1c1f',
          700: '#27272a',
        }
      }
    }
  },
  plugins: [],
}
