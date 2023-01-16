const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =  withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'worlds': "url('./src/assets/teste.jpg)",
        'teste2': "url('./src/assets/teste2.jpg)",
        'worlds2': "url('/src/assets/eco.gif')"
      }
    },
  },
  plugins: [],
});