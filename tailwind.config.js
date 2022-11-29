/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#242424',
      secondary: '#F7AB0A',
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6b7280',
        circle: '#333333'
      },
      slate: {
        400: '#94A3B8'
      },
      transparent: 'transparent'
    },
  },
  extend: {},
  plugins: [
    require('tailwind-scrollbar')
  ],
}
