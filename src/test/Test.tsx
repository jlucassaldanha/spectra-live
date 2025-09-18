import { useState } from "react"
import Contact from "../components/composite/Contact/Contact"
import UpdateInfo from "../components/composite/UpdateInfo/UpdateInfo"

function Test() {
	const [show, setShow] = useState(false)
	const [showInfo, setShowInfo] = useState(false)

	return (
		<div>
			<UpdateInfo 
				showState={showInfo} 
				onClick={() => {
				setShowInfo((prev) => !prev)
				setShow(false)
				}}/>
			<Contact 
				showState={show} 
				onClick={() => {
					setShow((prev) => !prev)
					setShowInfo(false)
			}}/>
		</div>
	)
}

export default Test