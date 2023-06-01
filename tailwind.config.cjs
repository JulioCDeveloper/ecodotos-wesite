const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =  withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'worlds3': "url('https://ecodots-media.s3.sa-east-1.amazonaws.com/uploads/ecodots.gif')"
      }
    },
  },
  plugins: [],
});