import "./ViewersPage.css";

import IconUser from "../../components/primitives/IconUser/IconUser";
import IconMod from "../../components/primitives/IconMod/IconMod";

import ProfileHeader from "../../components/containers/ProfileHeader/ProfileHeader";
import HeaderUsersList from "../../components/composite/HeaderUsersList/HeaderUsersList";
import UsersList from "../../components/containers/UsersList/UsersList";

import ProfileHeaderSkeleton from "../../components/skeletons/ProfileHeaderSkeleton/ProfileHeaderSkeleton";
import UserListSectionSkeleton from "../../components/skeletons/UserListSectionSkeleton/UserListSectionSkeleton";

import useProfileInit from "../../hooks/useProfileInit";
import useUpadateViewers from "../../hooks/useUpdateViewers";

function ViewersPage() {
  const { userData, loadingHeader } = useProfileInit();
  const { chatters, moderators } = useUpadateViewers();

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
      {!chatters ? (
        <div className="mainSection">
          <div></div>
          <div className="listSection">
            <UserListSectionSkeleton turns={5} />
            <UserListSectionSkeleton turns={5} />
          </div>
        </div>
      ) : (
        <div className="mainSection">
          <div className="total">
            <HeaderUsersList
              icon={<IconUser fillColor="red" />}
              text={`${(moderators?.total || 0) + (chatters?.total || 0)} Espectadores totais`}
              textColor="red"
              background="no"
            />
          </div>
          {moderators?.total || 0 > 0 ? 
          ( <div className="modDiv">
              <HeaderUsersList
                icon={<IconMod />}
                text={`${moderators?.total || 0} Moderadores`}
                textColor="white"
              />
              <UsersList users={moderators?.data} />
            </div>) : ""}
          {chatters?.total || 0 > 0 ? 
          ( <div className="modDiv">
              <HeaderUsersList
                icon={<IconUser />}
                text={`${chatters?.total || 0} Espectadores`}
                textColor="white"
              />
              <UsersList users={chatters?.data} />
            </div>) : ""}
        </div>
      )}
    </div>
  );
}

export default ViewersPage;
