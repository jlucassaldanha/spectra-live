import "./Button.css"

function Button({ children, icon, onClick }: { children?: React.ReactNode, icon?: React.ReactNode, onClick: React.MouseEventHandler<HTMLButtonElement> }) {
	return (
		<button 
			className="button" 
			onClick={onClick}
		>
			{children}
			{icon}
		</button>
	)
}

export default Button