import "./ToggleSwitch.css"

import type { SwitchProps } from "../../../types/ux"

function ToggleSwitch({checked, onChange}: SwitchProps) {
	return (
		<label className="switch">
			<input 
				type="checkbox" 
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
			/>
			<span className="slider"></span>
		</label>
	)
}

export default ToggleSwitch