import { useState } from "react";
import "../styles/Navbar.css";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { setLanguage, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false); // Cierra el menú al cambiar idioma
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón hamburguesa para móviles */}
      <button className="menu-button" onClick={toggleNavbar}>
        ☰
      </button>

      <nav className="navbar">
        <div className="navbar-container">
          <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>


            {/* Idioma dentro del menú en móvil */}
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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
