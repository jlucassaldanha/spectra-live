import "./MainIcon.css"

import { FaTwitch } from "react-icons/fa";
import { PiEyesFill } from "react-icons/pi";

function MainIcon() {
	return (
		<div className="icon">
			<FaTwitch size={70} />
			<PiEyesFill size={75} /> 
		</div>
	)
}

export default MainIcon