import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "white-custom": "#f0e7db",
        "white-hover-custom": "#e2d0b8",
        "white-border-custom": "#fffbd1",
      },
    },
  },
  plugins: [],
};
export default config;
