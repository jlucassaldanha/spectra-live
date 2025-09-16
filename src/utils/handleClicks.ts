import ServerApi from "./ServerApi";
import { ROOT_URL } from "../constants/constants";

export const handleLogoutClick = () => {
    ServerApi.post("/auth/logout")
      .then((response) => {
        console.log(response);

        window.location.href = ROOT_URL+"/home";
      })
      .catch((error) => {
        console.log(error);
      });
};