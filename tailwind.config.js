const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: [
    './src/**/*.js',
  ],
  theme: {
    colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
