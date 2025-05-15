// components/PortfolioItem.jsx
import { useState } from "react";
const PortfolioItem = ({ title, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado
  const togglePortfolio = () => {
    setIsOpen(!isOpen);
  };

  // Función para abrir el sitio en nueva pestaña
  const openInNewTab = () => {
    window.open(url, "_blank");
  };

  return (
    <section className="portfolio-item">
      <h3>{title}</h3>
      <p onClick={togglePortfolio} style={{ cursor: "pointer" }}>{isOpen ? "▲" : "▼"}</p>
      {isOpen && (
        <div
          className="iframe-container"
          onClick={openInNewTab}
          style={{ cursor: "pointer" }}
        >
          <iframe
            src={url}
            title={title}
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            // Evitar que el iframe capture el scroll para que el click en el contenedor funcione
            style={{ pointerEvents: "none" }}
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default PortfolioItem;
