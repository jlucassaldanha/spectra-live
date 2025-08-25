import "./Button.css"

type ButtonType = { 
	children?: React.ReactNode 
	icon?: React.ReactNode 
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	type: "reset" | "submit" | "button" | undefined 
	classname?: "buttonConnect"
}

function Button({ children, icon, onClick, type, classname }: ButtonType) {
	return (
		<button 
			className={"button " + classname} 
			onClick={onClick}
			type={type}
		>
			{children}
			{icon}
		</button>
	)
}

export default Button