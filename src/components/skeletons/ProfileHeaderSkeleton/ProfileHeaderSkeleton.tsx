import "./ProfileHeaderSkeleton.css"

import { MdLogout } from "react-icons/md";
import HorizontalLogo from "../../primitives/HorizontalLogo/HorizontalLogo";

import { handleLogoutClick } from "../../../utils/handleClicks";

function ProfileHeaderSkeleton() {
	return (
		<div className="userHeaderDivSK">
			<div className="userContainerSK">
				<div className="userLinkHSK" >
					<div className="userImgMdSK" ></div>
					<div className="userNameTextMdSK"></div>
				</div>
		  </div>
      <div className="logoDiv">
        <HorizontalLogo />
      </div>
      <button className="logOutBtSK" onClick={handleLogoutClick}>
          Sair
          <MdLogout fill="red" size={23} />
      </button>
		</div>
	)
}

export default ProfileHeaderSkeleton