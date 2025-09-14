import "./ViewersPage.css";

import IconUser from "../../components/primitives/IconUser/IconUser";
import UsersList from "../../components/composite/UsersList/UsersList";
import ProfileHeader from "../../components/containers/ProfileHeader/ProfileHeader";
import HeaderUsersList from "../../components/composite/HeaderUsersList/HeaderUsersList";
import IconMod from "../../components/primitives/IconMod/IconMod";
import ServerApi from "../../utils/ServerApi";
import { useEffect, useRef, useState } from "react";

type UserType = {
  twitch_id: string | number
  display_name: string;
  profile_image_url: string;
};

type ChatterModeratorType = {
  data: UserType[]
  total: number
}

type ViewersResponseType = {
  chatters: ChatterModeratorType, 
  moderators: ChatterModeratorType
}

function ViewersPage() {
  const [userData, setUserData] = useState<UserType>(); // Usuario
  const [chatters, setChatters] = useState<ChatterModeratorType>()
  const [moderators, setModerators] = useState<ChatterModeratorType>()

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
    const interval: number = setInterval(() => {
      ServerApi.get("/information/viewers")
        .then((response) => {
          const response_data: ViewersResponseType = response.data
          console.log(response_data)

          const orderedChatters = response_data.chatters.data.sort((a, b) => {
            return String(a.twitch_id).localeCompare(String(b.twitch_id))         
          })
          const orderedModerators = response_data.moderators.data.sort((a, b) => {
            return String(a.twitch_id).localeCompare(String(b.twitch_id))
          })

          setChatters({
            data: orderedChatters,
            total: response_data.chatters.total
          })
          setModerators({
            data: orderedModerators,
            total: response_data.moderators.total
          })
        })
        .catch((error) => console.log(error))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <ProfileHeader profile_image_url={userData?.profile_image_url} display_name={userData?.display_name}/>
      <div className="mainSection">
        <div className="modDiv">
          <HeaderUsersList
            icon={<IconMod />}
            text={`${moderators?.total || 0} Moderadores`}
            textColor="white"
          />
          <UsersList users={moderators?.data}/>
        </div>
        <div className="modDiv">
          <HeaderUsersList
            icon={<IconUser />}
            text={`${chatters?.total || 0} Espectadores`}
            textColor="white"
          />
          <UsersList users={chatters?.data}/>
        </div>
      </div>
    </div>
  );
}

export default ViewersPage;
