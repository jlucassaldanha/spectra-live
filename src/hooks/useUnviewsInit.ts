import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import ServerApi from "../utils/ServerApi";
import type { UnviewType, UserType } from "../types/UsersTypes";

export default function useUnviewsInit(
  moderatorsData: UserType[],
  setCheckedIds: Dispatch<SetStateAction<Record<string | number, boolean>>>,
  setUsersList: Dispatch<SetStateAction<UserType[]>>,
) {
  const [loadingSpec, setLoadingSpec] = useState(true);

  useEffect(() => {
    if (moderatorsData != undefined) {
      const getUnview = async () => {
        let restIds: number[] = [];
        try {
          const response = await ServerApi.get("/preferences/list/unview");
          const unviewList: UnviewType[] = response.data;

          restIds = unviewList.reduce<number[]>((acc, unview) => {
            setCheckedIds((prev) => ({
              ...prev,
              [unview.twitch_user_id]: true,
            }));

            if (
              !moderatorsData.find((m) => m.twitch_id == unview.twitch_user_id)
            ) {
              acc.push(unview.twitch_user_id);
            }

            return acc;
          }, []);
        } catch (error) {
          console.log(error);
        }

        if (restIds.length > 0) {
          ServerApi.post("/information/users", {
            twitch_ids: restIds,
          })
            .then((response) => {
              setUsersList((prev) => [...prev, ...response.data]);
            })
            .catch((error) => {
              console.log(error);
            });
        }
        setLoadingSpec(false);
      };
      getUnview();
    }
  }, [moderatorsData]);

  return {
    loadingSpec,
  };
}
