import '../styles/About.css';
import avatar from "../../public/avatar/_MG_9925.png";
import CV from "../../public/cv/cv_esp.pdf";
import Content from "./Content.tsx";
import { about, goals, more } from "../data/data.ts";





const About = () => {
  return (
    <div className="about">
      <div className="parent margin">
        <div className="div1 margin">
          <h2>ABOUT ME</h2></div>
        <div className="div3 margin">
          <Content heading={goals.heading} paragraphs={goals.paragraphs} />
        </div>
        <div className="div5 margin">
          <Content heading={about.heading} paragraphs={about.paragraphs} />
        </div>
        <div className="div6 margin">
          <div className='container-pict-cv margin'>
            <div >
              <a href={CV} download className="cv-button"><h2>CV</h2></a>
            </div>
            <picture>
              <img src={avatar} alt="Avatar" className="avatar" />
            </picture>
          </div>
        </div>
        <div className="div7 margin">
          <Content heading={more.heading} paragraphs={more.paragraphs} />
        </div>
      </div>
    </div>
  );
};

export default About;
