import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

export default function ScrollBar({ children, className = '' }: Props) {
    return (
        <div className={`overflow-y-scroll no-scrollbar flex flex-col w-full h-full ${className}`}>
            {children}
        </div>

    )
}