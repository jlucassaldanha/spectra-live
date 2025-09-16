import "./UsersListSelect.css";

import type { UserListSelectProps } from "../../../types/types";

import User from "../../primitives/User/User";
import ToggleSwitch from "../../ui/ToggleSwitch/ToggleSwitch";

function UsersListSelect({ users, selectedsIds, onChange }: UserListSelectProps) {
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
            <ToggleSwitch 
              checked={!!selectedsIds[user.twitch_id]} 
              onChange={(value) => onChange(user.twitch_id, value)} 
            />
          </div>
        )})}
    </div>
  );
}

export default UsersListSelect;
