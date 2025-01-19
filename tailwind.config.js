/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "#353535",
        container: "#D9D9D9",
        white: "#FFFFFF",
        primary: "#284B63",
        secondary: "#3C6E71"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      screens: {
      },
    },
  },
  plugins: [],
}

