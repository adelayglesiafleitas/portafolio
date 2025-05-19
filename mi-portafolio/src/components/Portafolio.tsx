
import PortfolioItem from "./PortfolioItem";
import "../styles/Portfolio.css";
import { portfolioData } from "../data/dataText";

const Portfolio = () => {


    return (
        <section id="portfolio" className="portfolio">
            <h1 style={{ cursor: "pointer" }}>
                Mi Portafolio
            </h1>
            <div className="portfolio-grid">
                {portfolioData.map((item, index) => (
                    <div key={index}>
                        <h2> {item.category}</h2>
                        {item.projects.map((project, projectIndex) => (
                            <PortfolioItem
                                key={projectIndex}
                                title={project.title}
                                url={project.url}

                            />
                        ))}
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Portfolio;
