import { forwardRef } from 'react';
import { Icon } from '@iconify/react';
import { IconifyProps } from './types';

// ----------------------------------------------------------------------

interface Props {
    icon: IconifyProps;
    size?: number | string;
    className?: string;
}

const Iconify = forwardRef<HTMLDivElement, Props>(
    ({ icon, size = 20, className = "", ...other }, ref) => (
        <span
            ref={ref}
            className={`inline-block ${className}`}
            style={{ fontSize: size }}
            {...other}
        >
            <Icon icon={icon} />
        </span>
    )
);

export default Iconify;
