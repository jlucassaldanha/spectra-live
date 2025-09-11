import { useEffect, useRef, useState } from "react"
import Button from "../components/Button/Button"
import ServerApi  from "../utils/ServerApi"

type UserDataType = {
    display_name: string,
    profile_image_url: string
}

function DashboardPage(){
   const [userData, setUserData] = useState<UserDataType>()

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

    return (
        <div>
            {userData != undefined && (
                <div>
                    {userData.display_name} <br />
                    {/*<img src={userData.profile_image_url} alt="Foto de perfil" />*/}
                </div>
            )}
            <Button onClick={handleClick}>
                Sair
            </Button>
        </div>
    )
}

export default DashboardPage