import { useState } from "react";
import Contact from "../components/composite/Contact/Contact";
import UpdateInfo from "../components/composite/UpdateInfo/UpdateInfo"

import { FaInfoCircle } from "react-icons/fa";


function Test(){
	return(
		<div>
			<UpdateInfo />
			<Contact />
		</div>
	)
}

export default Test