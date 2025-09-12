import "./HomePage.css";

import Button from "../../components/new/Button/Button";
import { FaTwitch } from "react-icons/fa";
import HorizontalLogo from "../../components/new/HorizontalLogo/HorizontalLogo";

// Página para login
function HomePage() {
  const handleClick = () => {
    window.location.href = "http://localhost:8000/auth/login";
  };

  return (
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
  );
}

export default HomePage;
