/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        primary: '#0a66c2',
        landing: '#8F5849',
        secondary:'RGB(238, 243, 248)',
        background : '#f3f2ef',
        popup : 'rgba(0,0,0,0.5)',
        blackpopup : '#1d2226'
      },
      spacing: {
        '128': '38rem',
      }
    },

  },
  plugins: [],
};
