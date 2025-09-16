import "./ViewersPage.css";

import { useEffect, useRef, useState } from "react";
import type { UserType, ChatterModeratorType, ViewersResponseType } from "../../types/types";

import IconUser from "../../components/primitives/IconUser/IconUser";
import IconMod from "../../components/primitives/IconMod/IconMod";

import ProfileHeader from "../../components/containers/ProfileHeader/ProfileHeader";
import HeaderUsersList from "../../components/composite/HeaderUsersList/HeaderUsersList";
import UsersList from "../../components/composite/UsersList/UsersList";

import ProfileHeaderSkeleton from "../../components/skeletons/ProfileHeaderSkeleton/ProfileHeaderSkeleton";
import UserListSectionSkeleton from "../../components/skeletons/UserListSectionSkeleton/UserListSectionSkeleton";

import ServerApi from "../../utils/ServerApi";
import { ROOT_URL } from "../../constants/constants";

function ViewersPage() {
  const [userData, setUserData] = useState<UserType>(); // Usuario
  const [chatters, setChatters] = useState<ChatterModeratorType>()
  const [moderators, setModerators] = useState<ChatterModeratorType>()
  const [loadingHeader, setLoadingHeader] = useState(true)

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
      {loadingHeader ? 
        <ProfileHeaderSkeleton /> : 
        <ProfileHeader profile_image_url={userData?.profile_image_url} display_name={userData?.display_name}/>}
        {!chatters ? (
          <div className="mainSection">
            <UserListSectionSkeleton turns={5}/>
            <UserListSectionSkeleton turns={5}/>
          </div>
        ) : (
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
        )}
    </div>
  );
}

export default ViewersPage;
