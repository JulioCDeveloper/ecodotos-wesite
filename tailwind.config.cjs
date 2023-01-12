module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'worlds': "url('./src/assets/teste.jpg)",
      }
    },
  },
  plugins: [],
}