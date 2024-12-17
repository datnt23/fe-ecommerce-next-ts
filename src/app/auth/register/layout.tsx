import React from 'react'
import GuestGuard from '../../../auth/guard/guest-guard';
import AuthLayout from '@/layouts/auth/auth-layout';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <GuestGuard>
            <AuthLayout title='Welcome to register page'>
                {children}
            </AuthLayout>
        </GuestGuard>
    )
}
