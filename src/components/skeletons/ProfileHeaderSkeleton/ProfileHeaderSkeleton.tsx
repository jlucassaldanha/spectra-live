import "./ProfileHeaderSkeleton.css"

import { MdLogout } from "react-icons/md";

import HorizontalLogo from "../../primitives/HorizontalLogo/HorizontalLogo";
import ServerApi from "../../../utils/ServerApi";
import { ROOT_URL } from "../../../constants";


const handleClick = () => {
    ServerApi.post("/auth/logout")
      .then((response) => {
        console.log(response);

        window.location.href = ROOT_URL+"/home";
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
      <div className="logoDiv">
        <HorizontalLogo />
      </div>
      <button className="logOutBtSK" onClick={handleClick}>
          Sair
          <MdLogout fill="red" size={23} />
      </button>
		</div>
	)
}

export default ProfileHeaderSkeleton