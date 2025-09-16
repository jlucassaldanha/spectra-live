import "./Button.css"

import type { ButtonType } from "../../../types/types"

function Button({ children, onClick, type, classname }: ButtonType) {
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