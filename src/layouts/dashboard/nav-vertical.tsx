import Iconify from "@/components/iconify";
import Logo from "@/components/logo";
import { NAV } from "@/config/global";
import { useResponsive } from "@/hooks/use-responsive";
import { colord } from "colord";
import { AnimatePresence, m } from "framer-motion";
import React from "react";
import NavToggleButton from "./nav-toggle-button";
import ScrollBar from "@/components/scroll-bar";

// ----------------------------------------------------------------------

type Props = {
    openNav: boolean;
    onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
    const downLg = useResponsive("up", "lg");

    return (
        <nav className={`fixed z-layout-nav h-full top-0 left-0 ${downLg && "w-navbar-vertical flex-shrink-0"}`}>
            <NavToggleButton />

            {downLg ? (
                <div
                    className="max-w-navbar-vertical w-full h-full flex flex-col"
                    style={{
                        borderRight: `dashed 1px ${colord("#919eab").alpha(0.2).toRgbString()}`,
                    }}
                >
                    <div className="pt-5 pb-2 pl-7">
                        <Logo />
                    </div>

                    <ScrollBar className="flex-1 min-w-0 min-h-0 flex-grow">
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                        <div className="h-ful w-full bg-red-500">asdfasdf</div>
                        <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                    </ScrollBar>
                </div>
            ) : (
                <AnimatePresence>
                    {openNav && (
                        <div className="fixed inset-0 z-drawer">
                            <div
                                className="fixed -z-1 inset-0 opacity-100"
                                onClick={onCloseNav}
                            />
                            <m.div
                                initial={{ x: "-100%", opacity: 0.95 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100%", opacity: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className={`fixed z-drawer bg-white shadow-lg w-drawer-navbar-vertical h-screen top-0 left-0 flex flex-col`}
                            >
                                <div className="pt-5 pb-2 pl-7">
                                    <Logo />
                                </div>

                                <ScrollBar>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-red-500">asdfasdf</div>
                                    <div className="h-ful w-full bg-blue-500">asdfasdf</div>
                                </ScrollBar>
                            </m.div>
                        </div>
                    )}
                </AnimatePresence>
            )}
        </nav>
    );
}
