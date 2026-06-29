import "./DashboardPage.css";

import { useState, type ChangeEvent } from "react";
import type { UserType } from "../../types/UsersTypes";

import IconMod from "../../components/primitives/IconMod/IconMod";
import IconUser from "../../components/primitives/IconUser/IconUser";
import NoTextLogo from "../../components/primitives/NoTextLogo/NoTextLogo";

import ProfileHeader from "../../components/containers/ProfileHeader/ProfileHeader";
import HeaderUsersList from "../../components/composite/HeaderUsersList/HeaderUsersList";
import UsersList from "../../components/containers/UsersList/UsersList";

import ToggleSwitch from "../../components/ui/ToggleSwitch/ToggleSwitch";
import RemoveButton from "../../components/ui/RemoveButton/RemoveButton";
import TextInput from "../../components/ui/TextInput/TextInput";
import Button from "../../components/ui/Button/Button";

import ProfileHeaderSkeleton from "../../components/skeletons/ProfileHeaderSkeleton/ProfileHeaderSkeleton";
import UserListSectionSkeleton from "../../components/skeletons/UserListSectionSkeleton/UserListSectionSkeleton";

import { ROOT_URL } from "../../constants/constants";

import useProfileInit from "../../hooks/useProfileInit";
import useModsInit from "../../hooks/useModsInit";
import useUnviewsInit from "../../hooks/useUnviewsInit";
import useUnviewsConfig from "../../hooks/useUnviewsConfig";

function DashboardPage() {
  const [checkedIds, setCheckedIds] = useState<Record<string | number, boolean>>({}); // ids dos mods
  const [userList, setUsersList] = useState<UserType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  
  const { userData, loadingHeader } = useProfileInit();
  const { moderatorsData, loadingMod } = useModsInit(userData)
  const { loadingSpec } = useUnviewsInit(
    moderatorsData,  
    setCheckedIds, 
    setUsersList
  )

  const {
		saved,
		isSaving,
		foundUser,
		foundUserFormat,
		handleAddUser,
		handleRemoveUser,
		handleSave
	} = useUnviewsConfig(
    inputValue,
    checkedIds, 
    setCheckedIds, 
    setUsersList, 
    setInputValue
  )

  const toggleUserState = (key: number | string, value: boolean) => {
    setCheckedIds((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const spectar = () => {
    window.location.href = ROOT_URL + "/viewers";
  };

  return (
    <div>
      {loadingHeader ? (
        <ProfileHeaderSkeleton />
      ) : (
        <ProfileHeader
          profile_image_url={userData?.profile_image_url}
          display_name={userData?.display_name}
        />
      )}

      <div className="spectraBt">
        <Button classname="buttonConnect" onClick={spectar}>
          <strong>Começar a Spectar!</strong>
          <NoTextLogo />
        </Button>
      </div>
      <div className="mainSectionDashboard">
        {loadingMod ? (
          <UserListSectionSkeleton turns={5} />
        ) : (
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
            <UsersList 
              users={moderatorsData}
              renderAction={(user) => (
                <ToggleSwitch 
                  checked={!!checkedIds[user.twitch_id]}
                  onChange={(value) => toggleUserState(user.twitch_id, value)}
                />
              )}
            />
          </div>
        )}
        {loadingSpec ? (
          <UserListSectionSkeleton turns={2} type="input" />
        ) : (
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
              <Button onClick={handleAddUser}>Adicionar</Button>
            </div>
            <div className="userNotFound">
              {!foundUser && foundUserFormat && "Usuário não encontrado"}
              {!foundUserFormat && foundUser && "Formato de nome de usuário não suportado"}
              {!foundUserFormat && !foundUser && "ERRO NO SERVIDOR! ENTRE EM CONTATO"}
            </div>
            <UsersList 
              users={userList}
              renderAction={(user) => (
                <RemoveButton onClick={() => handleRemoveUser(user.twitch_id)} />
              )}
            />
          </div>
        )}
      </div>
      <div
        className={"statusSaved " + (saved && !isSaving ? "saved" : "saving")}
      >
        {isSaving && "Salvando alterações..."}
        {saved && !isSaving && "Alterações salvas com sucesso!"}
      </div>
      <div className="btDiv">
        <Button onClick={handleSave}>Salvar</Button>
      </div>
    </div>
  );
}

export default DashboardPage;
