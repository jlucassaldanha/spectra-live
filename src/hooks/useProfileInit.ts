import { useEffect, useState } from "react";
import ServerApi from "../utils/ServerApi";
import type { UserDataType } from "../types/UsersTypes";

export default function useProfileInit() {
	const [userData, setUserData] = useState<UserDataType>({
		display_name: "",
		profile_image_url: ""
	});
  	const [loadingHeader, setLoadingHeader] = useState(true);

	useEffect(() => {
		async function loadProfile() {
		try {
			const response = await ServerApi.get("/auth/me");
			setUserData(response.data);
			setLoadingHeader(false)
		} catch (error) {
			console.error("Erro ao carregar perfil:", error);
		}
		}

		loadProfile();
	}, []);

	return {
		userData,
		loadingHeader
	}
}