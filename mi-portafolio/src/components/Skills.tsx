import React from 'react';
import {
    FaHtml5, FaCss3Alt, FaReact, FaGithub, FaNodeJs,
    FaCubes, FaMagic, FaPaintBrush, FaCube
} from 'react-icons/fa';
import {
    SiJavascript, SiTailwindcss, SiSass, SiAdobephotoshop,
    SiAdobeaftereffects,
} from 'react-icons/si';

import '../styles/Skill.css';

interface Skill {
    name: string;
    icon: React.ReactNode;
    category: 'frontend' | '3d';
}

const skills: Skill[] = [
    // Frontend
    { name: 'HTML', icon: <FaHtml5 />, category: 'frontend' },
    { name: 'CSS', icon: <FaCss3Alt />, category: 'frontend' },
    { name: 'JavaScript', icon: <SiJavascript />, category: 'frontend' },
    { name: 'React', icon: <FaReact />, category: 'frontend' },
    { name: 'GitHub', icon: <FaGithub />, category: 'frontend' },
    { name: 'Node.js', icon: <FaNodeJs />, category: 'frontend' },
    { name: 'TailwindCSS', icon: <SiTailwindcss />, category: 'frontend' },
    { name: 'Sass', icon: <SiSass />, category: 'frontend' },
    { name: 'Photoshop', icon: <SiAdobephotoshop />, category: 'frontend' },

    // 3D & VFX
    { name: 'Autodesk Maya', icon: <FaCubes />, category: '3d' },
    { name: 'ZBrush', icon: <FaPaintBrush />, category: '3d' },
    { name: 'Nuke', icon: <FaMagic />, category: '3d' },
    { name: 'Substance 3D', icon: <FaCube />, category: '3d' },
    { name: 'Houdini', icon: <FaCubes />, category: '3d' },
    { name: 'After Effects', icon: <SiAdobeaftereffects />, category: '3d' },
    { name: 'Photoshop', icon: <SiAdobephotoshop />, category: '3d' },
];

function Skills() {
    const frontendSkills = skills.filter(skill => skill.category === 'frontend');
    const skills3D = skills.filter(skill => skill.category === '3d');

    return (
        <section className="skills-section">
            <div className="container-h1">
                <h1>TECHNOLOGIES I AM FAMILIAR WITH</h1>
            </div>

            <div className="skills-columns">
                {/* Frontend */}
                <div className="skills-column">
                    <h2 className="skills-subtitle">Frontend Development</h2>
                    <div className="skills-grid">
                        {frontendSkills.map((skill, index) => (
                            <div className="skill-card" key={`frontend-${index}`}>
                                <span className="skill-icon">{skill.icon}</span>
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3D / VFX */}
                <div className="skills-column">
                    <h2 className="skills-subtitle">3D / VFX / Motion Design</h2>
                    <div className="skills-grid">
                        {skills3D.map((skill, index) => (
                            <div className="skill-card" key={`3d-${index}`}>
                                <span className="skill-icon">{skill.icon}</span>
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
