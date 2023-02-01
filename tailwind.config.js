/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors : {
      "cherryRed" : "#D2042D",
      "offWhite" : "#F9F9F9",
      "licorice":"#1B1212"
    },
    extend: {
      opacity: {
        '67': '.67',
        '87': '.87',
      }
    },
  },
  plugins: [],
}
