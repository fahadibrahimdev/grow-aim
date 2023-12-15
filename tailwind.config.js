/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xxxs': '320px',
        'xxs': '380px',
        'xs': '450px',
        '3xl': '1700px'
      },
      colors: {
        primary: '#FF0000',
        secondary: '#F6F6F6',
      },
      backgroundColor: {
        'hero-bg': '#F6F6F6',
        'footer-bg': '#010101',
      },
      spacing: {
        '9.5': '38px',
        '13': '50px',
        '18': '72px',
        '26': '106px',
        '38': '150px'
      },
      borderRadius: {
        '4xl': '38px',
        '6xl': '74px',
      },
      fontSize: {
        '4.5xl': '40px',
        '5.5xl': '56px'
      },
      height: {
        '146': '446px'
      },
      width: {
        '92': '360px'
      },
      boxShadow: {
        'nav': '0 2px 4px -2px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.10);',
        'card': '10px 8px 20px rgba(0, 0, 0, 0.25)',
      }
    },
    container: {
      center: true,
      padding: {
        'xxxs': '.3rem',
        'xxs': '.6rem',
        'md': '1rem',
        '2xl': '3rem',
        '3xl': '5rem'
      }
    },
  },
  plugins: [],
}

