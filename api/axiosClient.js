import axios from "axios";
import { G_TRS_URL } from "./baseURL";

const axiosClient = axios.create({
  baseURL: "https://s1.g-us.g-on.vn/v1/",
  headers: { "Content-type": "application/json" },
});

export const axiosTranslate = axios.create({
  baseURL: G_TRS_URL,
  headers: { "Content-type": "application/json" },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
