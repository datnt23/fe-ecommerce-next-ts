/**
 ** Password validator for login pages
 */
import { STRENGTH_COLOR } from '../config-global';

//? has number
const hasNumber = (number: string) => new RegExp(/[0-9]/).test(number);

//? has mix of small and capitals
const hasMixed = (number: string) =>
    new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

//? has special chars
const hasSpecial = (number: string) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

export const strengthIndicator = (number: string) => {
    let strength: number = 0
    if (number.length > 5) strength += 1;
    if (number.length > 7) strength += 1;
    if (hasNumber(number)) strength += 1;
    if (hasSpecial(number)) strength += 1;
    if (hasMixed(number)) strength += 1;
    return strength
}

export const strengthColor = (count: number) => {
    if (count < 2) return { label: "Poor", color: STRENGTH_COLOR.errorMain };
    if (count < 3) return { label: "Weak", color: STRENGTH_COLOR.warningDark };
    if (count < 4) return { label: "Normal", color: STRENGTH_COLOR.orangeMain };
    if (count < 5) return { label: "Good", color: STRENGTH_COLOR.successMain };
    if (count < 6) return { label: "Strong", color: STRENGTH_COLOR.successDark };
    return { label: "Poor", color: STRENGTH_COLOR.errorMain }
}
