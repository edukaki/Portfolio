/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ibarra: ['Ibarra Real Nova, serif'],
        sans: ['Public Sans, sans-serif'],
      },
      colors: {
        'bright-red': '#F43030',
        'dark-blue': '#203A4C',
        'grayish-dark-blue': '#33323D',
        'light-cyan': '#5FB4A2',
        'light-grey': '#EAEAEB',
        'very-light-grey': '#FAFAFA',
      },
    },
  },
  plugins: [],
};
