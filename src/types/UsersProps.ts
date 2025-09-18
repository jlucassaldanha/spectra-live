import type { ReactNode } from "react";
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

export type UsersListProps = {
  users: UserType[] | undefined
  renderAction?: (user: UserType) => ReactNode
}
