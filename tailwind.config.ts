import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#050711",
        obsidian: "#090b18",
        glass: "rgba(255,255,255,0.1)",
        aura: "#7c3aed",
        cyan: "#22d3ee",
        fuchsia: "#ec4899",
        pearl: "#f8fbff",
        mist: "#aab7d4"
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "Syne", "sans-serif"],
        serif: ["var(--font-syne)", "Syne", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "Space Grotesk", "monospace"],
        body: ["var(--font-space-grotesk)", "Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(2, 8, 23, 0.36)",
        glow: "0 0 48px rgba(34, 211, 238, 0.24)"
      },
      backgroundImage: {
        "aura-mesh":
          "radial-gradient(circle at 18% 18%, rgba(34,211,238,0.28), transparent 22%), radial-gradient(circle at 78% 8%, rgba(236,72,153,0.22), transparent 18%), radial-gradient(circle at 62% 68%, rgba(124,58,237,0.24), transparent 22%), linear-gradient(135deg, #050711 0%, #10152f 46%, #050711 100%)"
      }
    }
  },
  plugins: []
};

export default config;
