import Iconify from '@/components/iconify';
import { useSettingsContext } from '@/components/settings';
import { useResponsive } from '@/hooks/use-responsive';
import { colord } from 'colord';
import React from 'react'

export default function NavToggleButton() {
    const { themeLayout, onUpdate } = useSettingsContext();

    const downLg = useResponsive("up", "lg");

    const isVertical = themeLayout === "vertical"

    if (!downLg) {
        return null
    }

    return (
        <button
            className={`p-1 absolute z-layout-nav flex items-center justify-center hover:bg-gray24per rounded-full ${isVertical ? "left-navbar-vertical" : "w-navbar-mini"}`}
            style={{ borderRight: `dashed 1px ${colord("#919eab").alpha(0.2).toRgbString()}`, }}
            onClick={() => onUpdate('themeLayout', isVertical ? 'mini' : 'vertical')}>
            <Iconify
                size={16}
                icon={
                    themeLayout === 'vertical'
                        ? 'eva:arrow-ios-back-fill'
                        : 'eva:arrow-ios-forward-fill'
                }
            />
        </button>
    )
}
