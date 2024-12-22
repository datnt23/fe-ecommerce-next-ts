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
        1: "1",
        "app-bar": "var(--zIndex-app-bar)",
        "layout-header": "var(--zIndex-layout-header)",
        drawer: "var(--zIndex-drawer)",
        "layout-nav": "var(--zIndex-layout-nav)",
        modal: "var(--zIndex-modal)",
        snackbar: "var(--zIndex-snackbar)",
        z1999: "1999",
        z9990: "9990",
      },
      borderRadius: {
        "50%": "50%",
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
        "error-light": "var(--error-light)",
        "error-main": "var(--error-main)",
        "error-dark": "var(--error-dark)",
        "error-darker": "var(--error-darker)",

        gray100: "var(--gray100)",
        gray200: "var(--gray200)",
        gray300: "var(--gray300)",
        gray400: "var(--gray400)",
        gray500: "var(--gray500)",
        gray600: "var(--gray600)",
        gray700: "var(--gray700)",
        gray800: "var(--gray800)",
        gray900: "var(--gray900)",

        gray24per: "rgba(145, 158, 171, 0.24)",
      },
      spacing: {
        mobile: "var(--height-mobile-header)",
        desktop: "var(--height-desktop-header)",
        "navbar-dashboard": "var(--width-navbar-dashboard)",
        "navbar-mini": "var(--width-navbar-mini)",
        "navbar-vertical": "var(--width-navbar-vertical)",
        "navbar-bar": "var(--width-navbar-bar)",
        "drawer-account": "var(--width-drawer-account)",
        "drawer-settings": "var(--width-drawer-settings)",
        "drawer-navbar-vertical": "var(--width-drawer-navbar-vertical)",
      },
      boxShadow: {
        z8: "0 8px 16px 0 rgba(145, 158, 171, 0.16)",
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
