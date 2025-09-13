import "./TextInput.css"

function TextInput( { ...props }: React.InputHTMLAttributes<HTMLInputElement> ) {
	return (
		<input 
			className="inputText"
			type="text"
			{...props}
		/>
	)
}

export default TextInput