/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sunlight-through-trees": "url('/sunlight_through_trees.webp')",
      },
    },
  },
  plugins: [],
}
