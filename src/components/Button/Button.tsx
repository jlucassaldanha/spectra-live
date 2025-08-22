import "./Button.css"

type ButtonType = { 
	children?: React.ReactNode 
	icon?: React.ReactNode 
	onClick: React.MouseEventHandler<HTMLButtonElement>
	type: "reset" | "submit" | "button" | undefined 
}

function Button({ children, icon, onClick, type }: ButtonType) {
	return (
		<button 
			className="button" 
			onClick={onClick}
			type={type}
		>
			{children}
			{icon}
		</button>
	)
}

export default Button