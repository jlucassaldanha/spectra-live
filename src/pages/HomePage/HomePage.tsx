import "./HomePage.css";

import Button from "../../components/ui/Button/Button";
import { FaTwitch } from "react-icons/fa";
import HorizontalLogo from "../../components/primitives/HorizontalLogo/HorizontalLogo";
import { API_URL } from "../../constants/constants";

// Página para login
function HomePage() {
  const handleClick = () => {
    window.location.href = API_URL+"/auth/login";
  };

  return (
    <div className="homeDiv">
      <img className="img" src="./setup1.jpg" alt="Ilustrativa" /> 
      <div className="mainDiv">
        <div className="logoTitle">
          <HorizontalLogo />
          <p>Conecte-se para começar a spectar!</p>
        </div>
        <Button classname="buttonConnect" onClick={handleClick}>
          Conectar com a twitch
          <FaTwitch size={25} />
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
