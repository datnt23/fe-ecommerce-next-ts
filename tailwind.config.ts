import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
        z9999: "9999",
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
        // background: "var(--background)",
        // foreground: "var(--foreground)",

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
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#212B36",
          },
        },
        dark: {
          colors: {
            background: "#161C24",
            foreground: "#FFFFFF",
          },
        },
      },
    }),
  ],
} satisfies Config;
