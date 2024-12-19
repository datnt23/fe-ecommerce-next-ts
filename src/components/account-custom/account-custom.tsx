"use client";

import { m } from "framer-motion";
import { useAuthContext } from "../../auth/hooks/use-auth-context";
import { CustomAvatar } from "../custom-avatar";

// ----------------------------------------------------------------------

export default function AccountCustom() {
    const { user, onToggle } = useAuthContext();

    return (
        <>
            <m.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.04 }}
                onClick={onToggle}
                className="avatar w-8 h-8"
            >
                <div className="ring-primary ring-offset-base-100 w-full h-full rounded-full ring ring-offset-2">
                    <CustomAvatar name={user?.display_name} />
                </div>
            </m.button>
        </>
    );
}
