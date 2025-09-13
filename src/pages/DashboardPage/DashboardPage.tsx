import "./DashboardPage.css";

import { MdLogout } from "react-icons/md";

import IconMod from "../../components/old/MyIcons/ModIcon";

import { useEffect, useRef, useState } from "react";
import ServerApi from "../../utils/ServerApi";
import User from "../../components/old/User/User";
import IconUser from "../../components/old/MyIcons/UserIcon";
import Input from "../../components/old/Input/Input";
import Button from "../../components/ui/Button/Button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useFieldArray, useForm } from "react-hook-form";
import ProfileHeader from "../../components/containers/ProfileHeader/ProfileHeader";
import HeaderUsersList from "../../components/composite/HeaderUsersList/HeaderUsersList";
import UsersList from "../../components/composite/UsersList/UsersList";

type UserType = {
  display_name: string;
  profile_image_url: string;
};

type TwitchUserType = {
  twitch_id: number;
  display_name: string;
  id: number;
  login: string;
  profile_image_url: string;
};

function DashboardPage() {
  const [userData, setUserData] = useState<UserType>();
  const [moderatorsData, setModeratorsData] = useState<TwitchUserType[]>();

  const calledRef = useRef(false);

  type FormValues = {
    items: { name: string; quantity: number }[];
  };
  const { register, control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      items: [{ name: "", quantity: 1 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });


  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    ServerApi.get("/auth/me")
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (userData != undefined) {
      ServerApi.get("/information/mods")
        .then((response) => {
          console.log(response.data);
          setModeratorsData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userData]);

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
        <UsersList users={moderatorsData} />
      </div>

      <div className="modDiv">
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
      </div>
    </div>
  );
}

export default DashboardPage;
