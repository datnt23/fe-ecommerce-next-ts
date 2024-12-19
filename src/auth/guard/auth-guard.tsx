"use client";

import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../hooks/use-auth-context';
import { paths } from '../../routes/paths';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function AuthGuard({ children }: Props) {
    const router = useRouter()

    const { authenticated } = useAuthContext()

    const [checked, setChecked] = useState(false);

    const check = useCallback(() => {
        if (!authenticated) {
            const searchParams = new URLSearchParams({ returnTo: window.location.href }).toString()

            const loginPath = paths.auth.login

            const href = `${loginPath}?${searchParams}`

            router.replace(href);
        } else {
            setChecked(true)
        }
    }, [authenticated, router]);

    useEffect(() => {
        check();
    }, [check]);

    if (!checked) {
        return null
    }

    return (
        <>{children}</>
    )
}
