"use client";

import { useEffect } from "react";
import { m, useAnimation } from "framer-motion";
import Logo from "../../components/logo";
import { HEADER } from "../../config-global";
import useOffSetTop from "../../hooks/use-off-set-top";
import { paths } from "../../routes/paths";
import { useResponsive } from "../../hooks/use-responsive";
import { useAuthContext } from "../../auth/hooks/use-auth-context";
import AccountPopover from "../../components/account-custom";
import { navConfig } from "./config-navigation";
import { SettingsButton } from "../../components/settings";

// ----------------------------------------------------------------------

const H_MOBILE = "var(--height-mobile-header)";
const H_DESKTOP = "var(--height-desktop-header)";

const HomeHeader = () => {
    const { authenticated } = useAuthContext();

    const offSetTop = useOffSetTop(HEADER.H_DESKTOP);

    const downMd = useResponsive("down", "md");

    const controls = useAnimation();

    const heightNav = downMd ? H_MOBILE : H_DESKTOP;

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
        <div className="sticky top-0 right-0 left-auto z-layout-header bg-inherit box-border flex-shrink-0 flex flex-col shadow-none w-screen">
            <m.div
                className="w-screen flex justify-center items-center bg-white80 backdrop-blur-blur6"
                animate={controls}
                initial={{ height: initialHeight }}
            >
                <div className="w-navbar-bar h-full flex items-center px-6 py-0">
                    <Logo />

                    <div className="flex-grow"></div>

                    <div className="menu menu-horizontal flex flex-row items-center gap-6 mr-6">
                        {navConfig.map((link, index) => (
                            <a href={link.path} key={index}>
                                {link.title}
                            </a>
                        ))}
                    </div>

                    <div className="flex justify-end items-center gap-3">
                        <SettingsButton />

                        {authenticated ? (
                            <AccountPopover />
                        ) : (
                            <>
                                <a
                                    className="btn text-white btn-primary btn-sm"
                                    href={paths.auth.login}
                                >
                                    Login
                                </a>
                                <a
                                    className="btn btn-outline text-primary btn-primary btn-sm"
                                    href={paths.auth.register}
                                >
                                    Register
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </m.div>
            {offSetTop && <Shadow />}
        </div>
    );
};

export default HomeHeader;

type ShadowProps = {
    className?: string;
};

function Shadow({ className = "", ...other }: ShadowProps) {
    return (
        <div
            className={`left-0 right-0 bottom-0 h-6 z-[-1] m-auto rounded-50% absolute shadow-z8 w-[calc(100%-48px)] ${className}`}
            {...other}
        />
    );
}
