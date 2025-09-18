import "./HomePage.css";

import Button from "../../components/ui/Button/Button";
import { FaTwitch } from "react-icons/fa";
import HorizontalLogo from "../../components/primitives/HorizontalLogo/HorizontalLogo";
import { API_URL } from "../../constants/constants";
import UpdateInfo from "../../components/composite/UpdateInfo/UpdateInfo";
import Contact from "../../components/composite/Contact/Contact";

// Página para login
function HomePage() {
  const handleClick = () => {
    window.location.href = API_URL+"/auth/login";
  };

  return (
    <div className="homeDiv">
      <img className="img" src="./setup1.jpg" alt="Ilustrativa" /> 
      <div className="mainDiv">
        <div className="topDiv">
          <div className="update">
            <UpdateInfo />
          </div>
        </div>
        <div className="centerDiv">
          <div className="logoTitle">
            <HorizontalLogo />
            <p>Conecte-se para começar a spectar!</p>
          </div>
          <Button classname="buttonConnect" onClick={handleClick}>
            Conectar com a twitch
            <FaTwitch size={25} />
          </Button>
        </div>
        <div className="bottomDiv">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
