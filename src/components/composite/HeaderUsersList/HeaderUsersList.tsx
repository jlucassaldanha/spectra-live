import "./HeaderUsersList.css"

import type { PropsHeaderUsersList } from "../../../types/types"

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
