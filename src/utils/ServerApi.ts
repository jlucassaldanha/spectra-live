import axios, { type AxiosInstance } from "axios";

const ServerApi: AxiosInstance = axios.create({
    baseURL: "https://spectralive-api.up.railway.app",
    withCredentials: true
  });

export default ServerApi