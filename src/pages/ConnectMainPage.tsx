import "./ConnectMainPage.css"

import { useState } from "react"

import { FaTwitch } from "react-icons/fa"
import { IoIosAdd, IoIosRemove } from "react-icons/io";

import MainIcon from "../components/MyIcons/MainIcon";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

type InputType = {
	id: number 
	value: string
}

function ConnectMainPage() {
	const [broadcasterName, setBroadcasterName] = useState<string>("")
	const [blockLogins, setBlockLogins] = useState<InputType[]>([])
	//const client_id: string = "gfiv47o2hp43s1cip3bxbjx1hc84n9"
	const client_id: string = "xm0gkrs8l5ugzik9mudpib49rc2rwb"

	const handleClick = () => {
		localStorage.setItem("client_id", client_id)
		localStorage.setItem("broadcaster_login", broadcasterName)
		localStorage.setItem("block_logins", JSON.stringify(blockLogins.map((login) => login.value)))

		//window.location.href = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=https://view-viewers.vercel.app/viewers&scope=user%3Aread%3Aemail+moderation%3Aread+moderator%3Aread%3Achatters`
		window.location.href = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=http://localhost:5173/viewers&scope=user%3Aread%3Aemail+moderation%3Aread+moderator%3Aread%3Achatters`
		
	}

	const addBlockLogin = () => {
		setBlockLogins((prevLogins) => {
			return [...prevLogins, {id: Date.now(), value: ""}]
		})
	}

	const removeBlockLogin = (id: number) => {
		setBlockLogins((prevLogins) => {
			return prevLogins.filter((input) => input.id !== id)
		})
	}

	const handleChange = (id: number, value: string) => {
		setBlockLogins((prevLogins) => {
			return prevLogins.map((input) => {
				return input.id === id ? { ...input, value } : input
			})
		})
	}

	return (
		<div className="main">
			<MainIcon />
			<h1>
				Saiba quem está te assistindo em tempo real!
			</h1>
			<div className="text">
				<p>Com o <strong>Viewers show</strong> é possivel ver quem está te assistindo em tempo real.</p>
				<p>Conecte-se e tenha um feedback mais imersivo com o seu público!</p>
			</div>
			<div className="text">
				<p>Insira o nome do seu canal e conecte-se pela Twitch</p>
				<Input 
					onChange={
						(event: React.ChangeEvent<HTMLInputElement>) => {
							setBroadcasterName(event.target.value)
						}
					} 
				/>
			</div>
			<div className="addRemLogin">
				<div className="loginBlock">
					Adicionar usuários fora de vista?
					<Button 
						icon={<IoIosAdd size={35} />} 
						onClick={addBlockLogin} 
					/>
				</div>
				{
					blockLogins.map((input) => {
						return (
							<div 
								className="loginBlock"
								key={input.id}
							>	
								<Input 
									value={input.value}
									onChange={(e) => handleChange(input.id, e.target.value)}
								/>
								<Button 
									icon={<IoIosRemove size={35} />} 
									onClick={() => removeBlockLogin(input.id)}
								/>
							</div>
						)
					})
				}
			</div>
			<button 
				className="button connectPadding" 
				onClick={handleClick}
			>
				Conectar com a twitch
				<FaTwitch size={25}/>
			</button>
		</div>
	)
}

export default ConnectMainPage