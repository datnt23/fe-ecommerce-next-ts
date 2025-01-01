import { Noto_Sans } from "next/font/google";

// ----------------------------------------------------------------------

export const primaryFont = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "vietnamese"],
  fallback: ["Arial", "Helvetica", "sans-serif"],
  variable: "--font-noto-sans",
});
