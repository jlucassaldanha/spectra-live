import axios, { type AxiosInstance } from "axios";

const ServerApi: AxiosInstance = axios.create({
    baseURL: "http://localhost:8000",
  });

export default ServerApi