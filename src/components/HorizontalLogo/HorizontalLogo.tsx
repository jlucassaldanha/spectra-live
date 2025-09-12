import "./HorizontalLogo.css";
import logoOnly from "/logo_only.png"
import logoText from "/logo_text.png"

function HorizontalLogo() {
  return (
    
      <div className="HLogoDiv">
        <img className="logo" src={logoOnly} alt="Spectra Live Logo" />
        <img className="logoText" src={logoText} alt="Spectra Live Text"/>
      </div>
    
  );
}

export default HorizontalLogo;
