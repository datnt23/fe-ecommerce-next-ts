"use client";

import React, { useEffect } from 'react'
import { useAnimation, m } from 'framer-motion';
import useOffSetTop from '../../hooks/use-off-set-top';
import { HEADER, NAV } from '../../config-global';
import { useResponsive } from '../../hooks/use-responsive';
import Logo from '../../components/logo';
import AccountPopover from '../../components/account-custom';
import { SettingsButton } from '../../components/settings';

// ----------------------------------------------------------------------

const H_MOBILE = `${HEADER.H_MOBILE || 64}px`;
const H_DESKTOP = `${HEADER.H_DESKTOP || 80}px`;

export default function DashboardHeader() {
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
        <div className={`sticky top-0 left-auto right-0 bg-inherit box-border z-layout-header flex-shrink-0 flex flex-col shadow-none`}
            style={{ width: `calc(100%-${NAV.W_VERTICAL}px)` }}>
            <m.div
                className="flex justify-center items-center bg-white80 backdrop-blur-blur6"
                animate={controls}
                initial={{ height: initialHeight }}
            >
                <div className="w-full h-full flex items-center px-10 py-0">
                    <Logo />

                    <div className="flex-grow"></div>

                    <div className="flex justify-end items-center gap-4">
                        <SettingsButton />

                        <AccountPopover />
                    </div>

                </div>
            </m.div>
        </div>
    )
}
