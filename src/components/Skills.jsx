import React from "react";
import "./Skills.css";

import c_sharp from '../assets/img/csharp.png';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import javascript from '../assets/img/js.png';
import react from '../assets/img/react.png';
import nodejs from '../assets/img/node.png';
import python from '../assets/img/python.png';
import github from '../assets/img/github.png';
import php from '../assets/img/php.png';
import sqlServer from '../assets/img/sql-server.png';
import visualStudio from '../assets/img/visual-basic.png';

const skills = [
    { icon: php, name: "PHP", level: 40 , credits: "Designed by Freepik from www.flaticon.com."},
    { icon: sqlServer, name: "SQL Server", level: 60 , credits: "Designed by Freepik from www.flaticon.com."},
    { icon: react, name: "React", level: 75 , credits: "Designed by Freepik from www.flaticon.com."},
    { icon: c_sharp, name: "Csharp", level: 50 , credits: "Designed by Freepik from www.flaticon.com."},
    { icon: python, name: "Python", level: 65 , credits: "Designed by Freepik from www.flaticon.com."},
    { icon: javascript, name: "JavaScript", level: 80 , credits: "Designed by Freepik from www.flaticon.com."},
    { icon: css, name: "CSS", level: 95 , credits: "Designed by Freepik from www.flaticon.com."},
    { icon: html, name: "HTML", level: 100 , credits: "Designed by Freepik from www.flaticon.com."},
];

const tools = [
    { icon: github, name: "GitHub", level: 80 , credits: "Designed by Freepik from www.flaticon.com."},
    { icon: visualStudio, name: "Visual Studio", level: 75 , credits: "Designed by Freepik from www.flaticon.com."},
    { icon: nodejs, name: "NodeJS", level: 60 , credits: "Designed by Freepik from www.flaticon.com."},
];

function SkillCard({ icon, name, level, credits }) {
    return (
        <div className="skill-card">
            <div className="skill-card-icon">
                {icon && <img src={icon} alt={credits} />}
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
        <section id="skills" className="section-style">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-card-list">
                {skills.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                ))}
            </div>
            <br/>
            <div className="tools" id='tools'>
                <h2 className="skills-title">Tools</h2>
                <div className="skills-card-list">
                    {tools.map((tool) => (
                        <SkillCard key={tool.name} {...tool} />
                    ))}
                </div>
            </div>
        </section>
    );
}