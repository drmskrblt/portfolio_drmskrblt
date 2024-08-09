/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackground: "#1f2833",
        customBackground2: "#25303d",
        customDark: "#0B0C10",
        customDarkLight: "#1f2833",
        customGray: "#c5c6c7",
        customLightTurqoise: "#66fcf1",
        customDarkTurqoise: "#45a29e",
      },
    },
  },
  plugins: [],
};
