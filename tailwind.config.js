/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2CAC16',
        'secondary': '#04207A',
        'tertiary': '#222222',
      },
      fontFamily: {
        'heading': ['Palanquin', 'sans-serif'],
        'body': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
