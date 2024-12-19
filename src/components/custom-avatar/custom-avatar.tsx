import React, { forwardRef } from 'react'

// ----------------------------------------------------------------------

interface BadgeProps {
    color?: string;
    position?: string;
}

interface CustomAvatarProps {
    name?: string;
    color?: "default" | "primary" | "info" | "success" | "warning" | "error";
    image?: string;
    BadgeProps?: BadgeProps;
    children?: React.ReactNode;
    className?: string;
}

// ----------------------------------------------------------------------

const getCharAtName = (name: string) => name && name.charAt(0).toUpperCase();

const getColorByName = (name: string) => {
    if (["A", "N", "H", "L", "Q"].includes(getCharAtName(name))) return "primary";
    if (["F", "G", "T", "I", "J"].includes(getCharAtName(name))) return "info";
    if (["K", "D", "Y", "B", "O"].includes(getCharAtName(name))) return "success";
    if (["P", "E", "R", "S", "U"].includes(getCharAtName(name))) return "warning";
    if (["V", "W", "X", "M", "Z"].includes(getCharAtName(name))) return "error";
    return "default";
};

// ----------------------------------------------------------------------

const CustomAvatar = forwardRef<HTMLDivElement, CustomAvatarProps>(
    ({ name = "", color, image, BadgeProps, children, className, ...other }, ref) => {
        const charAtName = getCharAtName(name)

        const colorByName = getColorByName(name)

        const avatarColor = color || colorByName

        const baseClasses =
            "w-full h-full flex items-center justify-center rounded-full text-white font-medium";

        const colorClasses: Record<NonNullable<CustomAvatarProps["color"]>, string> = {
            default: "bg-gray-200 text-gray-800",
            primary: "bg-blue-500",
            info: "bg-teal-500",
            success: "bg-green-500",
            warning: "bg-yellow-500",
            error: "bg-red-500",
        };

        const avatarClasses = `${baseClasses} ${colorClasses[avatarColor!]
            } ${className || ""}`;

        const renderContent = image ? (
            <div ref={ref} className={`relative ${className || ""}`} {...other}>
                <img
                    // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    src={image}
                    alt={name || "Avatar"}
                    className="w-full h-full rounded-full object-cover"
                />
                {children}
            </div>
        ) : (
            <div ref={ref} className={avatarClasses} {...other}>
                {name && charAtName}
                {children}
            </div>
        );

        if (BadgeProps) {
            return (
                <div className="relative">
                    {renderContent}
                    <span
                        className={`absolute w-3 h-3 rounded-full ${BadgeProps.color || "bg-red-500"} ${BadgeProps.position || "bottom-1 right-1"
                            }`}
                    ></span>
                </div>
            );
        }

        return renderContent;
    }
)

export default CustomAvatar