module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1264px",
      xl: "1904px",
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      primary: "#01B4C6",
      secondary: "#97ce4c",
      white: "#FFFFFF",
      black: "rgb(24,24,24)",
      grey: "#6D6D6D",
      "light-grey": "#737373",
      red: "#EF5350",
      error: "#D32F2F",
      success: "#48C774",
      "black-blue": "#1e293b",
    },
    fontFamily: {
      serif: ["Roboto", "sans-serif"],
      ubuntu: "Ubuntu",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      "semi-bold": "600",
      inherit: "inherit",
    },
    extend: {},
  },
  plugins: [],
};
