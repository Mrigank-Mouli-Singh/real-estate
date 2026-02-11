/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        accent: "#2563EB",
        lightBg: "#F8FAFC",
      },
      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      fontFamily: {
      serifDisplay: ['"DM Serif Display"', 'serif'],
      manrope: ['Manrope', 'sans-serif'],
    }
    },
  },
  plugins: [],
}
