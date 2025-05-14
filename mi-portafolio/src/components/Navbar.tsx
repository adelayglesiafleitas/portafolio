import "../styles/Navbar.css";
import { useLanguage } from "../context/LanguageContext"; // Importamos el hook para acceder al contexto

const Navbar = () => {
  const { setLanguage, language } = useLanguage(); // Extraemos la función para cambiar el idioma y el idioma actual

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang); // Cambia el idioma cuando se hace clic en el idioma seleccionado
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="language-container">
          <h3
            className={`language ${language === "en" ? "active" : ""}`}
            onClick={() => handleLanguageChange("en")}
          >
            EN
          </h3>
          <span>/</span>
          <h3
            className={`language ${language === "es" ? "active" : ""}`}
            onClick={() => handleLanguageChange("es")}
          >
            ES
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
