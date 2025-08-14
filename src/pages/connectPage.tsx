import { useState } from "react"
import "./ConnectPage.css"
import { FaTwitch } from "react-icons/fa"

function ConnectPage() {
	const [broadcasterName, setBroadcasterName] = useState<string>("")

	const client_id: string = "xm0gkrs8l5ugzik9mudpib49rc2rwb"

	const hancleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBroadcasterName(event.target.value)
	}

	const handleClick = () => {
		localStorage.setItem("client_id", client_id)
		localStorage.setItem("broadcaster_login", broadcasterName)
	}

	return (
		<div className="main">
			<h1>Saiba quem está te assistindo em tempo real!</h1>
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
			<a 
				className="connectButton"
				href={`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=http://localhost:5173/viewers&scope=user%3Aread%3Aemail+user%3Aread%3Afollows+moderator%3Aread%3Achatters+channel%3Aread%3Avips+moderation%3Aread`}
				onClick={handleClick}
			>
				Conectar com a twitch
				<FaTwitch size={25}/>
			</a>
		</div>
	)
}

export default ConnectPage