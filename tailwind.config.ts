import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xs': '375px',
        'xs': '480px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "pfBlue": "#00033A",
        "pfLightBlue": "#262A7C",
        "pfVeryLightBlue": "#898EEB",
        "pfYellow": "#FFDB4D",
        "pfDark": "#00033A",
        "pfGrey": "#6b6c7d",
        "pfLightGrey": "#c6c7dd"
      }
    },
  },
  plugins: [],
};
export default config;
