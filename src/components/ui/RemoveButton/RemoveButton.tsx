import "./RemoveButton.css"
import type { RemoveButtonProps } from "../../../types/ux"
import { CiCircleRemove } from "react-icons/ci"

function RemoveButton({ onClick, size = 27, color = "red" }: RemoveButtonProps) {
	return (
		<button className="removeBt" onClick={onClick} >
			<CiCircleRemove size={size} fill={color} />
		</button>
	)
}

export default RemoveButton