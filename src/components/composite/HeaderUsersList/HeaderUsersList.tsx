import "./HeaderUsersList.css"

import type { HeaderUsersListProps } from "../../../types/ux"

function HeaderUsersList({ icon, text, textColor }: HeaderUsersListProps) {
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
