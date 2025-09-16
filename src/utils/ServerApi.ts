import axios, { type AxiosInstance } from "axios";

const ServerApi: AxiosInstance = axios.create({
    baseURL: "https://spectra-server-production.up.railway.app",
    withCredentials: true
  });

export default ServerApi