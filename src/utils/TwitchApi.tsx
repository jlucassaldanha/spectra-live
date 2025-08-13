import axios, { type AxiosInstance } from "axios";

const TwitchApi: AxiosInstance = axios.create({
    baseURL: "https://api.twitch.tv/helix",
  });

export default TwitchApi