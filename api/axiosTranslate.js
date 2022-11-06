import axios from "axios";
import { G_TRS_URL } from "./baseURL";

const axiosTranslate = axios.create({
  baseURL: G_TRS_URL,
  headers: { "Content-type": "application/json" },
});

// Add a request interceptor
axiosTranslate.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Add a response interceptor
axiosTranslate.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosTranslate;
