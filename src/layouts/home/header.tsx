"use client";

import { useEffect } from "react";
import { m, useAnimation } from "framer-motion";
import Logo from "../../components/logo";
import { HEADER } from "../../config-global";
import useOffSetTop from "../../hooks/use-off-set-top";
import { paths } from "../../routes/paths";
import { useResponsive } from "../../hooks/use-responsive";
import { useAuthContext } from "../../auth/hooks/use-auth-context";
import AccountPopover from "@/components/account-popover";

// ----------------------------------------------------------------------

const H_MOBILE = `${HEADER.H_MOBILE || 64}px`;
const H_DESKTOP = `${HEADER.H_DESKTOP || 80}px`;

const Header = () => {
    const { user, loading, authenticated, unauthenticated } = useAuthContext();

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
        <div className="navbar fixed bg-inherit p-0">
            <m.div
                className="w-screen flex justify-center items-center bg-white80 backdrop-blur-blur6"
                animate={controls}
                initial={{ height: initialHeight }}
            >
                <div className="w-nav-bar h-full flex items-center px-6 py-0">
                    <Logo />

                    <div className="flex-grow"></div>

                    {authenticated ? (
                        <div className="flex justify-end items-center gap-3">
                            <AccountPopover />
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
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
                        </div>
                    )}
                </div>
            </m.div>
        </div>
    );
};

export default Header;
