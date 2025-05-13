import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiFigma, SiMui, SiSass, SiAdobephotoshop } from 'react-icons/si';
import '../styles/Skill.css';



const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },    
    { name: 'Sass', icon: <SiSass /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop /> },
];

function Skills() {
    return (
        <section className="skills-section">
            <div className='container-h1'>
                <h1>TECHNOLOGIES I AM FAMILIAR WITH</h1>
            </div>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <span className="skill-icon">{skill.icon}</span>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
