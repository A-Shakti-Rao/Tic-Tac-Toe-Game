/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      minHeight: {
        '128': '32rem',
      },
      minWidth: {
        '128': '32rem',
      },
      colors: {
        'cross-blue': '#00A3E8',
        'circle-orange': '#FF7F26',
        'bg-main': '#F7F7F7',
        'bg-white': '#FDFDFD',
        'text-color': '#425D7E'
      },
      dropShadow: {
        '3xl-cross': '0 35px 25px rgb(0 163 230 / 75%)',
        '3xl-circle': '0 35px 25px rgb(255 127 38 / 75%)'
      },
      boxShadow: {
        '3xl-cross': '0 15px 25px -7px rgb(0 163 230)',
        '3xl': '0 0px 43px 2px rgb(134 149 156)'
      },
      spacing: {
        '34': '8.5rem',
      }
    },
    fontFamily: {
      poppins: ["Poppins"]
    }
  },
  plugins: [],
}

