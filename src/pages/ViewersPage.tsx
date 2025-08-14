import "./viewersPage.css"
import TwitchApi from "../utils/TwitchApi"

import IconUser from "../components/MyIcons/UserIcon"

import Header from "../components/Header/Header"
import CountContainer from "../components/CountContainer/CountContainer"
import UsersList from "../components/UsersList/UsersList"
import { useEffect, useState } from "react"

function ViewersPage(){	
	const [moderatorId, setModeratorId] = useState<string>("")
	const [broadcasterId, setBroadcasterId] = useState<string>("")

	const [allUsersIds, setAllUsersIds] = useState<string[]>([""])
	const [allUsersInfos, setAllUsersInfos] = useState<UserType[]>([])
	
	const [modsIds, setModsIds] = useState<string[]>([""])
	const [viewersIds, setViewersIds] = useState<string[]>([""])
	
	const [modsInfos, setModsInfos] = useState<UserType[]>([])
	const [viewersInfos, setViewersInfos] = useState<UserType[]>([])
	
	const [total, setTotal] = useState<number>(0)

	useEffect(() => {
		const client_id: string | null = localStorage.getItem("client_id")
		const broadcaster_login: string | null = localStorage.getItem("broadcaster_login")
		
		if (client_id !== null && broadcaster_login !== null) {
			TwitchApi.defaults.headers.common = {
				Authorization: "Bearer " + document.location.hash.slice(
					document.location.hash.indexOf("#access_token=") + 14,
					document.location.hash.indexOf("&scope=")
				),
				"Client-Id": client_id,
			}
		
			TwitchApi.get(`/users?login=${broadcaster_login}`)
				.then((response) => {
					setBroadcasterId(response.data.data[0].id)
					setModeratorId(response.data.data[0].id)
				})
				.catch((error) => {
					console.log(error)
				})
		}
		
	}, [])

	type ChatterType = {
		user_id: string
		user_login: string
		user_name: string						
	}

	useEffect(() => {
		const interval: number = setInterval(() => {
			let params: string = `?broadcaster_id=${broadcasterId}`
			params += `&moderator_id=${moderatorId}`
			
			TwitchApi.get(`/chat/chatters${params}`)
				.then((response) => {
					const responseData: ChatterType[] = response.data.data
					const responseTotal: number = response.data.total

					const users_ids: string[] = responseData.map((user) => {
							return user.user_id
						})
					
						console.log(users_ids)
					setAllUsersIds(users_ids)
					setTotal(responseTotal)
				})
				.catch((error) => {
					console.log("Erro: " + error)
					window.alert(`Erro:
						${error}`)
				})
		}, 1000)

		return () => clearInterval(interval)
	}, [broadcasterId, moderatorId])

	useEffect(() => {
		if (allUsersIds.length > 0) {
			let params: string = `?broadcaster_id=${broadcasterId}`
			params += "&user_id=" + allUsersIds.join("&user_id=")
			
			if (params[params.length - 1] !== "=") {
				TwitchApi.get(`/moderation/moderators${params}`)
					.then((response) => {
						const responseData: ChatterType[] = response.data.data

						const mods_ids: string[] = responseData.map((user) => {
								return user.user_id
							})
						const viewers_ids: string[] = allUsersIds.filter(id => !mods_ids.includes(id))
						
						setModsIds(mods_ids)
						setViewersIds(viewers_ids)
					})
					.catch((error) => {
						console.log("Erro: " + error)
						window.alert(`Erro:
							${error}`)
					})
			}
		}
	}, [allUsersIds, broadcasterId])
	
	type UserType = {
		id: string
		login: string
		display_name: string
		type: string
		broadcaster_type: string
		description: string
		profile_image_url: string
		offline_image_url: string
		view_count: number
		email: string
		created_at: string
	}

	useEffect(() => {
		if (allUsersIds.length > 0) {
			let params: string = `?id=${allUsersIds[0]}`
			params += "&id=" + allUsersIds.slice(1).join("&id=")
			
			if (params[params.length - 1] !== "=") {
				TwitchApi.get(`/users/${params}`)
					.then((response) => {
						const responseData: UserType[] = response.data.data
						setAllUsersInfos(responseData)
					})
					.catch((error) => {
						console.log("Erro: " + error)
						window.alert(`Erro:
							${error}`)
					})
			}
		}
	}, [allUsersIds])

	useEffect(() => {
		if (allUsersInfos.length > 0) {
			allUsersInfos.map((userInfos) => {
				if (modsIds.includes(userInfos.id)) {
					setModsInfos((prevUsers) => 
						prevUsers.some((user) => user.id === userInfos.id) 
							? prevUsers
							: [...prevUsers, userInfos]
					)
				} else if (viewersIds.includes(userInfos.id)) {
					setViewersInfos((prevUsers) => 
						prevUsers.some((user) => user.id === userInfos.id) 
							? prevUsers
							: [...prevUsers, userInfos]
					)
				}
			})
		}
	}, [allUsersInfos, modsInfos, viewersInfos, modsIds, viewersIds])

	return (
		<div className="base">
			<Header>
				<h1 className="H1">
					Espectadores
				</h1>
			</Header>
			<section className="mainSection">
				<CountContainer 
					icon={<IconUser fillColor="red" />} 
					text={`${total} Espectadores totais`} 
					textColor="red" 
				/>
			</section>
			<section className="mainSection">
				<UsersList 
					users={modsInfos}
					type="mod"
				/>
				<UsersList 
					users={viewersInfos}
					type="user"
				/>
				
			</section>
		</div>
	)
}

export default ViewersPage
