import axios, { type AxiosInstance } from "axios";
import { API_URL } from "../constants/constants";

const ServerApi: AxiosInstance = axios.create({
    baseURL: API_URL,
    //withCredentials: true
  });

ServerApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("@Spectra:token");
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ServerApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Sessão expirada ou inválida.");
      
      localStorage.removeItem("@Spectra:token");
      
      if (window.location.pathname !== "/") {
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

export default ServerApi;