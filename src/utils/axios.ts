import axios from "axios";
import localStorageAvailable from "./local-storage";
import { setSession } from "../auth/context/utils";
import { paths } from "@/routes/paths";
import { API } from "@/config/api";

// ----------------------------------------------------------------------

const REFRESH_KEY = "refreshToken";

const axiosInstance = axios.create({
  baseURL: API.hostUrl,
  headers: { "Content-Type": "application/json" },
});

//* Maximum waiting time for 1 request: 10 minutes
axiosInstance.defaults.timeout = 1000 * 60 * 10;

//* `withCredentials` indicates whether or not cross-site Access-Control requests should be made using credentials
axiosInstance.defaults.withCredentials = true;

//* Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

const refreshTokenApi = async (refreshToken: string) => {
  return await axiosInstance.get(API.endpoints.auth.refreshToken, {
    headers: {
      "x-refresh-token": `Bearer ${refreshToken}`,
    },
  });
};

const handleLogout = async () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

let refreshTokenPromise: any = null;

//* Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (error.response?.status === 401) {
    //   handleLogout().then(() => {
    //     location.href = paths.auth.login;
    //   });
    // }

    const originalRequest = error.config;

    if (error.response?.status === 410 && originalRequest) {
      if (!refreshTokenPromise) {
        const storageAvailable = localStorageAvailable();

        const refreshToken = storageAvailable
          ? localStorage.getItem(REFRESH_KEY)
          : null;

        if (refreshToken) {
          refreshTokenPromise = refreshTokenApi(refreshToken)
            .then((res) => {
              const { access_token } = res.data.data;
              setSession(access_token);
            })
            .catch((err) => {
              handleLogout().then(() => {
                location.href = paths.auth.login;
                return Promise.reject(err);
              });
            })
            .finally(() => {
              refreshTokenPromise = null;
            });
        }
      }

      return refreshTokenPromise.then(() => {
        return axiosInstance(originalRequest);
      });
    }

    if (error.response?.status !== 410) {
      //! Error notification regardless of any error code on the screen => Except code 410 - GONE: Serves to automatically call API to refresh expired tokens
      console.log(error.response?.data?.message || error?.message);
    }
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);

export default axiosInstance;
