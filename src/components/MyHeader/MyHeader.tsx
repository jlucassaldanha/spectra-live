import { type ReactNode } from "react"
import "./MyHeader.css"

function MyHeader({ children }: { children: ReactNode }) {
	return (
		<header className="Header">
			{children}
		</header>
	)
}

export default MyHeader