import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        z1999: "1999",
      },
      screens: {
        xs: "480px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      backdropBlur: {
        blur6: "6px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-disabled": "var(--text-disabled)",

        white: "var(--white)",
        white80: "var(--white80)",
        black: "var(--black)",

        contrastText: "var(--contrastText)",
        "primary-main": "var(--primary-main)",

        "info-main": "var(--info-main)",

        "success-main": "var(--success-main)",

        "warning-main": "var(--warning-main)",
        "warning-contrastText": "var(--warning-contrastText)",

        "error-lighter": "var(--error-lighter)",
        "error-main": "var(--error-main)",
        "error-darker": "var(--error-darker)",
      },
      height: {
        mobile: "64px",
        desktop: "80px",
      },
      width: {
        "nav-bar": "1200px",
      },
    },
  },
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        customTheme: {
          primary: "#2065d1",
          info: "#00b8d9",
          success: "#22c55e",
          warning: "#ffab00",
          error: "#ff5630",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [require("daisyui")],
} satisfies Config;
