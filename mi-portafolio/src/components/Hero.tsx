import "../styles/Hero.css";
import HeroImage from "../../public/hero/Hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <picture>
        <img src={HeroImage} alt="personaje en un cohete" />
      </picture>
      <div className="hero-text">
        <h2>Hi, I'm</h2>
        <h1> ALEJANDRO</h1>
        <p>Frontend Developer & 3D Generalist</p></div>

    </div>
  );
};

export default Hero;
