import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { strengthColor, strengthIndicator } from "@/utils/password-strength";

// ----------------------------------------------------------------------

type Props = {
    name: string;
    label?: string;
    placeholder?: string;
    helperText?: string;
    type?: string;
    isShow?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onEndIconClick?: () => void;
};

export default function RHFTextField({
    name,
    label,
    helperText,
    type = "text",
    placeholder = "",
    startIcon,
    endIcon,
    onEndIconClick,
    isShow = false,
    ...other
}: Props) {
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
            render={({ field, fieldState: { error } }) => (
                <div className="form-control w-full">
                    {label && (
                        <label className="label typography_body1 text-text-secondary">
                            {label}
                        </label>
                    )}
                    <div className="relative">
                        {startIcon && (
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                                {startIcon}
                            </div>
                        )}
                        <input
                            {...field}
                            type={type}
                            placeholder={placeholder}
                            className={`input w-full placeholder:text-text-disabled border border-text-secondary focus:border-2 focus:outline-0 focus:border-primary ${startIcon ? "pl-12" : ""} ${endIcon ? "pr-12" : ""} ${error ? "input-error" : ""}`}
                            value={type === "number" && field.value === 0 ? "" : field.value}
                            onChange={(event) => handleChange(event.target.value, field.onChange)}
                            {...other}
                        />
                        {endIcon && (
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary">
                                {onEndIconClick ? (
                                    <button
                                        type="button"
                                        onClick={onEndIconClick}
                                        className="hover:text-text-primary flex flex-col items-center justify-center"
                                    >
                                        {endIcon}
                                    </button>
                                ) : (
                                    <span>{endIcon}</span>
                                )}
                            </div>
                        )}
                    </div>

                    {error && (
                        <label className="label">
                            <span className="label-text-alt text-error">
                                {error ? error.message : helperText}
                            </span>
                        </label>
                    )}

                    {isShow && strength > 0 && level && (
                        <div className="mt-2 flex items-center gap-2">
                            <div
                                className="h-2 rounded-md"
                                style={{ backgroundColor: level.color, width: `${strength * 20}%` }}
                            ></div>
                            <span className="text-xs font-medium text-gray-600">
                                {level.label}
                            </span>
                        </div>
                    )}
                </div>
            )}
        />
    );
}
