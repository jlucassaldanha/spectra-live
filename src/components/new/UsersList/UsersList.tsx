import "./UsersList.css";

import User from "../../new/User/User";



type UserType = {
  id: string;
  display_name: string;
  profile_image_url: string;
};

type Props = {
  users: UserType[];
  type: "user" | "mod";
};

function UsersList({ users }: Props) {
  return (
    <div className="userList" >
      {users.map((user, i) => {
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
