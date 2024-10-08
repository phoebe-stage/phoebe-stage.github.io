/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors : {
          'dark': '#1d3557',
          'mid' : '#457B9D',
          'light-mid' : '#A8DADC',
          'light' : '#F1FAEE',
          // 'accent' : '#E63946'
          'accent' : '#FF9FB2',
        }
    },
  },
  plugins: [],
};
