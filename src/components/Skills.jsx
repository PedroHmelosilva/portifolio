import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faNodeJs, faJs, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const skills = [
    { icon: faReact, name: "React", level: "Intermediate" },
    { icon: faCode, name: "C#", level: "Intermediate" },
    { icon: faPython, name: "Python", level: "Intermediate" },
    { icon: faNodeJs, name: "NodeJS", level: "Intermediate" },
    { icon: faJs, name: "JavaScript", level: "Intermediate" },
    { icon: faCss3Alt, name: "CSS", level: "Advanced" },
    { icon: faHtml5, name: "HTML", level: "Advanced" },
];

function SkillCard({ icon, name, level }) {
  return (
    <div className="skill-card">
      <div className="skill-card-icon">
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
      </div>
      <div className="skill-card-info">
        <div className="skill-card-title">{name}</div>
        <div className="skill-card-level">{level}</div>
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
