module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#27C690",
        secondary: "#9CB2AA",
        tertiary: "#B2D8CB",
        bgprimary: "#FAFCFF",
        bgsecondary: "#E3FAFB",
        bgtertiary: "#F9F9F9",
      },
      fontFamily: {
        roboto: ["Roboto", "ui-sans-serif"],
        poppins: ["Poppins", "ui-sans-serif"],
        lato: ["Lato", "SFMono-ui-monospace"],
      },
    },
  },
  plugins: [],
};
