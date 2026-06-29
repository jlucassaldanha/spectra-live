import { useEffect, useState } from "react";
import ServerApi from "../utils/ServerApi";
import type { ChatterModeratorType, ViewersResponseType } from "../types/UsersTypes";

export default function useUpadateViewers() {
	const [chatters, setChatters] = useState<ChatterModeratorType>();
  	const [moderators, setModerators] = useState<ChatterModeratorType>();

	useEffect(() => {
		const interval: number = setInterval(() => {
		ServerApi.get("/information/viewers")
			.then((response) => {
			const response_data: ViewersResponseType = response.data;
			console.log(response_data);

			const orderedChatters = response_data.chatters.data.sort((a, b) => {
				return String(a.twitch_id).localeCompare(String(b.twitch_id));
			});
			const orderedModerators = response_data.moderators.data.sort(
				(a, b) => {
				return String(a.twitch_id).localeCompare(String(b.twitch_id));
				}
			);

			setChatters({
				data: orderedChatters,
				total: response_data.chatters.total,
			});
			setModerators({
				data: orderedModerators,
				total: response_data.moderators.total,
			});
			})
			.catch((error) => console.log(error));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return {
		chatters,
		moderators
	}
}