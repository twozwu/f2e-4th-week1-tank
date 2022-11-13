/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFB3A4', //primary-light，例如:bg-primary-light
          DEFAULT: '#B82A06', //primary
          dark: '#0c87b8', //primary-dark
        },
        secondary: {
          DEFAULT: '#3C0C00'
        },
      },
      backgroundImage: {
        'web-animation': "url('/src/assets/images/web-animation.gif')",
        'dialogs-flat': "url('/src/assets/images/dialogs-flat.png')",
        'dialogs': "url('/src/assets/images/dialogs.png')",
      }
    },
  },
  plugins: [],
}