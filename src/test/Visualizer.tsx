import IconMod from "../components/primitives/IconMod/IconMod";
import HeaderUsersList from "../components/composite/HeaderUsersList/HeaderUsersList";
import UsersList from "../components/composite/UsersList/UsersList";
import ProfileHeader from "../components/containers/ProfileHeader/ProfileHeader";
import UsersListSelect from "../components/containers/UsersListSelect/UsersListSelect";
import ToggleSwitch from "../components/ui/ToggleSwitch/ToggleSwitch";
import { useState, type ChangeEvent } from "react";
import Button from "../components/ui/Button/Button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import IconUser from "../components/primitives/IconUser/IconUser";
import TextInput from "../components/ui/TextInput/TextInput";
import UsersListRemove from "../components/containers/UsersListRemove/UsersListRemove";
import NoTextLogo from "../components/primitives/NoTextLogo/NoTextLogo";

type UserType = {
  twitch_id: string;
  display_name: string;
  profile_image_url: string;
};
function Visualizer() {
  const userlist: UserType[] = [
    {
      twitch_id: "1",
      display_name: "jorge",
      profile_image_url:
        "https://lh3.googleusercontent.com/a/ACg8ocKi-1Tya3vdtQAn9rzASWR-6TrzJuSCfiuDa5T1SrL2WW03DXZU=s288-c-no",
    },
    {
      twitch_id: "2",
      display_name: "Kenan",
      profile_image_url:
        "https://lh3.googleusercontent.com/a/ACg8ocKi-1Tya3vdtQAn9rzASWR-6TrzJuSCfiuDa5T1SrL2WW03DXZU=s288-c-no",
    },
    {
      twitch_id: "3",
      display_name: "Carlos",
      profile_image_url:
        "https://lh3.googleusercontent.com/a/ACg8ocKi-1Tya3vdtQAn9rzASWR-6TrzJuSCfiuDa5T1SrL2WW03DXZU=s288-c-no",
    },
  ];

  const userData = {
    display_name: "ojoojao",
    profile_image_url:
      "https://lh3.googleusercontent.com/a/ACg8ocKi-1Tya3vdtQAn9rzASWR-6TrzJuSCfiuDa5T1SrL2WW03DXZU=s288-c-no",
  };
  const [checkedIds, setCheckedIds] = useState<Record<string | number, boolean>>({})

  const toggleUserState = (key: number | string, value: boolean) => {
    setCheckedIds(prev => {
      const idsNow = {...prev, [key]: value}
      //console.log(idsNow)
      return idsNow
    })
  }

  const [userList, setUsersList] = useState<UserType[]>([])
  const [inputValue, setInputValue] = useState<string>("")

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleAddUser = () => {
    if (inputValue.trim()) {
      const user = userlist.find(u => u.display_name === inputValue.trim()) // "api"
      if (user) {
        setUsersList(prev => [...prev, user])
      }
      setInputValue("")
    }
  }

  const handleRemoveUser = (twitch_id: number | string) => {
    setUsersList(prev => prev.filter(u => u.twitch_id !== twitch_id))
  }

  return (
    <div>
      <NoTextLogo />
      <div className="spectraBt">
        <Button classname="buttonConnect">
          <strong>Começar a Spectar!</strong>
          <NoTextLogo />
        </Button>
      </div>
    </div>
  );
}

export default Visualizer;
