import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of the project and its key features.",
      image: "https://via.placeholder.com/400x200",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Another amazing project showcasing different skills and technologies.",
      image: "https://via.placeholder.com/400x200",
      technologies: ["JavaScript", "Express", "PostgreSQL"],
      link: "#"
    },
    {
      id: 3,
      title: "Project 3",
      description: "A third project demonstrating various aspects of web development.",
      image: "https://via.placeholder.com/400x200",
      technologies: ["React", "TypeScript", "Firebase"],
      link: "#"
    }
  ];

  return (
    <section id="projects-section" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;