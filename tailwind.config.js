const plugin = require("tailwindcss/plugin");

const colors = {
  primary: {
    300: "#05BD6E",
    200: "#A3E8CA",
    100: "#E9F7F1",
  },
  gray: {
    800: "#2C2B3D",
    700: "#464653",
    500: "#8F8F94",
    400: "#95969D",
    300: "#B1B1B5",
    200: "#D8D8DA",
    100: "#F9FAFA",
  },
  secondary: {
    300: "#EEDC53",
  },
  error: {
    400: "#F85A40",
  },
  status: {
    yellow400: "#EEDC53",
    primary300: "#05BD6E",
    error400: "#F85A40",
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
        // sm: "600px",
        // md: "728px",
        // lg: "984px",
        // xl: "1240px",
        "2xl": "1664px",
      },
      padding: {
        DEFAULT: "20px",
      },
    },
    extend: {
      colors,
      fontFamily: {
        Tajawal: ["Tajawal", "sans-serif"],
      },
      boxShadow: {
        main: "0px 1px 3px 0px rgba(23, 102, 68, 0.03), 0px 10px 46px 0px rgba(23, 100, 67, 0.03)",
      },
      borderRadius: {
        xs: "9px",
        sm: "13px",
        md: "16px",
        lg: "1.5rem",
      },
      listStyleType: {
        square: "square",
      },
      lineHeight: {
        normal: "2.813rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: {
          "@media (max-width: 767px)": {
            fontSize: "12px",
          },
          "@media (min-width: 768px)": {
            fontSize: "13px",
          },
          "@media (min-width: 991px)": {
            fontSize: "14px",
          },
          "@media (min-width: 1600px)": {
            fontSize: "16px",
          },
        },
      });
    }),
  ],
};
