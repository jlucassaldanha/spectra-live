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

type UnviewType = {
  twitch_user_id: number
  channel_id: number
  id: number
}

function DashboardPage() {
  const [userData, setUserData] = useState<UserType>();
  const [moderatorsData, setModeratorsData] = useState<TwitchUserType[]>();
  const [checkedIds, setCheckedIds] = useState<Record<string | number, boolean>>({})

  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    ServerApi.get("/auth/me")
      .then((response) => {
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
          setModeratorsData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userData]);

  useEffect(() => {
    if (moderatorsData != undefined) {
      ServerApi.get("/preferences/list/unview")
        .then((response) => {
          const unviewList: UnviewType[] = response.data   
          unviewList.map((unview) => {
            if (moderatorsData.find(m => m.twitch_id == unview.twitch_user_id)) {
              setCheckedIds(prev => {
                const now = {...prev, [unview.twitch_user_id]: true}
                console.log(now)
                return now
              })
            } 
          })
        }).catch((error) => {
          console.log(error)
        })
    }
  }, [moderatorsData])

  const toggleUserState = (key: number | string, value: boolean) => {
    setCheckedIds(prev => {
      return {...prev, [key]: value}
    })
  }

  const handleModSave = () => {
    const addUnviews = Object.entries(checkedIds)
      .filter(([key, value]) => value === true)
      .map(([key, value]) => key)
    
    const removeUnviews = Object.entries(checkedIds)
      .filter(([key, value]) => value === false)
      .map(([key, value]) => key)


    if (addUnviews.length > 0){
      ServerApi.post("/preferences/add/unview", {
        twitch_ids: addUnviews
      })
        .then((response) => console.log("add", response.data))
        .catch((error) => console.log(error))
    }

    if (removeUnviews.length > 0){
      ServerApi.delete("/preferences/remove/unview", {
        data: {twitch_ids: removeUnviews}
      })
        .then((response) => console.log("remove", response.data))
        .catch((error) => console.log(error))
    }
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
          <Button onClick={handleModSave}>
            Salvar
          </Button>
        </div>
      </div>

    </div>
  );
}

export default DashboardPage;
