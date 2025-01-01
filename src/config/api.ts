export const API = {
  hostUrl: process.env.NEXT_PUBLIC_HOST_API ?? "",
  endpoints: {
    auth: {
      me: "/auth/me",
      login: "/auth/login",
      register: "/auth/register",
      refreshToken: "/auth/refresh-token",
    },
  },
};
