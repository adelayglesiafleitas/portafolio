// components/PortfolioItem.jsx
import React, { useState } from "react";

interface PortfolioItemProps {
  title: string;
  url: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const togglePortfolio = () => {
    setIsOpen(!isOpen);
  };

  const openInNewTab = () => {
    window.open(url, "_blank");
  };

  return (
    <section className="portfolio-item">
      <h3>{title}</h3>
      <p
        onClick={togglePortfolio}
        style={{ cursor: "pointer" }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && togglePortfolio()}
        aria-expanded={isOpen}
      >
        {isOpen ? "▲" : "▼"}
      </p>

      {isOpen && (
        <div
          className="iframe-container"
          onClick={openInNewTab}
          style={{
            cursor: "pointer",
            border: "1px solid #ccc",
            padding: "8px",
            position: "relative",
            minHeight: "200px",
            backgroundColor: "#f9f9f9"
          }}
        >
          {!iframeError ? (
            <iframe
              src={url}
              title={title}
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              onError={() => setIframeError(true)}
              style={{
                width: "100%",
                height: "300px",
                pointerEvents: "none"
              }}
            />
          ) : (
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <p>No se puede mostrar la vista previa.</p>
              <p>Haz clic para abrir el sitio en una nueva pestaña.</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
export default React.memo(PortfolioItem);
