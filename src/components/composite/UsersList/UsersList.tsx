import "./UsersList.css";

import User from "../../primitives/User/User";

type UserType = {
  twitch_id: number | string
  display_name: string;
  profile_image_url: string;
};

function UsersList({ users }: {users: UserType[] | undefined}) {
  return (
    <div className="userList">
      {users && users.map((user, i) => {
        return (
          <div className="user" key={user.twitch_id}>
            <User
              userName={user.display_name}
              profileImgURL={user.profile_image_url}
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
