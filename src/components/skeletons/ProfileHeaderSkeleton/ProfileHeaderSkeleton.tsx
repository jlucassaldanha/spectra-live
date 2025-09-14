import "./ProfileHeaderSkeleton.css"

import { MdLogout } from "react-icons/md";

import HorizontalLogo from "../../primitives/HorizontalLogo/HorizontalLogo";
import ServerApi from "../../../utils/ServerApi";


const handleClick = () => {
    ServerApi.post("/auth/logout")
      .then((response) => {
        console.log(response);

        window.location.href = "http://localhost:5173/home";
      })
      .catch((error) => {
        console.log(error);
      });
  };

function ProfileHeaderSkeleton() {
	return (
		<div className="userHeaderDivSK">
			<div className="userContainerSK">
				<div className="userLinkHSK" >
					<div className="userImgMdSK" ></div>
					<div className="userNameTextMdSK"></div>
				</div>
		  </div>
      <HorizontalLogo />
      <button className="logOutBtSK" onClick={handleClick}>
          Sair
          <MdLogout fill="red" size={23} />
      </button>
		</div>
	)
}

export default ProfileHeaderSkeleton