import "./MainIcon.css"

import logo from "/logo.svg"

function MainIcon() {
	return (
		<div className="icon">
			<img className="logo" src={logo} alt="Spectra Live Logo" />
		</div>
	)
}

export default MainIcon