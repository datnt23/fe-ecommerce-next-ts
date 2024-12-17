"use client";

import React from "react";
import Logo from "@/components/logo";
import { APP } from "@/config-global";
import { m } from "framer-motion";
import { bgGradient } from "@/theme/css";
import { colord } from "colord";

// ----------------------------------------------------------------------

type Props = {
    title?: string;
    image?: string;
    children: React.ReactNode;
};

export default function AuthLayout({ children, image, title }: Props) {
    return (
        <div className="flex flex-row min-h-screen">
            <Logo className="absolute m-10" />

            <div
                className="flex flex-col items-center justify-center gap-8 w-full max-w-[480px] px-6 py-28"
                style={{
                    ...bgGradient({
                        color: colord("#ffffff").alpha(0.88).toRgbString(),
                        imgUrl: APP.auth.layout.bgUrl,
                    }),
                }}
            >
                <m.div
                    className="typography_h3 w-full h-auto text-center"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {title || APP.auth.layout.title}
                </m.div>

                <m.img
                    className="w-full h-auto"
                    src={image || APP.auth.layout.imgUrl}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>

            <div className="flex flex-col items-center justify-center w-full px-6 py-28">
                <m.div
                    className="w-[420px] h-auto"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {children}
                </m.div>
            </div>
        </div>
    );
}
