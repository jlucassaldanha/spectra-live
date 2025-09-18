import "./ProfileHeader.css";

import type { UserDataType } from "../../../types/UsersTypes";

import { MdLogout } from "react-icons/md";
import HorizontalLogo from "../../primitives/HorizontalLogo/HorizontalLogo";
import User from "../../primitives/User/User";

import { ROOT_URL } from "../../../constants/constants";
import { handleLogoutClick } from "../../../utils/handleClicks";

function ProfileHeader({ display_name, profile_image_url }: UserDataType) {
  return (
    <div className="userHeaderDiv">
      <User
        userName={display_name || ""}
        profileImgURL={profile_image_url || "./default_avatar.jpg"}
        profileURL={ROOT_URL + "/dashboard"}
        size="mid"
      />
      <div className="logoDiv">
        <HorizontalLogo />
      </div>
      <button className="logOutBt" onClick={handleLogoutClick}>
        Sair
        <MdLogout fill="red" size={23} />
      </button>
    </div>
  );
}

export default ProfileHeader;
