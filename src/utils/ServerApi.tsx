import axios, { type AxiosInstance } from "axios";

const ServerApi: AxiosInstance = axios.create({
    baseURL: "https://spectra-api.onrender.com",
    withCredentials: true
  });

export default ServerApi