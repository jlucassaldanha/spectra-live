/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from "axios";
import ServerApi from "../utils/ServerApi";
import type { UserType } from "../types/UsersTypes";
import { useState, type Dispatch, type SetStateAction } from "react";

export default function useUnviewsConfig(
	currentInputValue: string,  
	currentCheckedIds: Record<string | number, boolean>,
	setCheckedIds: Dispatch<SetStateAction<Record<string | number, boolean>>>,
	setUsersList: Dispatch<SetStateAction<UserType[]>>,
	setInputValue: Dispatch<SetStateAction<string>>
) {
	const [saved, setSaved] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const [foundUser, setFoundUser] = useState(true);
	const [foundUserFormat, setFoundUserFormat] = useState(true);

	const handleAddUser = async () => {
		if (currentInputValue.trim()) {
		try {
			const response = await ServerApi.get("/information/user", {
			params: { display_name: currentInputValue.trim() },
			});

			const user = response.data;

			setUsersList((prevList) => {
				if (!prevList.some((u) => u.twitch_id === user.twitch_id)) {
					setCheckedIds((prevChecked) => ({ ...prevChecked, [user.twitch_id]: true }));
					setInputValue("");
					return [...prevList, user];
				}
				return prevList;
			});

			setFoundUser(true);
			setFoundUserFormat(true);
		} catch (error) {
			if (error instanceof AxiosError) {
			if (error.response?.status === 404) {
				setFoundUser(false);
				setFoundUserFormat(true)
			} else if (error.response?.status === 400) {
				setFoundUserFormat(false);
				setFoundUser(true)
			} else {
				setFoundUser(false)
				setFoundUserFormat(false)
			}
			}
		}
		}
	};

	const handleRemoveUser = (twitch_id: number | string) => {
		setUsersList((prev) => prev.filter((u) => u.twitch_id !== twitch_id));
    	setCheckedIds((prev) => ({ ...prev, [twitch_id]: false }));
	};

	const handleSave = async () => {
		setSaved(false);
		setIsSaving(true);

		try {
		const addUnviews = Object.entries(currentCheckedIds)
			.filter(([_, value]) => value === true)
			.map(([key, _]) => key);

		const removeUnviews = Object.entries(currentCheckedIds)
			.filter(([_, value]) => value === false)
			.map(([key, _]) => key);

		if (addUnviews.length > 0) {
			await ServerApi.post("/preferences/add/unview", {
			twitch_ids: addUnviews,
			});
		}

		if (removeUnviews.length > 0) {
			await ServerApi.delete("/preferences/remove/unview", {
			data: { twitch_ids: removeUnviews },
			});
		}

		setSaved(true);
		} catch (error) {
		console.log(error);
		} finally {
		setIsSaving(false);
		}
	};

	return {
		saved,
		isSaving,
		foundUser,
		foundUserFormat,
		handleAddUser,
		handleRemoveUser,
		handleSave
	}
}