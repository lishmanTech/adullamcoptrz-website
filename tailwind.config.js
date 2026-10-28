/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101d32",
        navy: "#142640",
        gold: "#e7b65c",
        mist: "#f4f6f8",
        slatecopy: "#657184"
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 29, 50, .09)"
      }
    },
  },
  plugins: [],
};
