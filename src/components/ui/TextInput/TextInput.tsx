import { type ChangeEvent } from "react"
import "./TextInput.css"

type TextInputProps = {
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function TextInput( { value, onChange }: TextInputProps ) {

	return (
		<input 
			className="inputText"
			type="text"
			value={value}
			onChange={onChange}
		/>
	)
}

export default TextInput