import axios, { type AxiosInstance } from "axios";
import { API_URL } from "../constants/constants";

const ServerApi: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true
  });

export default ServerApi