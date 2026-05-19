import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#effaf7",
          100: "#d7f1e8",
          200: "#b1e3d3",
          300: "#7fceb6",
          400: "#4fb497",
          500: "#2f9a7e",
          600: "#1f7d66",
          700: "#176553",
          800: "#0f5045",
          900: "#0c4339",
          950: "#062722",
        },
        accent: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
        ink: {
          900: "#0b1320",
          800: "#1a2332",
          700: "#2d3b50",
          600: "#475569",
          500: "#64748b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(15, 80, 69, 0.15)",
        glow: "0 0 0 1px rgba(15, 80, 69, 0.08), 0 30px 60px -20px rgba(15, 80, 69, 0.25)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(15,80,69,0.08) 1px, transparent 0)",
        "brand-gradient":
          "linear-gradient(135deg, #0c4339 0%, #176553 45%, #2f9a7e 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        "slide-in-right": "slideInRight 0.8s cubic-bezier(.22,.61,.36,1) both",
        "slide-in-left": "slideInLeft 0.8s cubic-bezier(.22,.61,.36,1) both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3.2s linear infinite",
        marquee: "marquee 28s linear infinite",
        "gradient-x": "gradientX 7s ease infinite",
        "spin-slow": "spin 18s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
        progress: "progress 1.8s cubic-bezier(.22,.61,.36,1) both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.04)" },
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "var(--w, 100%)" },
        },
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
    },
  },
  plugins: [],
};

export default config;
