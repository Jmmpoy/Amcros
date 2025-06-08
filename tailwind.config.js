module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Futura", "Arial", "sans-serif"],
      mono: ["Lucida Console", "Courier", "monospace"],
      neueLight: ["Neue-Light"],
      neueRegular: ["Neue-Regular"],
      neueBold: ["Neue-Bold"],
      futuraLight: ["Futura-Light"],
      foundersLight: ["FoundersLight"],
      founders: ["Founders"],
      ibm: ["IBM"],
      ibmLight: ["IBMLight"],
    },
    screens: {
      xsm: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "2000px",
    },
    extend: {
      colors: {
        black: "#000",
        white: "#f9f4ef",
        gray: "#888888",
        gold: "#C5A880",
        brown: "#2E1E1E",
      },
      height: (theme) => ({
        "50vh": "50vh",
        "75vh": "75vh",
      }),
    },
  },
  plugins: [],
};
