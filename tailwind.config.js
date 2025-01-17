 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./_site/**/*.{html,js,njk}",
    "./src/**/*.{html,js,njk}", 
    "./src/_includes/**/*.{html,js,njk}",
    "./src/_includes/components/**/*.{html,js,njk}", 
  ],  
  theme: {
    extend: {
      colors: {
        primaryColor: '#0053d4',
        primaryColorHover: '#054aba',
        bgLight: '#6c9be738',
        bgLight2: '#0051d492',
        colorWhite: '#ffffff',
        colorWhite2: '#e6eaf051',
        colorDark: '#253141',
        colorDark2: '#212d3d',
        textGray: 'rgb(107 114 128)',
        textGray2: 'rgb(100, 104, 111)',
        gold: '#fca900',
        purple: '#6C48C5',
      },
    },
  },
  plugins: [],
}