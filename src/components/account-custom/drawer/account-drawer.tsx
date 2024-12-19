"use client";

import { AnimatePresence, m } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../../../auth/hooks/use-auth-context";
import { paths } from "../../../routes/paths";
import { showToast } from "../../react-toastify";
import Iconify from "../../iconify";
import { CustomAvatar } from "../../custom-avatar";

// ----------------------------------------------------------------------

const OPTIONS = [
    {
        label: "Home",
        linkTo: paths.home.root,
        icon: <Iconify icon="solar:home-smile-bold" />
    },
    {
        label: "Profile",
        linkTo: paths.home.root,
        icon: <Iconify icon="solar:user-id-bold" />
    },
    {
        label: "Settings",
        linkTo: paths.home.root,
        icon: <Iconify icon="solar:settings-bold-duotone" />
    },
];

// ----------------------------------------------------------------------

export default function AccountDrawer() {
    const router = useRouter();

    const { user, logout, onClose, open } = useAuthContext();

    const handleLogout = async () => {
        try {
            await logout();
            await onClose();
            router.replace(paths.home.root);
            showToast("success", "Logout!");
        } catch (error) {
            console.error(error);
            showToast("error", "Unable to logout!");
        }
    };

    const handleClickItem = (path: string) => {
        onClose();
        router.push(path);
    };

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-drawer">
                    <div
                        className="fixed -z-1 inset-0 opacity-100"
                        onClick={onClose}
                    />
                    <m.div
                        initial={{ x: "100%", opacity: 0.95 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`fixed z-drawer bg-white shadow-lg w-drawer-account h-screen top-0 right-0 flex flex-col`}
                    >
                        <div className="overflow-y-scroll no-scrollbar flex flex-col w-full h-full">
                            <button className="absolute top-3 left-3 w-9 h-9 p-2 flex items-center justify-center outline-0 m-0 hover:bg-gray24per rounded-full" onClick={onClose}>
                                <Iconify icon="mingcute:close-line" className="w-full h-full text-text-secondary" />
                            </button>
                            <div className="pt-16 flex flex-col items-center pb-6">
                                <div className="avatar w-20 h-20 mb-3">
                                    <div className="ring-primary ring-offset-base-100 w-full h-full rounded-full ring ring-offset-2">
                                        <CustomAvatar className="typography_h2" name={user?.display_name} />
                                    </div>
                                </div>
                                <h3 className="typography_subtitle1 whitespace-nowrap text-ellipsis overflow-hidden mt-3">
                                    {user?.display_name || "User Name"}
                                </h3>
                                <p className="typography_body2 whitespace-nowrap text-ellipsis overflow-hidden mt-1">
                                    {user?.email || "user@example.com"}
                                </p>
                            </div>

                            <div className="h-[2px] bg-gray200" />

                            <div className="flex flex-col py-6 px-5 gap-2">
                                {OPTIONS.map((option) => (
                                    <button
                                        key={option.label}
                                        className="w-full h-10 hover:text-text-primary typography_body2 text-text-secondary hover:bg-gray24per p-2 flex gap-4 rounded-md items-center"
                                        onClick={() => handleClickItem(option.linkTo)}
                                    >
                                        {option.icon} {option.label}
                                    </button>
                                ))}
                            </div>

                        </div>
                        <div className="w-full p-5">
                            <button
                                onClick={handleLogout}
                                className="btn bg-error-lighter w-full h-full rounded-lg border-none hover:bg-error-light text-error-dark"
                            >
                                Logout
                            </button>
                        </div>
                    </m.div>
                </div>
            )}
        </AnimatePresence>
    );
}
