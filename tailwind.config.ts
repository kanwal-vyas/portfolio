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
        serif: [
          "var(--font-newsreader)",
          "Charter",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
        sans: [
          "var(--font-plus-jakarta)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        // Legacy font aliases for backwards compatibility
        sora: ["var(--font-sora)", "serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        // Tropical Anomaly Defining Tokens
        paper: "var(--color-paper)",
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--text-secondary)",
        },
        guava: {
          DEFAULT: "var(--color-guava)",
          deep: "var(--color-guava-deep)",
          hover: "var(--accent-primary-hover)",
        },
        pistachio: "var(--color-pistachio)",
        mango: "var(--color-mango)",
        pool: "var(--color-pool)",
        lilac: "var(--color-lilac)",

        // Semantic Token System
        canvas: "var(--bg-canvas)",
        surface: {
          DEFAULT: "var(--bg-surface)",
          subtle: "var(--bg-surface-subtle)",
        },
        content: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--accent-primary)",
          hover: "var(--accent-primary-hover)",
          text: "var(--accent-primary-text)",
          2: "var(--accent-secondary)",
          pool: "var(--color-pool)",
          pistachio: "var(--color-pistachio)",
          lilac: "var(--color-lilac)",
        },
        rule: {
          subtle: "var(--border-subtle)",
          strong: "var(--border-strong)",
          control: "var(--border-control)",
        },
        // Legacy color aliases for existing component compatibility
        navy: {
          DEFAULT: "var(--bg-canvas)",
          2: "var(--bg-surface)",
          3: "var(--bg-surface-subtle)",
        },
        indigo: {
          deep: "var(--bg-surface-subtle)",
          violet: "var(--color-guava-deep)",
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
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
