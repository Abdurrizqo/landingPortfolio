/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fafafa",
        secondary: "#606C5D",
        "primary-text": "#F1C376",
        "second-text": "#F7E6C4",
      },
    },
  },
  plugins: [],
};
