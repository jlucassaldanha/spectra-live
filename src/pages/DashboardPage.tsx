import { useEffect, useRef, useState } from "react"
import Button from "../components/Button/Button"
import ServerApi  from "../utils/ServerApi"
import User from "../components/User/User"

type UserDataType = {
    display_name: string,
    profile_image_url: string
}

type TwitchUserType = {
    twitch_id: number,
    display_name: string,
    id: number,
    login: string,
    profile_image_url: string
}

function DashboardPage(){
    const [userData, setUserData] = useState<UserDataType>()
    const [moderatorsData, setModeratorsData] = useState<TwitchUserType[]>()
    
    const calledRef = useRef(false)

    const handleClick = () => {
        ServerApi.post("/auth/logout")
            .then((response) => {
               console.log(response)
               setUserData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

        window.location.href = "http://localhost:5173/home"
    }

    useEffect(() => {
        if (calledRef.current) return
        calledRef.current = true

        ServerApi.get("/auth/me", {withCredentials: true})
            .then((response) => {
               console.log(response.data)
               setUserData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        if (userData != undefined) {
            ServerApi.get("/information/mods", {withCredentials: true})
            .then((response) => {
               console.log(response.data)
               setModeratorsData(response.data)
            })
            .catch((error) => {
                console.log(error)
            }) 
        }
    }, [userData])

    return (
        <div>
            {userData != undefined && (
                <div>
                    <User 
                        userName={userData.display_name} 
                        profileImgURL={userData.profile_image_url} 
                    />
                </div>
            )}
            <div>
                titulo sla
            </div>
            {moderatorsData != undefined && (
                moderatorsData.map((mod, i) => {
                    return  (
                        <div key={i}>
                            <User 
                                userName={mod.display_name} 
                                profileImgURL={mod.profile_image_url} 
                                />
                        </div>
                    )
                })
                
            )}
            <Button onClick={handleClick}>
                Sair
            </Button>
        </div>
    )
}

export default DashboardPage