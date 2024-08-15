/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./images/**/*.{jpg,png,jpeg}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/.{js,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-cream':"#f5f4f0"
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      }
    },
  },
  plugins: [],
}

