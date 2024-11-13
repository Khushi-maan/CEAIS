/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      fontSize: {
        "custom-3xl": "32px",
        "custom-5xl": "56px",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: "#007BFF",
        black: "#010101",
        gray: "#333333",
        yellow: "#FFC107",
        "alice-blue": "#F2F8FF",
        "light-gray": "#D8D8D8",
        clay: "#1B2228",
      },
      lineHeight: {
        120: "120%",
        150: "150%",
      },
    },
  },
  plugins: [],
};
