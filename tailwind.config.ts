import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#FF4401",
        orange: "#FD7240",
        yellow: "#EA942C",
        blue: "#347AE2",
        purple: "#6570F7",
        green: "#0ECC8D",
        "dark-1": "#151A1E",
        "dark-2": "#1E252B",
        "dark-3": "#262D34",
        "dark-4": "#2C353D",
        background: "#FFFFFF",
        "background-1": "#F7F7F7",
        "secondary-1": "#192351",
        "secondary-2": "#3F4354",
        "secondary-3": "#97989D",
        "secondary-4": "#858EAD",
        "secondary-5": "#C5D0E6",
        "secondary-6": "#F4F6F8",
      },
    },
  },
  plugins: [],
};
export default config;
