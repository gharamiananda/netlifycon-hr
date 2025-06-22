import { tokenKey } from "@/constant/api";
import axios, { type InternalAxiosRequestConfig } from "axios";

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  signal?: AbortSignal;
  token?: string;
}
export const API_BASE_URL: string = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});

const controllers = new Map<string, AbortController>();

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const customConfig = config as CustomAxiosRequestConfig;

  if (config.url) {
    const controller = new AbortController();
    (config as CustomAxiosRequestConfig).signal = controller.signal;
    controllers.set(config.url, controller);
  }
  const token = customConfig?.token || localStorage.getItem(tokenKey);
  // config.headers = {
  //   ...(config.headers || {}), // fallback ensures no crash if undefined

  // };
  config.headers.Authorization = token;

  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const cancelRequest = (url: string) => {
  const controller = controllers.get(url);
  if (controller) {
    controller.abort();
    controllers.delete(url);
  }
};

export default axiosInstance;
