import colors from "tailwindcss/colors";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        dark: "#272727",
        light: colors.gray[50],

        "light-grey": colors.gray[300],
        grey: colors.gray[500],
        "dark-grey": colors.gray[900],

        "light-red": colors.red[500],
        red: colors.red[700],
        "dark-red": colors.red[900],

        "light-orange": colors.orange[500],
        orange: colors.orange[700],
        "dark-orange": colors.orange[900],

        "light-yellow": colors.yellow[500],
        yellow: colors.yellow[700],
        "dark-yellow": colors.yellow[900],

        "light-green": colors.lime[500],
        green: colors.lime[700],
        "dark-green": colors.lime[900],

        "light-blue": colors.blue[500],
        blue: colors.blue[700],
        "dark-blue": colors.blue[900],

        "light-violet": colors.violet[500],
        violet: colors.violet[700],
        "dark-violet": colors.violet[900],

        "light-pink": colors.pink[500],
        pink: colors.pink[700],
        "dark-pink": colors.pink[900],

        "light-fuchsia": colors.fuchsia[500],
        fuchsia: colors.fuchsia[700],
        "dark-fuchsia": colors.fuchsia[900],

        // Highlightjs colors
        "hljs-fuchsia": "#f92672",
        "hljs-blue": "#66d9ef",
        "hljs-violet": "#bf79db",
        "hljs-green": "#a6e22e",
        "hljs-white": "#ffffff",
        "hljs-grey": "#75715e",
      },
    },

    listStyleType: {
      roman: "lower-roman",
      alpha: "lower-alpha",
    },
  },

  plugins: [],
};
