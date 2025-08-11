import type { ReactNode } from "react"
import "./CountContainer.css"

type PropsCountContainer = {
	icon: ReactNode 
	text: string
	textColor: "red" | "white"
}

function CountContainer({ icon, text, textColor }: PropsCountContainer) {
	return (
		<div className="counter">
				{icon}
				<p className={textColor === "red" ? "textRed" : "textWhite"}>
					{text}
				</p>
			</div>
	)
}

export default CountContainer
