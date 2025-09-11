import './DashboardPage.css'

import { MdLogout } from 'react-icons/md'

import IconMod from '../components/MyIcons/ModIcon'

import { useEffect, useRef, useState } from "react"
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

               window.location.href = "http://localhost:5173/home"
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        if (calledRef.current) return
        calledRef.current = true

        ServerApi.get("/auth/me")
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
            ServerApi.get("/information/mods")
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
            <div className="headerDiv">
                {userData != undefined && (
                    <div className="currentUserDiv">
                        <img className="currentUserImg" src={userData.profile_image_url} alt="" />
                        <strong>{userData.display_name}</strong>
                    </div>
                )}
                <strong>DashBoard</strong>
                <button className='logOutBt' onClick={handleClick}>
                    Sair
                    <MdLogout fill='red' size={23}/>
                </button>
            </div>
            
            <div className='modDiv'>
                <div className='secTitle'>
                    <strong>Moderadores</strong>
                    <IconMod />
                </div>
                <div className='usersDiv'>
                    {moderatorsData != undefined && (
                        moderatorsData.map((mod, i) => {
                            return (
                                <div key={i}>
                                    <User 
                                        userName={mod.display_name} 
                                        profileImgURL={mod.profile_image_url} 
                                        />
                                </div>
                    )}))}
                </div>
            </div>
            
        </div>
    )
}

export default DashboardPage