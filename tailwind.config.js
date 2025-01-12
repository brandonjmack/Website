/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      height: {
        'auto-minus-100': 'calc(auto - 100px)',
      }
    },
  },
  plugins: [],
}

