import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Designer portfolio colors
        creative: {
          indigo: "#6366F1",
          violet: "#8B5CF6",
          fuchsia: "#D946EF",
          rose: "#F43F5E",
          emerald: "#10B981",
          amber: "#F59E0B",
          cyan: "#06B6D4",
          slate: "#64748B",
        },
        // Bold yellow, red, black palette
        bold: {
          yellow: "#FBBF24", // Bright yellow
          "yellow-light": "#FDE047", // Light yellow
          "yellow-dark": "#D97706", // Dark yellow/orange
          red: "#DC2626", // Bold red
          "red-light": "#F87171", // Light red
          "red-dark": "#991B1B", // Dark red
          black: "#000000", // Pure black
          "black-light": "#1F2937", // Light black/dark gray
          "black-dark": "#111827", // Very dark black
        },
      },
      backgroundImage: {
        "gradient-bold":
          "linear-gradient(135deg, #FBBF24 0%, #DC2626 50%, #000000 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #000000 0%, #1F2937 50%, #111827 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(220,38,38,0.1) 50%, rgba(0,0,0,0.1) 100%)",
        "gradient-accent": "linear-gradient(90deg, #FBBF24 0%, #DC2626 100%)",
        "gradient-reverse": "linear-gradient(135deg, #DC2626 0%, #FBBF24 100%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(155,135,245,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(155,135,245,0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
