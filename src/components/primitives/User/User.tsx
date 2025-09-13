import "./User.css"

type PropsUser = {
	userName: string
	profileImgURL: string
	profileURL: string
	target?: "_blank" | "_parent" | "_self" | "_top" | undefined
	size?: "small" | "large" | "mid"
	orientation?: "vert" | "horz"
}

function User({ userName, profileImgURL, profileURL, target, size = "small", orientation = "horz" }: PropsUser) {
	const sizes = {
		"small": {text: "userNameTextSm", img: "userImgSm"},
		"mid": {text: "userNameTextMd", img: "userImgMd"},
		"large": {text: "userNameTextLg", img: "userImgLg"}
	}

  return (
		<div className="userContainer">
				<a className={orientation == "horz"? "userLinkH" : "userLinkV"} href={profileURL} target={target} >
					<img
						className={sizes[size].img}
						src={profileImgURL}
						alt="Profile Picture"
					/>
					<span className={sizes[size].text}>{userName}</span>
				</a>
		</div>
  );
}

export default User;