const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Poppins', 'system-ui', 'sans-serif'],
    },
    colors: {
      empty: {
        emerald: '#10b981'
      },
      empty: {
        lime: '#bef264'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
