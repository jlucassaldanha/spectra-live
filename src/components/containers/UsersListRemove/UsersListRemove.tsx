import "./UsersListRemove.css";

import type { UserListRemoveProps } from "../../../types/UsersProps";

import User from "../../primitives/User/User";
import { CiCircleRemove } from "react-icons/ci";

function UsersListRemove({ users, onRemove }: UserListRemoveProps) {
  return (
    <div>
      {users &&
        users.map((user, i) => {
          return (
            <div className="user" key={user.twitch_id}>
              <User
                userName={user.display_name || ""}
                profileImgURL={user.profile_image_url || ""}
                profileURL={`https://twitch.tv/${user.display_name}`}
                target="_blank"
                key={i}
              />
              <button
                className="removeBt"
                onClick={() => onRemove(user.twitch_id)}
              >
                <CiCircleRemove size={27} fill="red" />
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default UsersListRemove;
