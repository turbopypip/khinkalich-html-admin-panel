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
        'divider': 'rgba(191, 191, 191, 1)',
        'sidebar-focus-button': 'rgba(204, 204, 204, 1)',
        'text-buttons-gray': 'rgba(51, 51, 51, 1)',
        'text-black': 'rgba(17, 17, 17, 1)',
        'text-search-gray': 'rgba(153, 153, 153, 1)',
        'Yellow': 'rgba(253, 203, 61, 1)',
      },
      fontFamily: {
        tilda: ['Tilda Sans VF'],
      },
      fontSize: {
        sm: ['12px', '16px'],
        base: ['16px', '24px'],
        lg: ['18px', '20px'],
        xl: ['24px', '28px'],
        buttons2020: ['20px', '20px'],
        restaurant_info: ['16px', '20px']
      },
      boxShadow: {
        'auth-card': '0px 18px 30px 0px rgba(51, 51, 51, 0.5)',
        'iiko-card': '0px 4px 24px 0px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

