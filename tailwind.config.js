/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00bff0",

          secondary: "#d57e00",

          accent: "#00ed00",

          neutral: "#221a22",

          "base-100": "#2c2a35",

          info: "#00d6ff",

          success: "#00e89b",

          warning: "#f76200",

          error: "#ff98a0",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
