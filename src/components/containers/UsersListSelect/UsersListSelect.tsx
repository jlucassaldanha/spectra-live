import "./UsersListSelect.css";

import User from "../../primitives/User/User";
import ToggleSwitch from "../../ui/ToggleSwitch/ToggleSwitch";
import { useState } from "react";

type UserType = {
  display_name: string;
  profile_image_url: string;
};

function UsersListSelect({ users }: {users: UserType[] | undefined}) {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const toggleUserState = (key: string, value: boolean) => {
    setChecked(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <div className="userList">
      {users?.map((user, i) => {
        return (
          <div className="user" key={i}>
            <User
              userName={user.display_name}
              profileImgURL={user.profile_image_url}
              key={i}
            />
            <ToggleSwitch 
              checked={!!checked[user.display_name]} 
              onChange={(value) => toggleUserState(user.display_name, value)} 
            />
          </div>
        )})}
    </div>
  );
}

export default UsersListSelect;
