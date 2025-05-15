
import PortfolioItem from "./PortfolioItem";
import "../styles/Portfolio.css";
import { portfolioData } from "../data/dataText";

const Portfolio = () => {


    return (
        <section id="portfolio" className="portfolio">
            <h1 style={{ cursor: "pointer" }}>
                Mi Portafolio
            </h1>

            {/* Si está abierto, muestra el grid con items */}
            <var></var>
            <div className="portfolio-grid">
                {portfolioData.map((item, index) => (
                    <PortfolioItem key={index} {...item} />
                ))}
            </div>

        </section>
    );
};

export default Portfolio;
