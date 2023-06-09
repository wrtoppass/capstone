/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#968D8D",
        "primary-300": "#6F5D5D",
        "primary-500": "#301715",
        "secondary-400": "#F0E9DC",
        "secondary-500": "#EFD9C3",
      },
      backgroundImage:(theme) => ({
        "gradiant-brandy":"linear-gradiant(90deg, #E7B99A 0%, #184665 100%)",
        "mobile-home":"url('./assets/homepage.png')",
      }),
      fontFamily:{
        dmsans: ["DM Sans", "sans-serif"],
        monsterrat:["Monsterrat","sans-serif"],
      },
      content:{
        evolvetext:"url('./assets/mushroomexp.png')",
        abstractwaves:"url('./assets/AbstractWaves.png')",
        sparkles:"url('./assets/Sparkles.png')",
        mushroom:"url('./assets/MushroomIcon.png')",
      }
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px"
    }
  },
  plugins: [],
}
