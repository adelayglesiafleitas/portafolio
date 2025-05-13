import "../styles/Content.css";

interface ContentProps {
    heading: string;
    paragraphs: string[];
}

function Content({ heading, paragraphs }: ContentProps) {
    return (
        <section className="content">
            <div className="content-text">
                <h2>{heading}</h2>
                {paragraphs.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        </section>
    );
}

export default Content;