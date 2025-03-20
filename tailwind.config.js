/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}" // ✅ `components/` も含める
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
