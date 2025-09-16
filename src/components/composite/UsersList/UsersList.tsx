import "./UsersList.css";

import type { UserType } from "../../../types/types";
import User from "../../primitives/User/User";

function UsersList({ users }: {users: UserType[] | undefined}) {
  return (
    <div>
      {users && users.map((user, i) => {
        return (
          <div className="user" key={user.twitch_id}>
            <User
              userName={user.display_name || ""}
              profileImgURL={user.profile_image_url || ""}
              profileURL={`https://twitch.tv/${user.display_name}`}
              target="_blank"
              key={i}
            />
          </div>
        );
      })}
    </div>
  );
}

export default UsersList;
