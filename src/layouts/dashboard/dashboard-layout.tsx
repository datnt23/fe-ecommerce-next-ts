import React from 'react'
import DashboardHeader from './header';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
    // const renderNavVertical = <NavVertical openNav={nav.value} onCloseNav={nav.onFalse} />;

    return (
        <>
            <DashboardHeader />
            {children}
        </>
    )
}
