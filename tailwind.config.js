/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '1sm': '375px',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'poppins': ['Poppins'],
      },
      transitionProperty: {
        transform: "transform",
        opacity: "opacity",
      },
     
    },
  },
  plugins: [],
}