module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        cart: {
          "0%": { left: "-10%" },
          "40%, 60%": { left: "50%" },
          "100%": { transform: "left: 110%;" },
        },
        box: {
          "0%,40%": { top: "-20%" },
          " 60%": { top: "40%", left: "52%" },
          "100%": { top: " 40%", left: "112%" },
        },
      },
        animation: {
          cart: "cart 1s ease-in-out",
          box: "box 2s ease-in-out",
        },
    },
  },
  plugins: [],
};
