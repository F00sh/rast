/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue", // if using Nuxt 3
  ],
  theme: {
    extend: {
      fontFamily: {
        Crimson_bold: ["Crimson", "sans-serif"],
        Bodoni_Moda: ["Bodoni Moda", "serif"],
      },
      colors: {
        brand: {
          light: "#3AB0FF",
          DEFAULT: "#2BCC74",
          dark: "#004FB4",
        },
        // Add your custom colors here
        grayLight: "#E8E8E8",
        greenLight: "#69BE5C",
        greenDark: "#478957",
        orangeDark: "#D35E29",
        tealDark: "#25544A",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.brand.DEFAULT"),
            a: {
              color: theme("colors.brand.dark"),
              "&:hover": {
                color: theme("colors.brand.light"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
