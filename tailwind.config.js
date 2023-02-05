/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ibarra: ['Ibarra Real Nova, serif', ...defaultTheme.fontFamily.ibarra],
        sans: ['Public Sans, sans-serif'],
      },
    },
  },
  plugins: [],
};
