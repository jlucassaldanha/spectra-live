import "./ConnectMainPage.css"

import { useState } from "react"

import { FaTwitch } from "react-icons/fa"
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { PiEyesFill } from "react-icons/pi";

type InputType = {
	id: number 
	value: string
}

function ConnectMainPage() {
	const [broadcasterName, setBroadcasterName] = useState<string>("")
	const [blockLogins, setBlockLogins] = useState<InputType[]>([])
	const client_id: string = "gfiv47o2hp43s1cip3bxbjx1hc84n9"

	const hancleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBroadcasterName(event.target.value)
	}

	const handleClick = () => {
		localStorage.setItem("client_id", client_id)
		localStorage.setItem("broadcaster_login", broadcasterName)
		localStorage.setItem("block_logins", JSON.stringify(blockLogins.map((login) => login.value)))

		window.location.href = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=https://view-viewers.vercel.app/viewers&scope=user%3Aread%3Aemail+user%3Aread%3Afollows+moderator%3Aread%3Achatters+channel%3Aread%3Avips+moderation%3Aread`
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
			<div className="icon">
				<FaTwitch size={70} />
				<PiEyesFill size={75} /> 
			</div>
			<h1>
				Saiba quem está te assistindo em tempo real!
			</h1>
			<div className="text">
				<p>Com o <strong>Viewers show</strong> é possivel ver quem está te assistindo em tempo real.</p>
				<p>Conecte-se e tenha um feedback mais imersivo com o seu público!</p>
			</div>
			<div className="text">
				<p>Insira o nome do seu canal e conecte-se pela Twitch</p>
				<input 
					className="input"
					type="text" 
					name="broadcaster_name" 
					id="broadcaster_name" 
					onChange={hancleChange}
				/>
			</div>
			<div className="addRemLogin">
				<div className="loginBlock">
					Adicionar usuários fora de vista?
					<button className="button" onClick={addBlockLogin}>
						<IoIosAdd size={35} />
					</button>
				</div>
				{
					blockLogins.map((input) => {
						return (
							<div 
								className="loginBlock"
								key={input.id}
							>
								<input 
									className="input"
									type="text"
									value={input.value}
									onChange={(e) => handleChange(input.id, e.target.value)}
								/>
								<button 
									className="button"
									onClick={() => removeBlockLogin(input.id)}	
								>
									<IoIosRemove size={35} />
								</button>
							</div>
						)
					})
				}
			</div>
			
			<button className="button connectPadding" onClick={handleClick}>
				Conectar com a twitch
				<FaTwitch size={25}/>
			</button>
		</div>
	)
}

export default ConnectMainPage