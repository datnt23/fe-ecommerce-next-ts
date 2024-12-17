import React from "react";
import { useFormContext } from "react-hook-form";
import { m } from "framer-motion";

type LoadingButtonProps = {
    children: React.ReactNode;
    loading: boolean;
    type?: "button" | "submit" | "reset";
    color?: "primary" | "secondary" | "inherit";
    fullWidth?: boolean;
    size?: "small" | "medium" | "large";
    className?: string;
    onClick?: () => void;
};

export default function LoadingButton({
    children,
    loading,
    type = "button",
    color = "primary",
    fullWidth = false,
    size = "medium",
    className = "",
    onClick,
}: LoadingButtonProps) {
    const baseClasses = `btn ${fullWidth ? "w-full" : ""
        } btn-${color} ${className}`;

    const sizeClasses = {
        small: "btn-sm",
        medium: "btn-md",
        large: "btn-lg",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${sizeClasses[size]} flex items-center justify-center`}
            disabled={loading}
        >
            {loading ? (
                <m.div
                    className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        ease: "linear",
                    }}
                />
            ) : (
                children
            )}
        </button>
    );
}
