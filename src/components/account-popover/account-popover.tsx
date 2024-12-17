import React, { useState } from 'react'
import { m } from 'framer-motion';
import { useAuthContext } from '@/auth/hooks/use-auth-context';
import { paths } from '@/routes/paths';
import { usePopover } from '../custom-popover';
import { CustomAvatar } from '../custom-avatar';

// ----------------------------------------------------------------------

const OPTIONS = [
    {
        label: "Home",
        linkTo: "/",
    },
    {
        label: "Profile",
        linkTo: paths.home.root,
    },
    {
        label: "Settings",
        linkTo: paths.home.root,
    },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
    const { user, logout } = useAuthContext();

    // const popover = usePopover()

    // const [openPopover, setOpenPopover] = useState(null);

    return (
        <m.button whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.04 }} onClick={logout}
            className='avatar w-10 h-10' >
            <div className="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2">
                <CustomAvatar name={user?.display_name} />
            </div>
        </m.button>
    )
}
