/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'md' : '0px 0px 15px 0px rgb(0, 0, 0 , 0.1)'
      }
    },
  },
  plugins: [],
}

