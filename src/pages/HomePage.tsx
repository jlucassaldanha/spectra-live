import "./HomePage.css"

import Button from "../components/Button/Button"
import HomeSection from "../components/HomeSection/HomeSection"
import { FaTwitch } from "react-icons/fa"

// Página para login
function HomePage(){
    const handleClick = () => {
        window.location.href = "http://localhost:8000/auth/login"
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