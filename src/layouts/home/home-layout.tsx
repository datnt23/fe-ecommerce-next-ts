"use client"

import React from 'react'
import { paths } from '../../routes/paths';
import Header from './header'
import { usePathname } from 'next/navigation';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode
}

export default function HomeLayout({ children }: Props) {
    const pathname = usePathname();

    const isHome = pathname === paths.home.root;

    return (
        <div className='flex flex-col'>
            <Header />
            <div className={`flex-grow ${!isHome && "md:pt-20 xs:pt-16"}`}>
                {children}
            </div>
        </div>
    )
}
