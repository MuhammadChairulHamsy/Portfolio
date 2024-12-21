/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './about.html', './projects.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#6b7280',
        dark: '#0f172a',
        secondary: '#0ea5e9',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

