import React from "react";
import "./Skills.css";

const skills = [
  { icon: '<i class="bi bi-file-earmark-arrow-down"></i>', name: "NodeJS", level: "Intermediate" },
  { icon: '<i class="bi bi-filetype-jsx"></i>', name: "React", level: "Intermediate" },
  { icon: '<i class="bi bi-filetype-js"></i>', name: "JavaScript", level: "Intermediate" },
  { icon: '<i class="bi bi-filetype-css"></i>', name: "CSS", level: "Advanced" },
  { icon: '<i class="bi bi-filetype-html"></i>', name: "HTML", level: "Advanced" },
];

function SkillCard({ icon, name, level }) {
  return (
    <div className="skill-card">
      <div className="skill-card-icon" dangerouslySetInnerHTML={{ __html: icon }} />
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
      <h2 id='skills'>Skills</h2>
      <div className="skills-card-list">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}
