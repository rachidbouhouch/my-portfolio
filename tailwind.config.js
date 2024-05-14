/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: "#141c2f",
        skyBlue: "#0079fe",
        divBg: "#1f2a48",
        cardOverlay: "rgba(256,256,256,0.4)",
      },
    },
  },
  plugins: [],
};