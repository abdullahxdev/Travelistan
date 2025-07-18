/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Default font
        heading: ['Montserrat', 'sans-serif'], // Custom font for headings
      },
    },
  },
  plugins: [],
};
