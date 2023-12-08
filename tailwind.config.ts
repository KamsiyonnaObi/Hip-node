import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4401",
        yellow: "#EA942C",
        blue: "#347AE2",
        purple: "#6570F7",
        green: "#0ECC8D",
        dark1: "#151A1E",
        dark2: "#1E252B",
        dark3: "#262D34",
        dark4: "#2C353D",
        background: "#FFFFFF",
        background2: "#F7F7F7",
        secondary1: "#192351",
        secondary2: "#3F4354",
        secondary3: "#97989D",
        secondary4: "#858EAD",
        secondary5: "#C5D0E6",
        secondary6: "#F4F6F8",
        redblack40: "#661B00",
        red90: "#FF571A",
        red80: "#FF6934",
        red60: "#FF8F67",
        red10: "#FFECE6",
        red: "#FF4401",
        yellow90: "#EC9F41",
        yellow80: "#EEA956",
        yellow30: "#F9DFC0",
        yellow10: "#FDF4EA",
        blueblack10: "#0A182D",
        blueblack80: "#2A62B5",
        blue90: "#4887E5",
        blue80: "#5D95E8",
        blue20: "#D6E4F9",
        blue10: "#EBF2FC",
        purpleblack10: "#141631",
        purple80: "#848DF9",
        purple20: "#E0E2FD",
        purple10: "#F0F1FE",
        green80: "#3ED6A4",
        green10: "#E7FAF4",
        success500: "#12B76A",
        // Divine Domain Classes
        defaultText: "rgb(var(--default-text) / <alpha-value>)",
        bkg: {
          DEFAULT: "rgb(var(--color-bkg) / <alpha-value>)", // Dark 2 && Background 2
          2: "rgb(var(--color-bkg2) / <alpha-value>)", // Dark 3 && Background
          3: "rgb(var(--color-bkg3) / <alpha-value>)", // Dark 4 && Secondary 6
          tag: "rgb(var(--color-tagBkg) / <alpha-value>)", // Dark 4 && Secondary 4
        },
        contents: {
          DEFAULT: "rgb(var(--color-contents) / <alpha-value>)", // Background 2
          2: "rgb(var(--color-contents2) / <alpha-value>)", // Secondary 6
          3: "rgb(var(--color-contents3) / <alpha-value>)", // Background
          tag: "rgb(var(--color-tagContents) / <alpha-value>)", // Secondary 4
        },
        "d-red": {
          50: "#FFECE6",
          100: "#FF8F67",
          200: "#FF6934",
          300: "#FF571A",
          DEFAULT: "#FF4401",
          500: "#661B00",
        },
        "d-yellow": {
          100: "#FDF4EA",
          200: "#F9DFC0",
          300: "#EEA956",
          DEFAULT: "#EC9F41",
          500: "#EA942C",
        },
        "d-blue": {
          50: "#EBF2FC",
          100: "#D6E4F9",
          200: "#5D95E8",
          300: "#4887E5",
          DEFAULT: "#347AE2",
          500: "#2A62B5",
          900: "#0A182D",
        },
        "d-purple": {
          100: "#F0F1FE",
          200: "#E0E2FD",
          300: "#848DF9",
          DEFAULT: "#6570F7",
          900: "#141631",
        },
        "d-green": {
          100: "#E7FAF4",
          300: "#3ED6A4",
          DEFAULT: "#0ECC8D",
        },
        white: {
          DEFAULT: "#FFFFFF",
          500: "#f7f7f7",
          600: "#f4f6f8",
        },
        "d-dark": {
          900: "#151A1E",
          800: "#1E252B",
          600: "#2C353D",
          700: "#262D34",
        },
        formInput: "rgb(var(--formInput) / <alpha-value>)", // White-600 Dark-800
        mobileInput: "rgb(var(--mobileInput) / <alpha-value>)",
        interviewText: "var(--interviewText)",
        // ShadCN
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
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
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      boxShadow: {
        "meetup-card": "0px 6px 8px 2px #3582E01F",
      },
      screens: {
        lg: "1440px",
        md2: "1208px",
        md: "1100px",
        sm: "768px",
      },
    },
  },
  plugins: [],
};
export default config;
