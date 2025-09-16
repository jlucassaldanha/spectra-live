import { type ChangeEvent, type ReactNode } from "react"

/* /primitives */
export type PropsUser = {
	userName: string
	profileImgURL: string
	profileURL: string
	target?: "_blank" | "_parent" | "_self" | "_top" | undefined
	size?: "small" | "large" | "mid"
	orientation?: "vert" | "horz"
}

/* /ui */
export type ButtonType = { 
	children?: React.ReactNode 
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	type?: "reset" | "submit" | "button" | undefined 
	classname?: "buttonConnect"
}

export type TextInputProps = {
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export type SwitchProps = {
	checked: boolean
	onChange: (checked: boolean) => void
}

/* /composite */
export type PropsHeaderUsersList = {
	icon: ReactNode 
	text: string
	textColor: "red" | "white"
}

export type UserType = {
  twitch_id: number | string
} & UserDataType

/* /containers */
export type UserDataType = {
  display_name: string | undefined;
  profile_image_url: string | undefined;
};

export type UserListRemoveProps = {
  users: UserType[] | undefined
  onRemove: (twitch_id: string | number) => void
}

export type UserListSelectProps = {
  users: UserType[] | undefined
  selectedsIds: Record<string | number, boolean>
  onChange: (key: string | number, value: boolean) => void
}

/* /pages */
export type TwitchUserType = {
  id: number;
  login: string;
} & UserType

export type UnviewType = {
  twitch_user_id: number
  channel_id: number
  id: number
}

export type ChatterModeratorType = {
  data: UserType[]
  total: number
}

export type ViewersResponseType = {
  chatters: ChatterModeratorType, 
  moderators: ChatterModeratorType
}