import React from 'react'
import { m } from 'framer-motion';
import { useSettingsContext } from './context';
import Iconify from '../iconify';

export default function SettingsButton() {
    const settings = useSettingsContext();

    return (
        <m.div
            animate={{
                rotate: [0, settings.open ? 0 : 360],
            }}
            transition={{
                duration: 12,
                ease: 'linear',
                repeat: Infinity,
            }}>
            <m.button
                whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.05 }} aria-label="settings" className='flex items-center justify-center outline-0 w-10 h-10 hover:bg-gray24per rounded-full' onClick={settings.onToggle}>
                <Iconify icon="solar:settings-bold-duotone" size={24} />
            </m.button>
        </m.div>
    )
}
