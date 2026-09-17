import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Holding
        void: "#08080F",
        starkio: {
          purple: "#6C63FF",
          violet: "#A78BFA",
          cloud: "#F5F5F7",
        },
        // Área Data
        data: {
          DEFAULT: "#2563EB",
          light: "#60A5FA",
          muted: "#BFDBFE",
          bg: "#0D1A2E",
        },
        // Área Software
        software: {
          DEFAULT: "#059669",
          light: "#34D399",
          muted: "#A7F3D0",
          bg: "#0A1F1A",
        },
        // Área AI
        ai: {
          DEFAULT: "#7C3AED",
          light: "#C084FC",
          muted: "#EDE9FE",
          bg: "#16091F",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "gradient-starkio": "linear-gradient(135deg, #08080F 0%, #1A1A2E 100%)",
        "gradient-data": "linear-gradient(135deg, #0D1A2E 0%, #1E3A5F 100%)",
        "gradient-software": "linear-gradient(135deg, #0A1F1A 0%, #0D3327 100%)",
        "gradient-ai": "linear-gradient(135deg, #16091F 0%, #2E1456 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
