import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faNodeJs, faJs, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const skills = [
  { icon: faReact, name: "React", level: 75 },
  { icon: faCode, name: "C#", level: 50 },
  { icon: faPython, name: "Python", level: 65 },
  { icon: faNodeJs, name: "NodeJS", level: 60 },
  { icon: faJs, name: "JavaScript", level: 80 },
  { icon: faCss3Alt, name: "CSS", level: 95 },
  { icon: faHtml5, name: "HTML", level: 100 },
];

function SkillCard({ icon, name, level }) {
  return (
    <div className="skill-card">
      <div className="skill-card-icon">
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
      </div>
      <div className="skill-card-info">
        <div className="skill-card-title">{name}</div>
        <div className="skill-card-level">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${level}%` }}></div>
          </div>
            <p>{level}%</p>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title" id='skills'>Skills</h2>
      <div className="skills-card-list">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}
