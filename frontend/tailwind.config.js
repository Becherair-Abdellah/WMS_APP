
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        pr_color: ["#2a51e7ff"],
        pr_color_2: ["#1c3fc5ff"],
      },
      fontFamily:{
        ubuntu: ["Ubuntu","sans-serif"]
      }
    },
  },
  plugins: [],
}