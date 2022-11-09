/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#1A1A1A',
      white: '#FFFFFF'
    },
    extend: {
      fontFamily: {
        tesla: ['TESLA Regular']
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
          '2xl': "1440px"
        }
      }
    },
  },
  plugins: [],
}
