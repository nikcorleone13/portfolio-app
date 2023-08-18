/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryMobile: '#080808',
        primaryDesktopNavbar: '#080808',
        primaryDesktop1: '#080808',
        primaryDesktop2: '#080808',

        textPrimaryMobile: 'whitesmoke',
        textPrimaryDesktop: 'whitesmoke',
        textPrimaryDesktopHover: '#c86060',

        htmlOrange: '#FF5733',
        cssBlue: '#0000FF',
        jsYellow: '#eab308',
        reactBlue: '#61DBFB',
        tailwindBlue: '#38bdf8',
        nodeGreen: '#5bab46',
        mongoGreen: '#00ed64',
        postmanOrange: '#ff6c37',
        muiBlue: '#007fff',
        nginxGreen: '#009639',
        jestPink: '#831843'
      }
    },
    fontFamily: {
      heading: ['Kaushan Script']
    }
  },
  plugins: [],
}