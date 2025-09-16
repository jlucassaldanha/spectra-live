import "./TextInput.css"

import type { TextInputProps } from "../../../types/types"

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