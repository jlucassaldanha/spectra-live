import "./IconSection.css";
import MainIcon from "../MyIcons/MainIcon";

function IconSection() {
  return (
    <section className="section">
      <MainIcon />
      <h1 className="title">Saiba quem está te assistindo em tempo real!</h1>
      <div className="text">
        <p>
          Com o <strong>Spectra Live</strong> é possivel ver quem está te
          assistindo em tempo real.
        </p>
        <p>Conecte-se e tenha um feedback mais imersivo com o seu público!</p>
      </div>
    </section>
  );
}

export default IconSection;
