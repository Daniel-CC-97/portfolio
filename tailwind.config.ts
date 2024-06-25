import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'deep-space-black': '#000000',
        'nebula-purple': '#4B0082',
        'galaxy-purple': '#3D1E6D',
        'cosmic-violet': '#7F00FF',
        'starlit-purple': '#9400D3',
        'mystic-magenta': '#8B008B',
        'black-hole-gray': '#2C2C2C',
        'dark-matter-blue': '#2A1B3D',
        'plum-purple': '#DDA0DD',
        'astral-black': '#1C1C1C',
        'eclipse-purple': '#301934',
        'shadow-black': '#1A1A1A',
        'twilight-purple': '#6A0DAD',
        'pulsar-purple': '#8A2BE2',
        'midnight-purple': '#2E0854',
        'lavender-gray': '#C4C3D0',
        'slate-purple': '#6A5ACD',
        'heather-gray': '#B6B6C2',
        'smoky-violet': '#736F6E',
        'dusk-gray': '#696969',
        'shadow-purple': '#88858C',
        'misty-lavender': '#96858F',
        'stormy-purple': '#4B4C59',
        violet: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
    },
  },
  plugins: [],
};

export default config;
