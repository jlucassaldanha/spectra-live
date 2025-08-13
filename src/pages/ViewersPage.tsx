import "./viewersPage.css"
import TwitchApi from "../utils/TwitchApi"

import IconUser from "../components/MyIcons/UserIcon"

import Header from "../components/Header/Header"
import CountContainer from "../components/CountContainer/CountContainer"
import UsersList from "../components/UsersList/UsersList"
import { useEffect, useState } from "react"

function ViewersPage(){
	const [allUsersIds, setAllUsersIds] = useState<string[]>([""])
	const [total, setTotal] = useState<number>(0)
	
	const moderator_id: string = ""
	const broadcaster_id: string = ""

	const users = [
		{
			name: "teste1",
			img: "https://yt3.googleusercontent.com/ytc/AIdro_l-U0s4DusUoDq-0X9v_yvheRNXoy1jZfK7CogXkJcpz7Q=s120-c-k-c0x00ffffff-no-rj"
		},
		{
			name: "teste2",
			img: "https://yt3.googleusercontent.com/bnj1afxDUwz-_GbNZQa_9M45U55BuPiXczws1qmYWcy5uQCoppf7k_Bacq3AUP2sHGiMkNxhkw=s120-c-k-c0x00ffffff-no-rj"
		},
		{
			name: "3teste",
			img: "https://yt3.googleusercontent.com/trTOeasBYL_IxmwM8GpAT4_fXl1XZ9tUvxlUplzSFgBa_n3qcgcYOQ8oSh80rPdYZODCXD-Wag=s120-c-k-c0x00ffffff-no-rj"
		},
		{
			name: "4teste",
			img: "https://yt3.googleusercontent.com/ytc/AIdro_mvK5CpITy5tDYSu3iH3dgUu1iMu47xCdTVby0NLU3rsg=s120-c-k-c0x00ffffff-no-rj"
		},
		
	]

	useEffect(() => {
		const interval: number = setInterval(() => {
			let params: string = `?broadcaster_id=${broadcaster_id}`
			params += `&moderator_id=${moderator_id}`
			
			TwitchApi.get(`/chat/chatters${params}`)
				.then((response) => {
					type chattersType = {
						user_id: string
						user_login: string
						user_name: string						
					}

					const responseData: chattersType[] = response.data.data
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
					users={users}
					type="user"
				/>
				<UsersList 
					users={users}
					type="mod"
				/>
			</section>
		</div>
	)
}

export default ViewersPage