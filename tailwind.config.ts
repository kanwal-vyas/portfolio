import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#060B18",
          2: "#0A1228",
          3: "#0F1A35",
        },
        indigo: {
          deep: "#1B2A5C",
          violet: "#2D3A7C",
        },
        accent: {
          DEFAULT: "#6C7FE0",
          2: "#A78BFA",
        },
      },
      animation: {
        "float": "float 7s ease-in-out infinite",
        "bg-pulse": "bgPulse 8s ease-in-out infinite alternate",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        bgPulse: {
          from: { opacity: "0.6" },
          to: { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
