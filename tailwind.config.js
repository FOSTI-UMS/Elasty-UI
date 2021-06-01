const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: [
    './src/**/*.js',
  ],
  theme: {
    colors,
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
