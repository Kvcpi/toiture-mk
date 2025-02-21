/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        parkinsans: ['Parkinsans', 'sans-serif'],
      },
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in-out": "fadeInOut 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
