"use client";

import { forwardRef } from 'react'
import { paths } from '@/routes/paths';
import Link from 'next/link';

export interface LogoProps {
    disabledLink?: boolean
    className?: string
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
    ({ disabledLink = false, className = '', ...other }, ref) => {
        const logo = (<div
            ref={ref}
            className={`inline-flex font-bold text-2xl bg-clip-text text-transparent ${className}`}
            style={{
                background: "linear-gradient(to right, var(--primary-light), var(--primary-main))",
                WebkitBackgroundClip: "text"
            }}
            {...other}
        >
            D-Shop
        </div>)

        if (disabledLink) {
            return logo
        }

        return (
            <Link href={paths.home.root} className='contents'>
                {logo}
            </Link>
        )
    }
)

export default Logo