import "./HomeSection.css";
import logoOnly from "/logo_only.png"
import logoText from "/logo_text.png"

function HomeSection() {
  return (
    <section className="section">
      <div className="logoDiv">
        <img className="logo" src={logoOnly} alt="Spectra Live Logo" />
        <img className="logoText" src={logoText} alt="Spectra Live Text"/>
      </div>
      <p>Conecte-se para começar a spectar!</p>
    </section>
  );
}

export default HomeSection;
