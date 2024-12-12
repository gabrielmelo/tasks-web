/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.tsx',
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          "500": "#4EA8DE",
          "700": "#1E6F9F"
        },
        gray: {
          "100": "#F2F2F2",
          "200": "#D9D9D9",
          "300": "#808080",
          "400": "#333333",
          "500": "#262626",
          "600": "#1A1A1A",
          "700": "#0D0D0D"
        }
      }
    },
  },
  plugins: [],
}