import { toast, ToastContent, ToastOptions, Slide, Id } from "react-toastify";

export const defaultToastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
};

type ToastType = "success" | "error" | "info" | "warning" | "default";

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {ToastContent} content
 * @param {ToastOptions} [options=defaultToastOption]
 * @return {Id}
 */
export const showToast = (
    type: ToastType,
    content: ToastContent,
    options: Partial<ToastOptions> = {}
): Id => {
    const mainStyle = {
        minHeight: "50px",
        borderRadius: "8px",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "22px",
    };

    const mainCloseButton = {};

    switch (type) {
        case "success":
            return toast.success(content, {
                ...defaultToastOptions,
                ...options,
                style: {
                    ...mainStyle,
                },
            });
        case "error":
            return toast.error(content, {
                ...defaultToastOptions,
                ...options,
                style: {
                    ...mainStyle,
                },
            });
        case "info":
            return toast.info(content, {
                ...defaultToastOptions,
                ...options,
                style: {
                    ...mainStyle,
                },
            });
        case "warning":
            return toast.warn(content, {
                ...defaultToastOptions,
                ...options,
                style: {
                    ...mainStyle,
                },
            });
        case "default":
            return toast(content, {
                ...defaultToastOptions,
                ...options,
                style: {
                    ...mainStyle,
                },
            });
        default:
            return toast(content, {
                ...defaultToastOptions,
                ...options,
                style: mainStyle,
            });
    }
};
