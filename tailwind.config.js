/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}","./components/login/Login.jsx"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
}

