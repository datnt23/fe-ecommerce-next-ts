import { paths } from "@/routes/paths";
import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

function jwtDecode(token: string) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );

  return JSON.parse(jsonPayload);
}

// ----------------------------------------------------------------------

export const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};
// ----------------------------------------------------------------------

export const tokenExpired = (exp: number) => {
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    // alert("Token expired");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = paths.auth.login;
  }, timeLeft);
};

// ----------------------------------------------------------------------

export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);

    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");

    delete axiosInstance.defaults.headers.common.Authorization;
  }
};

export const setRefreshToken = (token: string | null) => {
  if (token) {
    localStorage.setItem("refreshToken", token);

    // This function below will handle when token is expired
    const { exp } = jwtDecode(token); // ~3 days by minimals server
    tokenExpired(exp);
  } else {
    localStorage.removeItem("refreshToken");
  }
};
