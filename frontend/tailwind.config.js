/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        brand: {
          400: "#38bdf8",
          500: "#06b6d4",
          600: "#0ea5e9",
        },
        surface: {
          100: "#f8fafc",
          200: "#f1f5f9",
          300: "#e2e8f0",
        },
      },
      ringColor: {
        focus: "#06b6d4",
      },
    },
  },
  plugins: [],
};
