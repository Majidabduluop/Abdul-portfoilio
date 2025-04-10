module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Paths to your files
  ],
  theme: {
    extend: {
      screens: {
        xs: "576px", // 36em in px
        sm: "768px", // 48em in px
        md: "992px", // 62em in px
        lg: "1200px", // 75em in px
        xl: "1400px", // 88em in px
      },
    },
  },
  plugins: [],
};
