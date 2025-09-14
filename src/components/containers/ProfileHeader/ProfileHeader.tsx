import { MdLogout } from "react-icons/md";
import "./ProfileHeader.css"
import User from "../../primitives/User/User";
import ServerApi from "../../../utils/ServerApi";
import HorizontalLogo from "../../primitives/HorizontalLogo/HorizontalLogo";


type UserDataType = {
  display_name: string | undefined;
  profile_image_url: string | undefined;
};

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

function ProfileHeader({display_name, profile_image_url}: UserDataType) {
	return (
		<div className="userHeaderDiv">
			<User 
        userName={display_name? display_name : ""} 
        profileImgURL={profile_image_url? profile_image_url : "./default_avatar.png"} 
        profileURL={"http://localhost:5173/dashboard"}
        size="mid"
      />
      <div className="logoDiv">
        <HorizontalLogo />
      </div>
			<button className="logOutBt" onClick={handleClick}>
				Sair
				<MdLogout fill="red" size={23} />
			</button>
		</div>
	)
}

export default ProfileHeader