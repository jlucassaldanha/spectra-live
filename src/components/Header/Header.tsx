import { type ReactNode } from "react"
import "./Header.css"

function Header({ children }: { children: ReactNode }) {
	return (
		<header className="Header">
			{children}
		</header>
	)
}

export default Header