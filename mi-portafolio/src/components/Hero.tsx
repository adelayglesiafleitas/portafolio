import "../styles/Hero.css";
import HeroImage from "../../public/hero/Hero.png";
import { useLanguage } from "../context/LanguageContext"; // Importamos el hook del contexto

const Hero = () => {
  const { translations } = useLanguage(); // Obtenemos las traducciones
  const { hero } = translations; // Accedemos a las traducciones de "hero"

  return (
    <div className="hero">
      <picture>
        <img src={HeroImage} alt="personaje en un cohete" />
      </picture>
      <div className="hero-text">
        <h2>{hero.heading}</h2>
        <h1>{hero.name}</h1>
        <h2>{hero.subtitle}</h2>
      </div>
    </div>
  );
};

export default Hero;
