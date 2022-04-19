module.exports = {
  content: [ "./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: 'class',
  theme: {
    boxShadow:{
      'costum-light': '0 0 5px #313131',
      'costum-dark': '5px 5px 10px #0a0c0e , -5px -5px 10px #14161c' 
    },
      extend: {
        colors:{
          dark:{
            DEFAULT: '#010101',
            100: '#0a0b0e',
            200: '#16181d',
            300: '#0f1115',
            400: '#202125',
          }
        }
      },
    },
    varients:{
      extends:{
        boxShadow:['dark']
      },
    },
    plugins: [],
}
