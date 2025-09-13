import "./UsersListSelect.css";

import User from "../../primitives/User/User";
import ToggleSwitch from "../../ui/ToggleSwitch/ToggleSwitch";

type UserType = {
  twitch_id: number | string
  display_name: string;
  profile_image_url: string;
};

type UserListSelectProps = {
  users: UserType[] | undefined
  selectedsIds: (string | number)[]
  onChange: (key: string | number, value: boolean) => void
}

function UsersListSelect({ users, selectedsIds, onChange }: UserListSelectProps) {
  return (
    <div className="userList">
      {users?.map((user, i) => {
        return (
          <div className="user" key={user.twitch_id}>
            <User
              userName={user.display_name}
              profileImgURL={user.profile_image_url}
              key={i}
            />
            <ToggleSwitch 
              checked={selectedsIds.includes(user.twitch_id)} 
              onChange={(value) => onChange(user.twitch_id, value)} 
            />
          </div>
        )})}
    </div>
  );
}

export default UsersListSelect;
