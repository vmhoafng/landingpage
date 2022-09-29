/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('../../src/assets/img/bgimg.png')",
      },
    },
  },
  plugins: [],
};
