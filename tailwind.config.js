const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#6258DC",
      "primary-50": "#6258dc8c",
      text: "#65676B",
      btn: "#f5f5f5",
      btn2nd: "rgba(0,0,0,0.04)",
      hover: "#DDD5F0",
      guestMsg: "#E4E6EB",
      divider: "#CED0D4",
      border: "rgba(0,0,0,0.1)",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      transparent: "transparent",
    },
    extend: {
      boxShadow: {
        outline: "0 0 0 2px #fff, 0 0 0 4px #6258DC",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("optional", "&:optional");
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("child-after", "& > *:after");
    }),
  ],
};
