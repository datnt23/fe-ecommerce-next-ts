"use client";

import React, { useEffect } from "react";
import { useAnimation, m } from "framer-motion";
import useOffSetTop from "../../hooks/use-off-set-top";
import { useResponsive } from "../../hooks/use-responsive";
import Logo from "../../components/logo";
import AccountPopover from "../../components/account-custom";
import { SettingsButton } from "../../components/settings";
import Iconify from "../../components/iconify";
import { HEADER, NAV } from "@/config/layout";


// ----------------------------------------------------------------------

const H_MOBILE = "var(--height-mobile-header)";
const H_DESKTOP = "var(--height-desktop-header)";

type Props = {
    onOpenNav?: VoidFunction;
};

export default function DashboardHeader({ onOpenNav }: Props) {
    const controls = useAnimation();

    const downLg = useResponsive("down", "lg");

    const offSetTop = useOffSetTop(HEADER.H_DESKTOP);

    const heightNav = downLg ? H_MOBILE : H_DESKTOP;

    const initialHeight = heightNav;

    useEffect(() => {
        controls.start({
            height: offSetTop ? H_MOBILE : heightNav,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        });
    }, [offSetTop, controls]);

    return (
        <div className="fixed top-0 left-auto right-0 bg-inherit box-border z-layout-header flex-shrink-0 flex flex-col shadow-none"
            style={{
                width: "100%",
                ...(!downLg && { width: `calc(100% - ${NAV.W_VERTICAL}px)` })
            }}>
            <m.div
                className="flex justify-center items-center bg-white80 backdrop-blur-blur6"
                animate={controls}
                initial={{ height: initialHeight }}
            >
                <div className="w-full h-full flex items-center px-10 py-0">
                    {/* {downLg && <Logo />} */}

                    {downLg && (
                        <m.button
                            whileTap={{ scale: 0.97 }}
                            whileHover={{ scale: 1.05 }}
                            aria-label="settings"
                            className="flex items-center justify-center outline-0 w-10 h-10 hover:bg-gray24per rounded-full"
                            onClick={onOpenNav}
                        >
                            <Iconify icon="gg:menu-right-alt" size={24} />
                        </m.button>
                    )}

                    <div className="flex-grow"></div>

                    <div className="flex justify-end items-center gap-4">
                        <SettingsButton />

                        <AccountPopover />
                    </div>
                </div>
            </m.div>
        </div>
    );
}
