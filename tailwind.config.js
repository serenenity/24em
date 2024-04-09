/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'script': ['"Dancing Script"'],
      },
   
    extend: {},
  },
  plugins: [],
}