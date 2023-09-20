/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoBlue: "#61C3EB",
        logoHover: "#3177C1",
        ButtonBlackHover: "#374151",
      },
    },
  },
  plugins: [],
};
