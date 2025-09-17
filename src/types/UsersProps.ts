import type { UserType } from "./UsersTypes";

/* /primitives */
export type UserProps = {
  userName: string;
  profileImgURL: string;
  profileURL: string;
  target?: "_blank" | "_parent" | "_self" | "_top" | undefined;
  size?: "small" | "large" | "mid";
  orientation?: "vert" | "horz";
};

export type UserListRemoveProps = {
  users: UserType[] | undefined;
  onRemove: (twitch_id: string | number) => void;
};

export type UserListSelectProps = {
  users: UserType[] | undefined;
  selectedsIds: Record<string | number, boolean>;
  onChange: (key: string | number, value: boolean) => void;
};
