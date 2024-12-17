import axios from "axios";
import { API } from "../config-global";

// ----------------------------------------------------------------------

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
    console.log(config);

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

//* Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
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
