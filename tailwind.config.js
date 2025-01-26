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
      },
      colors: {
        brand: {
          light: "#3AB0FF",
          DEFAULT: "#0F8CFF",
          dark: "#004FB4",
        },
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
