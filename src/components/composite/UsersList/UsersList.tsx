import "./UsersList.css";

import User from "../../primitives/User/User";

type UserType = {
  display_name: string;
  profile_image_url: string;
};

function UsersList({ users }: {users: UserType[] | undefined}) {
  return (
    <div className="userList">
      {users && users.map((user, i) => {
        return (
          <div className="user">
            <User
              userName={user.display_name}
              profileImgURL={user.profile_image_url}
              key={i}
            />
          </div>
        );
      })}
    </div>
  );
}

export default UsersList;
