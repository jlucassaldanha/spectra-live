import "./DashboardPage.css";

import { MdLogout } from "react-icons/md";

import IconMod from "../components/old/MyIcons/ModIcon";

import { useEffect, useRef, useState } from "react";
import ServerApi from "../utils/ServerApi";
import User from "../components/old/User/User";
import IconUser from "../components/old/MyIcons/UserIcon";
import Input from "../components/old/Input/Input";
import Button from "../components/new/Button/Button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useFieldArray, useForm } from "react-hook-form";

type UserDataType = {
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
  const [userData, setUserData] = useState<UserDataType>();
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
      <div className="headerDiv">
        {userData != undefined && (
          <div className="currentUserDiv">
            <img
              className="currentUserImg"
              src={userData.profile_image_url}
              alt=""
            />
            <strong>{userData.display_name}</strong>
          </div>
        )}
        <button className="logOutBt" onClick={handleClick}>
          Sair
          <MdLogout fill="red" size={23} />
        </button>
      </div>
      <div className="modDiv">
        <div className="secTitle">
          <strong>Moderadores</strong>
          <IconMod />
        </div>
        <div className="infoBox">
          Selecione os moderadores que deseja retirar da listagem de
          espectadores.
        </div>
        <div className="usersDiv">
          {moderatorsData != undefined &&
            moderatorsData.map((mod, i) => {
              return (
                <div className="userDiv" key={i}>
                  <input
                    className="check"
                    type="checkbox"
                    name="sla"
                    id="sla"
                  />
                  <User
                    userName={mod.display_name}
                    profileImgURL={mod.profile_image_url}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="modDiv">
        <div className="secTitle">
          <strong>Espectadores</strong>
          <IconUser />
        </div>
        <div className="infoBox">
          Adicione usuários que deseja retirar da listagem de espectadores.
        </div>
        <div className="addButton">
          <Button
            icon={<IoIosAdd size={35} />}
            onClick={() => append({ value: "" })}
            type="button"
          >
            Adicionar
          </Button>
        </div>

        <div className="inputLogin">
          {fields.map((input, index) => (
            <div className="errorBlock" key={input.id}>
              <div className="loginBlock">
                <Input />
                <div>
                  <Button
                    icon={<IoIosRemove size={35} />}
                    onClick={() => remove(index)}
                    type="button"
                  />
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
