import "../styles/Content.css";

function Content({ heading, paragraphs }: { heading: string, paragraphs: string[] }) {
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