import React from 'react'
import AuthLayout from '../../../layouts/auth/auth-layout';
import { GuestGuard } from '../../../auth/guard';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <GuestGuard>
            <AuthLayout title='Welcome to login page'>
                {children}
            </AuthLayout>
        </GuestGuard>
    )
}
