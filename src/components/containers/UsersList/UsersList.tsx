import "./UsersList.css";

import type { UsersListProps } from "../../../types/UsersProps";
import User from "../../primitives/User/User";

function UsersList({ users, renderAction }: UsersListProps) {
  return (
    <div>
      {users?.map((user, i) => {
        return (
          <div className="user" key={user.twitch_id}>
            <User
              userName={user.display_name || ""}
              profileImgURL={user.profile_image_url || ""}
              profileURL={`https://twitch.tv/${user.display_name}`}
              target="_blank"
              key={i}
            />
            {renderAction && renderAction(user)}
          </div>
        );
      })}
    </div>
  );
}

export default UsersList;
