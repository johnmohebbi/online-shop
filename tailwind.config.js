module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        cart: {
          "0%": { left: "-10%" },
          "40%, 60%": { left: "40%" },
          "100%": { left: "120%" },
        },
        box: {
          "0%": { top: "5%" },
          "10%": { top: "5%" },
          "35%": { top: "15%" },
      
          "100%": { left: "120%" },
        },
      },
        animation: {
          cart: "cart 1s ease-in-out",
          box: "box 1.5s ease-in-out",
        },
    },
  },
  plugins: [],
};
