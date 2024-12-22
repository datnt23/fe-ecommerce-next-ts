import React from 'react'
import { useResponsive } from '@/hooks/use-responsive';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function Main({ children }: Props) {
    const downLg = useResponsive("up", "lg");

    return (
        <div className={`flex flex-col flex-1 h-screen ${downLg && "pl-navbar-vertical"}`}>{children}</div>
    )
}
