
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
      },
      animation:{
        'fast': 'fast .3s ease-in-out' 
      },
      gridTemplateColumns:{
        custom: "13% 10% 15% 10% 12% 10% 15% 15%"
      },
      boxShadow:{
        sh_custom: '0px 0px 40px -20px black'
      }
    },
  },
  plugins: [],
}