import "./UsersList.css";

import CountContainer from "../CountContainer/CountContainer";
import User from "../../primitives/User/User";

import IconUser from "../../primitives/IconUser/IconUser";
import IconMod from "../../primitives/IconMod/IconMod";

type UserType = {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  email: string;
  created_at: string;
};

type Props = {
  users: UserType[];
  type: "user" | "mod";
};

function UsersList({ users, type }: Props) {
  return (
    <div className="useSection">
      <div className="countHeader">
        <CountContainer
          icon={type === "user" ? <IconUser fillColor="white" /> : <IconMod />}
          text={
            users.length.toString() +
            (type === "user" ? " Espectadores" : " Moderadores")
          }
          textColor="white"
        />
      </div>
      {users.map((user, i) => {
        return (
          <User
            userName={user.display_name}
            profileImgURL={user.profile_image_url}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default UsersList;
