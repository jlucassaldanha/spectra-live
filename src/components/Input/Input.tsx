import "./Input.css"

function Input( { value, onChange }: {value?: string, onChange: React.ChangeEventHandler<HTMLInputElement>} ) {
	return (
		<input 
			className="input"
			type="text" 
			value={value}
			onChange={onChange}
		/>
	)
}

export default Input