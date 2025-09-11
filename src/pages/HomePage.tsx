import "./HomePage.css"

import Button from "../components/Button/Button"
import HomeSection from "../components/HomeSection/HomeSection"
import { FaTwitch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

// Página para login
function HomePage(){
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/profile")
    }

    return (
        <div className="mainDiv">   
            <HomeSection />
            <Button classname="buttonConnect" onClick={handleClick}>
                Conectar com a twitch
                <FaTwitch size={25} />
            </Button>
        </div>  
    )
}

export default HomePage