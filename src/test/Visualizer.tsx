import Button from "../components/ui/Button/Button";
import HorizontalLogo from "../components/primitives/HorizontalLogo/HorizontalLogo";
import VerticalLogo from "../components/primitives/VerticalLogo/VerticalLogo";
import TextInput from "../components/ui/TextInput/TextInput";
import IconMod from "../components/primitives/IconMod/IconMod";
import IconUser from "../components/primitives/IconUser/IconUser";
import User from "../components/primitives/User/User";
import HeaderUsersList from "../components/composite/HeaderUsersList/HeaderUsersList";
import UsersList from "../components/composite/UsersList/UsersList";
import ProfileHeader from "../components/containers/ProfileHeader/ProfileHeader";
import ServerApi from "../utils/ServerApi";

type UserType = {
  id: string;
  display_name: string;
  profile_image_url: string;
};
function Visualizer() {
  const userlist: UserType[] = [
    {
      id: "1",
      display_name: "jorge",
      profile_image_url:
        "https://lh3.googleusercontent.com/a/ACg8ocKi-1Tya3vdtQAn9rzASWR-6TrzJuSCfiuDa5T1SrL2WW03DXZU=s288-c-no",
    },
    {
      id: "2",
      display_name: "Kenan",
      profile_image_url:
        "https://lh3.googleusercontent.com/a/ACg8ocKi-1Tya3vdtQAn9rzASWR-6TrzJuSCfiuDa5T1SrL2WW03DXZU=s288-c-no",
    },
    {
      id: "3",
      display_name: "Carlos",
      profile_image_url:
        "https://lh3.googleusercontent.com/a/ACg8ocKi-1Tya3vdtQAn9rzASWR-6TrzJuSCfiuDa5T1SrL2WW03DXZU=s288-c-no",
    },
  ];

  const userData = {
		display_name: "ojoojao",
		profile_image_url: "https://lh3.googleusercontent.com/a/ACg8ocKi-1Tya3vdtQAn9rzASWR-6TrzJuSCfiuDa5T1SrL2WW03DXZU=s288-c-no"
	}

  return (
    <div>
		
		<ProfileHeader display_name={userData.display_name} profile_image_url={userData.profile_image_url}/>
		<br></br>
      <HeaderUsersList
        icon={<IconMod />}
        text="Moderadores"
        textColor="white"
      />
      <UsersList type="mod" users={userlist} />
    </div>
  );
}

export default Visualizer;
