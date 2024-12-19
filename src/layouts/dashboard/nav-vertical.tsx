import { NAV } from "@/config-global";
import { useResponsive } from "@/hooks/use-responsive";
import React from "react";

// ----------------------------------------------------------------------

type Props = {
    openNav: boolean;
    onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
    const downLg = useResponsive("down", "lg");

    return <nav className={` ${downLg && "w-nav-vertical flex-shrink-0"}`}>

    </nav>;
}
