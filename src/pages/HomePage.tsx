import "./HomePage.css"

import Button from "../components/Button/Button"
import HomeSection from "../components/HomeSection/HomeSection"
import { FaTwitch } from "react-icons/fa"

// Página para login
function HomePage(){
    return (
        <div className="mainDiv">   
            <HomeSection />
            <Button classname="buttonConnect" type="submit">
                Conectar com a twitch
                <FaTwitch size={25} />
            </Button>
        </div>  
    )
}

export default HomePage