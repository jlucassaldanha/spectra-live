/* /containers */
export type UserDataType = {
  display_name: string | undefined;
  profile_image_url: string | undefined;
};

export type UserType = {
  twitch_id: number | string
} & UserDataType

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