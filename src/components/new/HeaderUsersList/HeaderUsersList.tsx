import type { ReactNode } from "react"
import "./HeaderUsersList.css"

type PropsHeaderUsersList = {
	icon: ReactNode 
	text: string
	textColor: "red" | "white"
}

function HeaderUsersList({ icon, text, textColor }: PropsHeaderUsersList) {
	return (
		<div className="counter">
				{icon}
				<p className={textColor === "red" ? "textRed" : "textWhite"}>
					{text}
				</p>
			</div>
	)
}

export default HeaderUsersList
