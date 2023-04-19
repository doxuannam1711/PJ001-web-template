export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        default: "#262626",
        contrast: "#FFFFFF",
        main: "#C1121F",
        dark: "#610910",
        light: "#FF303E"
      },
      black: "black"
    },
    extend: {
      fontFamily: {
        primary: ['montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}