import "./User.css"

type PropsUser = {
	userName: string 
	profileImgURL: string
	size?: "small" | "large"
	orientation?: "vert" | "horz"
}

function User({ userName, profileImgURL, size = "small", orientation = "horz" }: PropsUser) {
  return (
		<div className="userContainer">
				<a className={orientation == "horz"? "userLinkH" : "userLinkV"} href={`https://twitch.tv/${userName}`} target="_blank">
					<img
						className={size == "large"? "userImgLg" : "userImgSm"}
						src={profileImgURL}
						alt="Profile Picture"
					/>
					<span className={size == "large"? "userNameTextLg" : "userNameTextSm"}>{userName}</span>
				</a>
		</div>
  );
}

export default User;