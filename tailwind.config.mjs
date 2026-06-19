/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4ECAC2",
        secondary: "#2F6D6A",
        accent: "#8DE0D8",
        soft: "#FAFAFA",
        ink: "#1A1A1A",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(26, 26, 26, 0.08)",
        lift: "0 16px 40px rgba(47, 109, 106, 0.16)",
      },
      borderRadius: {
        soft: "1.5rem",
      },
    },
  },
  plugins: [],
};
