"use client";

import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../hooks/use-auth-context";
import { paths } from "../../routes/paths";

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function GuestGuard({ children }: Props) {
    const router = useRouter();

    const { authenticated } = useAuthContext();

    const check = useCallback(() => {
        if (authenticated) {
            router.replace(paths.home.root);
        }
    }, [authenticated, router]);

    useEffect(() => {
        check();
    }, [check]);

    return <>{children}</>;
}
