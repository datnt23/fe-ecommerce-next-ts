import React from "react";
import { m } from "framer-motion";
import { colord } from "colord";
import Logo from "../logo";
import { palette } from "../../theme/palette";

// ----------------------------------------------------------------------

type Props = {
    className?: string;
};
export default function SplashScreen({ className = "", ...other }: Props) {
    return (
        <div
            className={`right-0 w-full bottom-0 h-full z-z9999 flex fixed items-center justify-center bg-inherit ${className}`}
            {...other}
        >
            <>
                <m.div
                    animate={{
                        scale: [1, 0.9, 0.9, 1, 1],
                        opacity: [1, 0.48, 0.48, 1, 1],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeatDelay: 1,
                        repeat: Infinity,
                    }}
                >
                    <Logo disabledLink className="w-full h-full" />
                </m.div>

                <m.div
                    className="w-[100px] h-[100px] absolute"
                    style={{
                        border: `solid 3px ${colord(palette("light").primary.dark)
                            .alpha(0.24)
                            .toRgbString()}`,
                    }}
                    animate={{
                        scale: [1.6, 1, 1, 1.6, 1.6],
                        rotate: [270, 0, 0, 270, 270],
                        opacity: [0.25, 1, 1, 1, 0.25],
                        borderRadius: ["25%", "25%", "50%", "50%", "25%"],
                    }}
                    transition={{ ease: "linear", duration: 3.2, repeat: Infinity }}
                />

                <m.div
                    className="w-[120px] h-[120px] absolute"
                    style={{
                        border: `solid 8px ${colord(palette("light").primary.dark)
                            .alpha(0.24)
                            .toRgbString()}`,
                    }}
                    animate={{
                        scale: [1, 1.2, 1.2, 1, 1],
                        rotate: [0, 270, 270, 0, 0],
                        opacity: [1, 0.25, 0.25, 0.25, 1],
                        borderRadius: ["25%", "25%", "50%", "50%", "25%"],
                    }}
                    transition={{
                        ease: "linear",
                        duration: 3.2,
                        repeat: Infinity,
                    }}
                />
            </>
        </div>
    );
}
