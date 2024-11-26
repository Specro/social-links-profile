/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        green: '#c4f82a',
        'gray-700': '#333333',
        'gray-800': '#1f1f1f',
        'gray-900': '#141414'
      },
      borderRadius: {
        'xl': '10px',
        '2xl': '20px'
      }
    },
  },
  plugins: [],
}

