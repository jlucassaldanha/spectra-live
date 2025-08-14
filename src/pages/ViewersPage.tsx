import "./viewersPage.css"
import TwitchApi from "../utils/TwitchApi"

import IconUser from "../components/MyIcons/UserIcon"

import Header from "../components/Header/Header"
import CountContainer from "../components/CountContainer/CountContainer"
import UsersList from "../components/UsersList/UsersList"
import { useEffect, useState } from "react"

function ViewersPage(){
	const [allUsersIds, setAllUsersIds] = useState<string[]>([""])
	const [allUsersInfos, setAllUsersInfos] = useState<UserType[]>([])
	const [modsIds, setModsIds] = useState<string[]>([""])
	const [viewersIds, setViewersIds] = useState<string[]>([""])
	const [modsInfos, setModsInfos] = useState<UserType[]>([])
	const [viewersInfos, setViewersInfos] = useState<UserType[]>([])
	const [total, setTotal] = useState<number>(0)
	
	const moderator_id: string = ""
	const broadcaster_id: string = ""

	type ChatterType = {
		user_id: string
		user_login: string
		user_name: string						
	}

	useEffect(() => {
		const interval: number = setInterval(() => {
			let params: string = `?broadcaster_id=${broadcaster_id}`
			params += `&moderator_id=${moderator_id}`
			
			TwitchApi.get(`/chat/chatters${params}`)
				.then((response) => {
					const responseData: ChatterType[] = response.data.data
					const responseTotal: number = response.data.total

					const users_ids: string[] = responseData.map((user) => {
							return user.user_id
						})

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
	}, [])

	useEffect(() => {
		if (allUsersIds.length > 0) {
			let params: string = `?broadcaster_id=${broadcaster_id}`
			params += allUsersIds.join("&user_id=")

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
	}, [allUsersIds])

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
			let params: string = `?user_id=${allUsersIds[0]}`
			params += allUsersIds.slice(1, allUsersIds.length - 1).join("&user_id=")

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
	}, [allUsersIds])

	useEffect(() => {
		if (allUsersInfos.length > 0) {
			allUsersInfos.map((userInfos) => {
				if (modsIds.includes(userInfos.id)) {
					setModsInfos(oldItems => [...oldItems, userInfos])
				} else if (viewersIds.includes(userInfos.id)) {
					setViewersInfos(oldItems => [...oldItems, userInfos])
				}
			})
		}
	}, [allUsersInfos, modsIds, viewersIds])

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
					type="user"
				/>
				<UsersList 
					users={viewersInfos}
					type="mod"
				/>
			</section>
		</div>
	)
}

export default ViewersPage
