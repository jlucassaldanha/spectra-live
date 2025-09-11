import "./User.css"

type PropsUser = {
	userName: string 
	profileImgURL: string
}

function User({ userName, profileImgURL }: PropsUser) {
  return (
		<div className="userContainer">
			<div>
				<a className="userLink" href={`https://twitch.tv/${userName}`} target="_blank">
					<img
						className="userImg"
						src={profileImgURL}
						alt="Profile Picture"
					/>
					
					<strong className="userText">{userName}</strong>
				</a>
			</div>
			
		</div>
  );
}

export default User;