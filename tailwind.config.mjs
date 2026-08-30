import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f2ec",
        blush: "#efd5cf",
        espresso: "#2a1810",
        champagne: "#c4a574",
        smoke: "#6b5f58",
        ink: "#1c1210",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Syne", "Segoe UI", "sans-serif"],
        accent: ["Bodoni Moda", "Didot", "serif"],
      },
      letterSpacing: {
        runway: "0.35em",
      },
    },
  },
  plugins: [typography],
};
