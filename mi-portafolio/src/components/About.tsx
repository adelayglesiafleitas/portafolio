import '../styles/About.css';
import avatar from "../../public/avatar/_MG_9925.png";

const About = () => {
  return (
    <div className="about">
      <div className="parent">
        <div className="div1">
          ABOUT ME</div>
        <div className="div3">
          4
        </div>
        <div className="div5">5</div>
        <div className="div6"><div>
          <picture>
            <img src={avatar} alt="Avatar" className="avatar" />
          </picture>
        </div>
          <div>
            <button>CV</button>
          </div></div>
        <div className="div7">7</div>
      </div>
    </div>
  );
};

export default About;
