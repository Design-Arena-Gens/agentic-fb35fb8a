import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f6ff",
          100: "#e6edff",
          200: "#c4d4ff",
          300: "#9fbbff",
          400: "#5f8bff",
          500: "#3366ff",
          600: "#1f4ee6",
          700: "#163db4",
          800: "#102b80",
          900: "#091b52"
        }
      },
      fontFamily: {
        sans: ["'Inter'", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "grid-light":
          "radial-gradient(circle at 1px 1px, rgba(51, 102, 255, 0.12) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
