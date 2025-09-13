import "./UsersListRemove.css";

import User from "../../primitives/User/User";
import { CiCircleRemove } from "react-icons/ci";

type UserType = {
  twitch_id: string | number
  display_name: string;
  profile_image_url: string;
};

type UserListRemoveProps = {
  users: UserType[] | undefined
  onRemove: (twitch_id: string | number) => void
}

function UsersListRemove({ users, onRemove }: UserListRemoveProps) {
  return (
    <div className="userList">
      {users && users.map((user, i) => {
        return (
          <div className="user">
            <User
              userName={user.display_name}
              profileImgURL={user.profile_image_url}
              profileURL={`https://twitch.tv/${user.display_name}`}
              target="_blank"
              key={i}
            />
            <button className="removeBt" onClick={() => onRemove(user.twitch_id)}>
              <CiCircleRemove size={27} fill="red"/>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default UsersListRemove;
