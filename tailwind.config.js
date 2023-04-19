export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "black",
      white: "white",
      red: {
        300: "#ed4842",
        400: "#cf1826",
        500: "#b42e25"
      }
    },
    extend: {
      fontFamily: {
        primary: ['montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}