/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode:"class",
  theme: {
    extend: {fontFamily: {
      display: 'sans',
    },},
    screens:{
      "mobile":"0",
      "desktop":"1000px"
    },
  },
  plugins: [require('daisyui')],
}