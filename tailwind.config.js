/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060816",
        panel: "#0B1020",
        line: "rgba(255,255,255,0.08)",
        mist: "#A5B4FC",
        aqua: "#6EE7F9",
        glow: "#34D399"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(3, 7, 18, 0.38)",
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 18px 60px rgba(34, 211, 238, 0.18)"
      },
      animation: {
        shine: "shine 12s linear infinite"
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        }
      }
    }
  },
  plugins: []
};
