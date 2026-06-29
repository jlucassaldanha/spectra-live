import { useEffect, useState } from "react";
import ServerApi from "../utils/ServerApi";
import type { UserDataType, UserType } from "../types/UsersTypes";

export default function useModsInit(userData: UserDataType) {
	const [moderatorsData, setModeratorsData] = useState<UserType[]>([]);
  	const [loadingMod, setLoadingMod] = useState(true);

	useEffect(() => {
		if (userData != undefined) {
		ServerApi.get("/information/mods")
			.then((response) => {
			setModeratorsData(response.data);
			setLoadingMod(false);
			})
			.catch((error) => {
			console.log(error);
			});
		}
	}, [userData]);

	return {
		moderatorsData,
		loadingMod
	}
}