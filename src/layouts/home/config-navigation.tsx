import { paths } from "@/routes/paths";
import Iconify from "@/components/iconify";

export const navConfig = [
  {
    title: "Home",
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: paths.home.root,
  },
  {
    title: "Dashboard",
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: paths.dashboard.root,
  },
];
