/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        background1: "rgba(255, 255, 255, 0.9)",
        background2: "#808080",
        background3: "#708090",
        background4: "#1e40af",
        shadow1:"0px 7px 14px rgba(0, 0, 0, 0.05),0px 0px 3px rgba(0, 0, 0, 0.8),0px 0px 2px rgba(0, 0, 0, 0.05)",
        shadow2: "0 0 0 1px #4a47b1",
        border1: "#b8b8b8",
        border2: "#d6d6d6",
        text1: "#3d3d3d",
        text2: "#4a47b1",
      },
    },
  },
  plugins: [],
};
