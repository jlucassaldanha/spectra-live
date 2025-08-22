import "./Input.css"

function Input( { ...props }: React.InputHTMLAttributes<HTMLInputElement> ) {
	return (
		<input 
			className="input"
			type="text"	
			{...props}
		/>
	)
}

export default Input