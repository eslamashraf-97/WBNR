const colors = {
  primary: {
    300: "#05BD6E",
    200: "#A3E8CA",
    100: "#E9F7F1",
  },
  grey: {
    800: "#2C2B3D",
    700: "#464653",
    500: "#8F8F94",
    400: "#95969D",
    300: "#B1B1B5",
    200: "#D8D8DA",
    100: "#F9FAFA",
  },
};
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./modules/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1664px",
      },
      padding: {
        DEFAULT: "0rem",
      },
    },
    extend: {
      colors,
      fontFamily: {
        Tajawal: ["Tajawal", "sans-serif"],
      },
    },
    borderRadius: {
      xs: "9px",
      sm: "13px",
    },
  },
  plugins: [],
};
