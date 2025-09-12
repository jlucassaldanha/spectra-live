import Button from "../components/new/Button/Button";
import HorizontalLogo from "../components/new/HorizontalLogo/HorizontalLogo";
import VerticalLogo from "../components/new/VerticalLogo/VerticalLogo";
import TextInput from "../components/new/TextInput/TextInput";
import IconMod from "../components/new/IconMod/IconMod";
import IconUser from "../components/new/IconUser/IconUser";
import User from "../components/new/User/User";
import HeaderUsersList from "../components/new/HeaderUsersList/HeaderUsersList";
import UsersList from "../components/new/UsersList/UsersList";

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
			profile_image_url: "https://lh3.googleusercontent.com/a/ACg8ocKi-1Tya3vdtQAn9rzASWR-6TrzJuSCfiuDa5T1SrL2WW03DXZU=s288-c-no"
		},
		{
			id: "2",
			display_name: "Kenan",
			profile_image_url: "https://lh3.googleusercontent.com/a/ACg8ocKi-1Tya3vdtQAn9rzASWR-6TrzJuSCfiuDa5T1SrL2WW03DXZU=s288-c-no"
		},
		{
			id: "3",
			display_name: "Carlos",
			profile_image_url: "https://lh3.googleusercontent.com/a/ACg8ocKi-1Tya3vdtQAn9rzASWR-6TrzJuSCfiuDa5T1SrL2WW03DXZU=s288-c-no"
		},
	] 
  return (
    <div>
		<HeaderUsersList icon={<IconMod />} text="Moderadores" textColor="white"/>
      <UsersList type="mod" users={userlist}/>
    </div>
  );
}

export default Visualizer;
