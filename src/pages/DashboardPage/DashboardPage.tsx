import "./DashboardPage.css";

import IconMod from "../../components/old/MyIcons/ModIcon";

import { useEffect, useRef, useState } from "react";
import ServerApi from "../../utils/ServerApi";
import Button from "../../components/ui/Button/Button";
import ProfileHeader from "../../components/containers/ProfileHeader/ProfileHeader";
import HeaderUsersList from "../../components/composite/HeaderUsersList/HeaderUsersList";
import UsersListSelect from "../../components/containers/UsersListSelect/UsersListSelect";

type UserType = {
  display_name: string;
  profile_image_url: string;
};

type TwitchUserType = {
  twitch_id: number | string;
  display_name: string;
  id: number;
  login: string;
  profile_image_url: string;
};

function DashboardPage() {
  const [userData, setUserData] = useState<UserType>();
  const [moderatorsData, setModeratorsData] = useState<TwitchUserType[]>();

  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    ServerApi.get("/auth/me")
      .then((response) => {
        //console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error.status);
        if (error.status === 401) {
          window.location.href = "http://localhost:5173/home";
        }
      });
  }, []);

  useEffect(() => {
    if (userData != undefined) {
      ServerApi.get("/information/mods")
        .then((response) => {
          //console.log(response.data);
          setModeratorsData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userData]);

  
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
      <ProfileHeader profile_image_url={userData?.profile_image_url} display_name={userData?.display_name}/>
      
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
          users={moderatorsData} 
          selectedsIds={checkedIds}
          onChange={toggleUserState}
        />
        <div className="btDiv" >
          <Button onClick={() => console.log(checkedIds)}>
            Salvar
          </Button>
        </div>
      </div>

      {/*<div className="modDiv">
        <HeaderUsersList
          icon={<IconUser />}
          text="Espectadore"
          textColor="white"
        />
        <div className="infoBox">
          Adicione usuários que deseja retirar da listagem de espectadores.
        </div>
        <div className="addButton">
          <Button onClick={() => append({ value: "" })} type="button">
            Adicionar
            <IoIosAdd size={35} />
          </Button>
        </div>

        <div className="inputLogin">
          {fields.map((input, index) => (
            <div className="errorBlock" key={input.id}>
              <div className="loginBlock">
                <Input />
                <div>
                  <Button onClick={() => remove(index)} type="button">
                    <IoIosRemove size={35} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="save">
        <Button>Salvar</Button>
      </div>*/}
    </div>
  );
}

export default DashboardPage;
