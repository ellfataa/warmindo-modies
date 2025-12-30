import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        warmindo: {
          green: "#00a339",
          red: "#e41526",
          yellow: "#ffde00",
          orange: "#f39000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
