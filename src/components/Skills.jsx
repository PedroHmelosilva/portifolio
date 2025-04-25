import React from "react";
import "./Skills.css";

const skills = [
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "CSS", level: "Intermediate" },
  { name: "HTML", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  // Add more skills as needed
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
