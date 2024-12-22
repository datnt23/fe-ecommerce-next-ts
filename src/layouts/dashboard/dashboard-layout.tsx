"use client"

import React from 'react'
import DashboardHeader from './header';
import NavVertical from './nav-vertical';
import { useSettingsContext } from '../../components/settings';
import { useBoolean } from '@/hooks/use-boolean';
import Main from './main';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
    const settings = useSettingsContext();

    const nav = useBoolean();

    const renderNavVertical = <NavVertical openNav={nav.value} onCloseNav={nav.onFalse} />;

    return (
        <>
            <div className="flex flex-row h-full w-full">
                {renderNavVertical}

                <Main>
                    <DashboardHeader onOpenNav={nav.onToggle} />
                    {children}
                </Main>
            </div>
        </>
    )
}
