import React, { forwardRef } from 'react'

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
type Props = {
    name: string,
    color?: string
}

const CustomAvatar = forwardRef(
    ({ name, color }: Props, ref) => {
        const charAtName = getCharAtName(name)

        const colorByName = getColorByName(name)

        const colr = color || colorByName

        return (
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        )
    }
)

export default CustomAvatar