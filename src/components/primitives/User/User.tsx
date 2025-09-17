import "./User.css";

import type { UserProps } from "../../../types/UsersProps";

function User({
  userName,
  profileImgURL,
  profileURL,
  target,
  size = "small",
  orientation = "horz",
}: UserProps) {
  const sizes = {
    small: { text: "userNameTextSm", img: "userImgSm" },
    mid: { text: "userNameTextMd", img: "userImgMd" },
    large: { text: "userNameTextLg", img: "userImgLg" },
  };

  return (
    <div className="userContainer">
      <a
        className={orientation == "horz" ? "userLinkH" : "userLinkV"}
        href={profileURL}
        target={target}
      >
        <img
          className={sizes[size].img}
          src={profileImgURL}
          alt="Profile Picture"
        />
        <span className={sizes[size].text}>{userName}</span>
      </a>
    </div>
  );
}

export default User;
