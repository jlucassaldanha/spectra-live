import "./viewersPage.css"

import IconUser from "../components/MyIcons/UserIcon"

import Header from "../components/Header/Header"
import CountContainer from "../components/CountContainer/CountContainer"
import UsersList from "../components/UsersList/UsersList"

function ViewersPage(){
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
					text="Espectadores totais" 
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