import "./VerticalLogo.css";
import logoOnly from "/logo_only.png"
import logoText from "/logo_text.png"

function VerticalLogo() {
  return (
    
      <div className="VLogoDiv">
        <img className="logo" src={logoOnly} alt="Spectra Live Logo" />
        <img className="logoText" src={logoText} alt="Spectra Live Text"/>
      </div>
    
  );
}

export default VerticalLogo;
