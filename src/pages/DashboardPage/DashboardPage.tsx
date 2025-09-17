import "./DashboardPage.css";

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import type { UserDataType, TwitchUserType, UnviewType } from "../../types/types";

import IconMod from "../../components/primitives/IconMod/IconMod";
import IconUser from "../../components/primitives/IconUser/IconUser";
import NoTextLogo from "../../components/primitives/NoTextLogo/NoTextLogo";

import ProfileHeader from "../../components/containers/ProfileHeader/ProfileHeader";
import HeaderUsersList from "../../components/composite/HeaderUsersList/HeaderUsersList";
import UsersListSelect from "../../components/containers/UsersListSelect/UsersListSelect";
import UsersListRemove from "../../components/containers/UsersListRemove/UsersListRemove";

import TextInput from "../../components/ui/TextInput/TextInput";
import Button from "../../components/ui/Button/Button";

import ProfileHeaderSkeleton from "../../components/skeletons/ProfileHeaderSkeleton/ProfileHeaderSkeleton";
import UserListSectionSkeleton from "../../components/skeletons/UserListSectionSkeleton/UserListSectionSkeleton";

import ServerApi from "../../utils/ServerApi";
import { ROOT_URL } from "../../constants/constants";
import { AxiosError } from "axios";

function DashboardPage() {
  const [userData, setUserData] = useState<UserDataType>(); // Usuario
  const [moderatorsData, setModeratorsData] = useState<TwitchUserType[]>();
  const [checkedIds, setCheckedIds] = useState<Record<string | number, boolean>>({}) // ids dos mods
  const [userList, setUsersList] = useState<TwitchUserType[]>([])
  const [inputValue, setInputValue] = useState<string>("")
  const [loadingHeader, setLoadingHeader] = useState(true)
  const [loadingMod, setLoadingMod] = useState(true)
  const [loadingSpec, setLoadingSpec] = useState(true)
  const [saved, setSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [foundUser, setFoundUser] = useState(true)
  const [foundUserFormat, setFoundUserFormat] = useState(true)

  // Inicializações
  const calledRef = useRef(false); 

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    ServerApi.get("/auth/me")
      .then((response) => {
        setUserData(response.data);
        setLoadingHeader(false)
      })
      .catch((error) => {
        console.log(error.status);
        if (error.status === 401) {
          window.location.href = ROOT_URL + "/home";
        }
      });
  }, []);
  
  useEffect(() => {
    if (userData != undefined) {
      ServerApi.get("/information/mods")
        .then((response) => {
          setModeratorsData(response.data);
          setLoadingMod(false)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userData]);

  useEffect(() => {
    if (moderatorsData != undefined) {
      const getUnview = async () => {
        let restIds: number[] = []
        try {
          const response = await ServerApi.get("/preferences/list/unview")
          const unviewList: UnviewType[] = response.data

          restIds = unviewList.reduce<number []>((acc, unview) => {
              setCheckedIds(prev => {
                return {...prev, [unview.twitch_user_id]: true}
              })
              if (!(moderatorsData.find(m => m.twitch_id == unview.twitch_user_id))) {
                acc.push(unview.twitch_user_id)
              }
              return acc
            }, [])

        } catch (error) {
          console.log(error)
        }

        if (restIds.length > 0) {
          const params = new URLSearchParams()
          restIds.forEach(id => params.append("twitch_ids", id.toString()))

          ServerApi.get("/information/users", {
            params: params
          })
          .then((response) => {
            setUsersList(prev => [...prev, ...response.data])
          })
          .catch((error) => {
            console.log(error)
          })
        }
        setLoadingSpec(false)
      }
      getUnview()
    }
  }, [moderatorsData])
  // Acaba inicializações

  // Mods
  const toggleUserState = (key: number | string, value: boolean) => {
    setCheckedIds(prev => {
      return {...prev, [key]: value}
    })
  }

  // Users
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleAddUser = async () => {
    if (inputValue.trim()) {
      try {
        const response = await ServerApi.get("/information/user", {
          params: {"display_name": inputValue.trim()}
        })

        const user = response.data

        if (!userList.some(u => u.twitch_id === user.twitch_id)) {
          setUsersList(prev => [...prev, user])
          setCheckedIds(prev => {
            return {...prev, [user.twitch_id]: true}
          })
          setInputValue("")
        }

        setFoundUser(true)
        setFoundUserFormat(true)
      } catch (error) {
        
        if (error instanceof AxiosError) {
          if (error.response?.status === 404) {
            setFoundUser(false)
          } else if (error.response?.status === 400) {
            setFoundUserFormat(false)
          } 
        }
      }
    }
  }

  const handleRemoveUser = (twitch_id: number | string) => {
    setUsersList(prev => prev.filter(u => u.twitch_id !== twitch_id))
    setCheckedIds(prev => {
      return {...prev, [twitch_id]: false}
    })
  }

  const handleSave = async () => {
    setSaved(false)
    setIsSaving(true)
    
    try {
      const addUnviews = Object.entries(checkedIds)
        .filter(([_key, value]) => value === true)
        .map(([key, _value]) => key)
      
      const removeUnviews = Object.entries(checkedIds)
        .filter(([_key, value]) => value === false)
        .map(([key, _value]) => key)

      if (addUnviews.length > 0) {
        await ServerApi.post("/preferences/add/unview", {
          twitch_ids: addUnviews
        })
      }

      if (removeUnviews.length > 0){
        await ServerApi.delete("/preferences/remove/unview", {
          data: {twitch_ids: removeUnviews}
        })
      }

      setSaved(true)
    } catch (error) {
      console.log(error)
    } finally {
      setIsSaving(false)
    }
  }

  const spectar = () => {
    window.location.href = ROOT_URL+"/viewers"
  }

  return (
    <div>
      {loadingHeader ? 
        <ProfileHeaderSkeleton /> : 
        <ProfileHeader profile_image_url={userData?.profile_image_url} display_name={userData?.display_name}/>}
      
      <div className="spectraBt">
        <Button classname="buttonConnect" onClick={spectar}>
          <strong>Começar a Spectar!</strong>
          <NoTextLogo />
        </Button>
      </div>
      <div className="mainSection">
        {loadingMod ? <UserListSectionSkeleton turns={5} /> : (
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
          </div>
        )}
        {loadingSpec ? <UserListSectionSkeleton turns={2} type="input"/> : (
          <div className="modDiv">
            <HeaderUsersList
              icon={<IconUser />}
              text="Espectadores"
              textColor="white"
            />
            <div className="infoBox">
              Adicione usuários que deseja retirar da listagem de espectadores.
            </div>
            <div className="addUserDiv">
              <TextInput value={inputValue} onChange={handleChangeInput} />
              <Button onClick={handleAddUser}>
                Adicionar
              </Button>
            </div>
            <div className="userNotFound">
              {!foundUser && "Usuário não encontrado"}
              {!foundUserFormat && "Formato de nome de usuário não suportado"}
            </div>
            <UsersListRemove
              users={userList}
              onRemove={handleRemoveUser}
            />
          </div>
        )}
      </div>
      <div className={"statusSaved " + (saved && !isSaving ? "saved" : "saving")} >
        {isSaving && "Salvanado alterações..."}
        {saved && !isSaving && "Atualização salva com sucesso!"}
      </div>
      <div className="btDiv" >
        <Button onClick={handleSave}>
          Salvar
        </Button>
      </div>
    </div>
  );
}

export default DashboardPage;
