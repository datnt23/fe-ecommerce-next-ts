"use client";

import React from "react";
import { AnimatePresence, m } from "framer-motion";
import { useSettingsContext } from "../context";
import Iconify from "../../../components/iconify";
import { APP } from "@/config-global";

export default function SettingsDrawer() {
    const settings = useSettingsContext();

    const renderHead = (
        <div className="w-full py-4 pl-5 pr-2 flex items-center">
            <div className="typography_subtitle1 text-text-primary w-full" style={{ fontSize: "18px" }}>
                {APP.settings.name}
            </div>
            <button
                className="w-9 h-9 p-2 flex items-center justify-center outline-0 m-0 hover:bg-gray24per rounded-full"
                onClick={settings.onReset}
            >
                <Iconify
                    icon="solar:restart-bold"
                    className="w-full h-full text-text-secondary hover:text-text-primary"
                />
            </button>
            <button
                className="w-9 h-9 p-2 flex items-center justify-center outline-0 m-0 hover:bg-gray24per rounded-full"
                onClick={settings.onClose}
            >
                <Iconify
                    icon="mingcute:close-line"
                    className="w-full h-full text-text-secondary hover:text-text-primary"
                />
            </button>
        </div>
    )
    return (
        <AnimatePresence>
            {settings.open && (
                <div className="fixed inset-0 z-drawer">
                    <div className="fixed -z-1 inset-0 opacity-100" onClick={settings.onClose} />
                    <m.div
                        initial={{ x: "100%", opacity: 0.95 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`fixed z-drawer bg-white shadow-lg w-drawer-settings h-screen top-0 right-0 flex flex-col`}
                    >
                        {renderHead}

                        <div className="overflow-y-scroll no-scrollbar flex flex-col w-full h-full">

                        </div>
                    </m.div>
                </div>
            )}
        </AnimatePresence>
    );
}
