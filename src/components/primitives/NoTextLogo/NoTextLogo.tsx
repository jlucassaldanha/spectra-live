import "./NoTextLogo.css";

import logoOnly from "/logo_only.png"

function NoTextLogo() {
  return (
      <div className="LogoDiv">
        <img className="logo" src={logoOnly} alt="Spectra Live Logo" />
      </div>
    
  );
}

export default NoTextLogo;
