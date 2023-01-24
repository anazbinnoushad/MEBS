/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "",
        sidebar: "#212943",
        contentbg: "#ECEDEF",
        accent: "#3B81F6",
      },
    },
  },
  plugins: [],
};
