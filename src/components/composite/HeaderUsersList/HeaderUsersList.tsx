import "./HeaderUsersList.css"

import type { HeaderUsersListProps } from "../../../types/ux"

function HeaderUsersList({ icon, text, textColor, background = "yes" }: HeaderUsersListProps) {
	return (
		<div className={"counter " + (background === "yes" ? "bgCounter" : "")}>
			{icon}
			<p className={textColor === "red" ? "textRed" : "textWhite"}>
				{text}
			</p>
		</div>
	)
}

export default HeaderUsersList
