module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'worlds': "url('./src/assets/teste.jpg)",
        'worlds2': "url('/src/assets/amazon.gif')"
      }
    },
  },
  plugins: [],
}