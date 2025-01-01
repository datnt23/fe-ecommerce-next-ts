"use client";

import { strengthColor, strengthIndicator } from "@/utils/password-strength";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type VariantInput = "flat" | "bordered" | "underlined" | "faded";

export type PlacementInput = "inside" | "outside" | "outside-left";

export type SizeInput = "sm" | "md" | "lg";

export type TypeInput =
    | "text"
    | "email"
    | "url"
    | "password"
    | "tel"
    | "search"
    | "number";

export type RadiusInput = "full" | "lg" | "md" | "sm" | "none";

type Props = {
    name: string;
    label?: string;
    placeholder?: string;
    helperText?: string;
    type?: TypeInput;
    size?: SizeInput;
    variant?: VariantInput;
    placement?: PlacementInput;
    radius?: RadiusInput;
    isClearable?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    isShowStrength?: boolean;
};

const RHFInput = ({
    name,
    label,
    placeholder,
    helperText,
    type = 'text',
    size,
    radius,
    variant,
    placement,
    isClearable = false,
    isRequired = false,
    isReadOnly = false,
    isDisabled = false,
    isShowStrength = false,
    startIcon,
    endIcon,
}: Props) => {
    const { control } = useFormContext();

    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState<{ label: string; color: string } | null>(null);

    const isPassword = type === 'password'

    const handleChange = (value: string, onChange: (value: string) => void) => {
        onChange(value)
        if (isPassword) {
            const temp: number = strengthIndicator(value);
            setStrength(temp);
            setLevel(strengthColor(temp));
        }
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { name, value, onChange, onBlur, ref }, fieldState: { error } }) => (
                <Input
                    ref={ref}
                    name={name}
                    fullWidth
                    isClearable={isClearable}
                    isRequired={isRequired}
                    isReadOnly={isReadOnly}
                    isDisabled={isDisabled}
                    label={label}
                    type={type}
                    size={size}
                    variant={variant}
                    labelPlacement={placement}
                    placeholder={placeholder}
                    radius={radius}
                    value={type === "number" && value === 0 ? "" : value}
                    onChange={(event) => handleChange(event.target.value, onChange)}
                    onBlur={onBlur}
                    isInvalid={error && true}
                    errorMessage={error ? error?.message : helperText}
                    className={`w-full`}
                    onClear={() => isClearable && onChange("")}
                    startContent={startIcon}
                    endContent={endIcon}
                    description={
                        isShowStrength && (strength > 0) && level && (
                            <div className="mt-2 flex items-center gap-2">
                                <span className="text-xs font-medium text-gray-600">
                                    {level.label}
                                </span>
                                <div
                                    className="h-2 rounded-md"
                                    style={{ backgroundColor: level.color, width: `${strength * 20}%` }}
                                ></div>
                            </div>
                        )
                    }
                />
            )}
        />
    );
};

export default RHFInput;
