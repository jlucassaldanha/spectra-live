import IconMod from "../components/primitives/IconMod/IconMod";
import HeaderUsersList from "../components/composite/HeaderUsersList/HeaderUsersList";
import UsersList from "../components/composite/UsersList/UsersList";
import ProfileHeader from "../components/containers/ProfileHeader/ProfileHeader";
import UsersListSelect from "../components/containers/UsersListSelect/UsersListSelect";
import ToggleSwitch from "../components/ui/ToggleSwitch/ToggleSwitch";
import { useState } from "react";
import Button from "../components/ui/Button/Button";

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
  const [checkedIds, setCheckedIds] = useState<(string | number)[]>([])

  const toggleUserState = (key: number | string, value: boolean) => {
    setCheckedIds(prev => {
      const idsNow = value ? [...prev, key] : prev.filter(k => k != key)
      //console.log(idsNow)

      return idsNow
    })
  }

  return (
    <div>
      <div className="modDiv">
        <HeaderUsersList
          icon={<IconMod />}
          text="Moderadores"
          textColor="white"
        />
        <div className="infoBox">
          Selecione os moderadores que deseja retirar da listagem de
          espectadores.
        </div>
        <UsersListSelect 
          users={userlist} 
          selectedsIds={checkedIds}
          onChange={toggleUserState}
        />
        <div className="btDiv">
          <Button onClick={() => console.log(checkedIds)}>
            Salvar
          </Button>
        </div>
        
      </div>
    </div>
  );
}

export default Visualizer;
