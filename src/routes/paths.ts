function path(root: string, subLink: string) {
  return `${root}${subLink}`;
}
// ----------------------------------------------------------------------
const ROOT = {
  HOME: "/",
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
};
// ----------------------------------------------------------------------
export const paths = {
  // * AUTH
  auth: {
    login: path(ROOT.AUTH, "/login"),
    register: path(ROOT.AUTH, "/register"),
    resetPassword: path(ROOT.AUTH, "/reset-password"),
  },
  // * DASHBOARD
  dashboard: {
    root: ROOT.DASHBOARD,
  },
  // * HOME
  home: {
    root: ROOT.HOME,
  },
};
