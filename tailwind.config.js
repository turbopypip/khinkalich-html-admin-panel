/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background-main': 'rgba(230, 230, 230, 1)',
        'background-card': 'rgba(255, 255, 255, 1)',
        'input': 'rgba(242, 242, 242, 1)',
        'Red': 'rgba(141, 25, 29, 1)',
        'additional-text': 'rgba(128, 128, 128, 1)',
      },
      fontFamily: {
        tilda: ['Tilda Sans VF', 'sans-serif'],
      },
      fontSize: {
        sm: ['12px', '16px'],
        base: ['16px', '24px'],
        lg: ['18px', '20px'],
        xl: ['24px', '32px'],
      },
      boxShadow: {
        'card': '0px 18px 30px 0px rgba(51, 51, 51, 0.5)'
      },
    },
  },
  plugins: [],
}

