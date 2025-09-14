import "./Button.css"

type ButtonType = { 
	children?: React.ReactNode 
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	type?: "reset" | "submit" | "button" | undefined 
	classname?: "buttonConnect"
}

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