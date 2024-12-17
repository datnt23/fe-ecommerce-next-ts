import { forwardRef } from "react";

// ----------------------------------------------------------------------

export interface SvgIconProps extends React.HTMLAttributes<HTMLSpanElement> {
    src: string;
}

const SvgIcon = forwardRef<HTMLSpanElement, SvgIconProps>(({ src, className, ...other }, ref) => (
    <span
        ref={ref}
        className={`inline-block w-6 h-6 bg-current ${className}`}
        style={{
            mask: `url(${src}) no-repeat center / contain`,
            WebkitMask: `url(${src}) no-repeat center / contain`,
        }}
        {...other}
    />
));

export default SvgIcon;