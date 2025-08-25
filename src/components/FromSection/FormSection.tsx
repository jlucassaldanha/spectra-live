import type React from "react";
import "./FormSection.css"

function FormSection({ children, onSubmit }: { children?: React.ReactNode, onSubmit?: React.FormEventHandler<HTMLFormElement> }) {
	return (
		<form className="formSection" onSubmit={onSubmit}>
			{children}
		</form>
	)
}

export default FormSection