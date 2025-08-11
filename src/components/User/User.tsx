import "./User.css"

type PropsUser = {
	userName: string 
	profileImgURL: string
}

function User({ userName, profileImgURL }: PropsUser) {
  return (
		<div className="userContainer">
			<a className="userLink" href={`https://twitch.tv/${userName}`} target="_blank">
				<img
					className="userImg"
					src={profileImgURL}
					alt="Profile Picture"
				/>
				<span>•</span>
				<strong className="userText">{userName}</strong>
			</a>
		</div>
  );
}

export default User;