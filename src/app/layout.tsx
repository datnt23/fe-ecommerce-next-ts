import type { Metadata } from "next";
import "../styles/globals.css";
import { MotionLazy } from "../components/framer-motion";
import { AuthConsumer, AuthProvider } from "../auth/context";
import ToastProvider from "../components/react-toastify";
import ProgressBar from "../components/progress-bar";
import { SettingsDrawer, SettingsProvider } from "../components/settings";
import AccountDrawer from "../components/account-custom/drawer";
import ThemeProvider from "../theme/theme-provider";
import { APP } from "@/config/global";
import { primaryFont } from "@/config/font";

export const metadata: Metadata = {
  title: APP.root.title,
  description: APP.root.description,
  icons: { icon: APP.root.icon },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={primaryFont.className}>
        <AuthProvider>
          <ThemeProvider>
            {/* <SettingsProvider
              defaultSettings={{
                themeLayout: "vertical", // 'vertical' | 'horizontal' | 'mini'
              }}
            > */}
            <MotionLazy>
              <ToastProvider>
                <AccountDrawer />
                <SettingsDrawer />
                <ProgressBar />
                <AuthConsumer>{children}</AuthConsumer>
              </ToastProvider>
            </MotionLazy>
            {/* </SettingsProvider> */}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
