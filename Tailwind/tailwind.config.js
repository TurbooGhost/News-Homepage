/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include your HTML file
    "./src/**/*.{html,js}" // Existing line
    // Include any other relevant file paths
  ],
  theme: {
    extend: {
      colors: {
        blue: "#5e607a",
        red: "#f15d51",
        white: "#fffdfa",
        black: "#00001a",
        silver: "#c5c6ce",
        "custom-blue": "#5e607a",
        orange: "#e9aa52"
      },
      width: {
        "custom-md": "614.391px",
        "custom-lg": "819.188px",
        "custom-xl": "280px" // Width for 320px breakpoint
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"]
      }
    },
    screens: {
      md: "768px", // Default Tailwind breakpoint
      lg: "1024px", // Default Tailwind breakpoint
      xl: "320px" // Custom breakpoint
      // Add other breakpoints if needed
    }
  },
  plugins: []
};
