/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoBlue: "#143763",
        ButtonBlackHover: "#374151",
      },
    },
  },
  plugins: [],
};
