/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        '470': '470px',
      },
      fontSize: {
        '18': '18px',
      },
      margin: {
        '16': '16px',
      },
      height:{
        '60': '60px',
      },
      padding: {
        '10': '10px',
        '25': '25px',
      },
      colors: {
        cbg: '#ebfffc',
      },
      borderRadius: {
        '20': '20px',
        '30': '30px',
        '50': '50px',
      },
      spacing: {
        '100': '100px',
      },
      width: {
        '9/10': '90%',
        '60': '60px',
        '16': '16px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #00feba, #5b584a)',
      },
    },
  },
  plugins: [],
};
