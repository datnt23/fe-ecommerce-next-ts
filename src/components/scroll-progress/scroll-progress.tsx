import { m, useSpring, MotionValue } from "framer-motion";

// ----------------------------------------------------------------------

interface ScrollProgressProps {
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error";
    size?: number;
    scrollYProgress: MotionValue<number>;
    className?: string;
}

export default function ScrollProgress({
    color = "primary",
    size = 3,
    scrollYProgress,
    className = "",
    ...other
}: ScrollProgressProps) {
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const colorClasses: Record<string, string> = {
        primary: "bg-primary",
        secondary: "bg-secondary",
        info: "bg-blue-500",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        error: "bg-red-500",
    };

    return (
        <m.div
            className={`fixed top-0 left-0 right-0 z-[1999] origin-left transform ${colorClasses[color]} ${className}`}
            style={{ scaleX, height: `${size}px` }}
            {...other}
        />
    );
}
