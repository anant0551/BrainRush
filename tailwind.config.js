// const { assets } = require("./src/assets/assets");

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust the paths as needed for your project structure
    "./public/index.html", // Add any other relevant paths
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image1': "url('/src/assets/home-content-1.png')",
      },
      colors: {
        l_blue: '#B9FFFF',
        harvestgold: '#FDB515',
        black_g: '#0B0B0B',
      },
      boxShadow: {
        glow: "0 0 10px #0EA5E9, 0 0 20px #0EA5E9",
      },
      animation: {
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        'star-movement-bottom': {
        '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
        '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
        '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
        '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
