"use client";

import { useEffect } from "react";
import { m, useAnimation } from "framer-motion";
import Logo from "../../components/logo";
import useOffSetTop from "../../hooks/use-off-set-top";
import { paths } from "../../routes/paths";
import { useResponsive } from "../../hooks/use-responsive";
import { useAuthContext } from "../../auth/hooks/use-auth-context";
import AccountPopover from "../../components/account-custom";
import { navConfig } from "./nav-config";
import { SettingsButton } from "../../components/settings";
import { HEADER } from "@/config/layout";
import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import clsx from "clsx";
import { APP } from "@/config/global";

// ----------------------------------------------------------------------

// const H_MOBILE = "var(--height-mobile-header)";
// const H_DESKTOP = "var(--height-desktop-header)";

const HomeHeader = () => {
    const { authenticated } = useAuthContext();

    // const offSetTop = useOffSetTop(HEADER.H_DESKTOP);

    // const downMd = useResponsive("down", "md");

    // const controls = useAnimation();

    // const heightNav = downMd ? H_MOBILE : H_DESKTOP;

    // const initialHeight = heightNav;

    // useEffect(() => {
    //     controls.start({
    //         height: offSetTop ? H_MOBILE : heightNav,
    //         transition: {
    //             duration: 0.3,
    //             ease: "easeInOut",
    //         },
    //     });
    // }, [offSetTop, controls]);

    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <Logo />
            </NavbarBrand>
            <NavbarContent className="gap-6" justify="end">
                {navConfig.map((nav, index) => (
                    <NavbarItem key={index} >
                        <Link href={nav.path} className={clsx("typography_subtitle2 text-text-primary")}>
                            {nav.title}
                        </Link>
                    </NavbarItem>
                ))}
                {authenticated ? (<AccountPopover />) : (
                    <NavbarItem key="login" className="hidden lg:flex gap-4">
                        <Button color="primary" variant="solid" size="sm">
                            <Link href={paths.auth.login} className=" text-white typography_button_medium">{APP.login.name}</Link>
                        </Button>
                        <Button color="primary" variant="bordered" size="sm">
                            <Link href={paths.auth.register} className="typography_button_medium">{APP.register.name}</Link>
                        </Button>
                    </NavbarItem >
                )}
            </NavbarContent >
        </Navbar >
    );
};
// <div className="sticky top-0 right-0 left-auto z-layout-header bg-inherit box-border flex-shrink-0 flex flex-col shadow-none w-screen">
//     <m.div
//         className="w-screen flex justify-center items-center bg-white80 backdrop-blur-blur6"
//         animate={controls}
//         initial={{ height: initialHeight }}
//     >
//         <div className="w-navbar-bar h-full flex items-center px-6 py-0">
//             <Logo />

//             <div className="flex-grow"></div>

//             <div className="menu menu-horizontal flex flex-row items-center gap-6 mr-6">
//                 {navConfig.map((link, index) => (
//                     <a href={link.path} key={index}>
//                         {link.title}
//                     </a>
//                 ))}
//             </div>

//             <div className="flex justify-end items-center gap-3">
//                 <SettingsButton />

//                 {authenticated ? (
//                     <AccountPopover />
//                 ) : (
//                     <>
//                         <a
//                             className="btn text-white btn-primary btn-sm"
//                             href={paths.auth.login}
//                         >
//                             Login
//                         </a>
//                         <a
//                             className="btn btn-outline text-primary btn-primary btn-sm"
//                             href={paths.auth.register}
//                         >
//                             Register
//                         </a>
//                     </>
//                 )}
//             </div>
//         </div>
//     </m.div>
//     {offSetTop && <Shadow />}
// </div>

export default HomeHeader;

// type ShadowProps = {
//     className?: string;
// };

// function Shadow({ className = "", ...other }: ShadowProps) {
//     return (
//         <div
//             className={`left-0 right-0 bottom-0 h-6 z-[-1] m-auto rounded-50% absolute shadow-z8 w-[calc(100%-48px)] ${className}`}
//             {...other}
//         />
//     );
// }
