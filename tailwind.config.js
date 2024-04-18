/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px'
      },
      colors: {
        'primary': '#8A33FD',
        'dark': '#3C4242'
      }
    },
  },
  plugins: [],
}