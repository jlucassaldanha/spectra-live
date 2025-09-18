import "./Button.css"

import type { ButtonProps } from "../../../types/ux"

function Button({ children, onClick, type, classname }: ButtonProps) {
	return (
		<button 
			className={"button " + classname} 
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	)
}

export default Button