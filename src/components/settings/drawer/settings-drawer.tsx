"use client";

import React from "react";
import { AnimatePresence, m } from "framer-motion";
import { useSettingsContext } from "../context";
import Iconify from "../../../components/iconify";
import { APP } from "@/config/global";
import ScrollBar from "@/components/scroll-bar";
import { useTheme } from "@nextui-org/use-theme";

export default function SettingsDrawer() {
    const { onReset, onClose, open, onUpdate } = useSettingsContext();

    const { theme, setTheme } = useTheme()

    const renderHead = (
        <div className="w-full py-4 pl-5 pr-2 flex items-center">
            <div className="typography_subtitle1 text-text-primary w-full" style={{ fontSize: "18px" }}>
                {APP.settings.name}
            </div>
            <button
                className="w-9 h-9 p-2 flex items-center justify-center outline-0 m-0 hover:bg-gray24per rounded-full"
                onClick={onReset}
            >
                <Iconify
                    icon="solar:restart-bold"
                    className="w-full h-full text-text-secondary hover:text-text-primary"
                />
            </button>
            <button
                className="w-9 h-9 p-2 flex items-center justify-center outline-0 m-0 hover:bg-gray24per rounded-full"
                onClick={onClose}
            >
                <Iconify
                    icon="mingcute:close-line"
                    className="w-full h-full text-text-secondary hover:text-text-primary"
                />
            </button>
        </div>
    )

    const renderMode = (
        <div>

        </div>
    )

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-drawer">
                    <div className="fixed -z-1 inset-0 opacity-100" onClick={onClose} />
                    <m.div
                        initial={{ x: "100%", opacity: 0.95 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`fixed z-drawer bg-white shadow-lg w-drawer-settings h-screen top-0 right-0 flex flex-col`}
                    >
                        {renderHead}

                        <ScrollBar>
                            <div>
                                The current theme is: {theme}
                                <button onClick={() => onUpdate('themeMode', 'light')}>Light Mode</button>
                                <button onClick={() => onUpdate('themeMode', 'dark')}>Dark Mode</button>
                            </div>
                        </ScrollBar>
                    </m.div>
                </div>
            )}
        </AnimatePresence>
    );
}
