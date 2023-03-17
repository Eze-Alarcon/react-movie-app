/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        red: '#FC4747',
        black: '#10141E',
        blue: '#5A698F',
        darkBlue: '#161D2F',
        white: '#FFFFFF'
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif']
      },
      gridTemplateColumns: {
        page: '92px minmax(0, 1fr)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide')
  ]
}
