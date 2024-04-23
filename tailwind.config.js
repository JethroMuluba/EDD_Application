/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 500px 20px rgba(0, 0, 0, 2)',
        'md' : '0px 0px 15px 0px rgb(0, 0, 0 , 0.1)',
        'xl' : '0px 10px 15px 5px rgb(0, 0, 0 , 0.1)'
      }
    },
  },
  plugins: [],
}

