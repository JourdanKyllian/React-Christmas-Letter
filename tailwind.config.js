/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f3e6d7',
        brown: '#5b3a29',
      },
    },
  },
  plugins: [],
}
