import "./UsersList.css"

import CountContainer from "../CountContainer/CountContainer"
import User from "../User/User"

import IconUser from "../MyIcons/UserIcon"
import IconMod from "../MyIcons/ModIcon"

type userType = {
	name: string, 
	img: string
}

type Props = {
	users: userType[]
	type: "user" | "mod"
}

function UsersList({ users, type }: Props) {
	return (
		<div className="useSection">
					<div className="countHeader">
						<CountContainer 
							icon={type === "user" ? <IconUser fillColor="white" /> : <IconMod />} 
							text={type === "user" ? "Espectadores" : "Moderadores"} 
							textColor="white" 
						/>
					</div>
					{
						users.map((user, i) => {
							return (
								<User 
									userName={user.name}
									profileImgURL={user.img}
									key={i}
								/>
							)
						})
					}
				</div>
	)
}

export default UsersList