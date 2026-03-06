/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
};
