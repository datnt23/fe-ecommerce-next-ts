"use client";

import { forwardRef } from 'react';
import { Icon } from '@iconify/react';
import { } from '@nextui-org/react';
import { IconifyProps } from './types';
import styled from 'styled-components';

// ----------------------------------------------------------------------

interface Props {
    icon: IconifyProps;
    size?: number | string;
    className?: string;
    onClick?: () => void
}

const StyledIconWrapper = styled.div<{ $size: number | string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : $size)};
  height: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : $size)};
`;


const Iconify = forwardRef<HTMLDivElement, Props>(
    ({ icon, size = 20, className, onClick, ...props }, ref) => (
        <StyledIconWrapper ref={ref} $size={size} className={className} onClick={onClick} {...props}>
            <Icon icon={icon} width={size} height={size} />
        </StyledIconWrapper>
    )
);

export default Iconify;
