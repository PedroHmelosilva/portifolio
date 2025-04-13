import React from 'react';
import './Projects.css';
import buscador_cep from '../assets/img/buscador_cep.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "C# Projects",
      description: "My projects when i was studying C# in ETEC",
      image: "https://raw.githubusercontent.com/PedroHmelosilva/portifolio/main/public/logo192.png",
      technologies: ["C#", ".NET"],
      link: "https://github.com/PedroHmelosilva/repositorio_projetos_visualstudio",
      siteUrl: null
    },
    {
      id: 2,
      title: "Gallery Project",
      description: "Project made with Sass showcasing gallery functionality",
      image: "https://via.placeholder.com/800x400",
      technologies: ["Sass", "HTML"],
      link: "https://github.com/PedroHmelosilva/projeto_galeria",
      siteUrl: null
    },
    {
      id: 3,
      title: "To-Do List",
      description: "Task management application from Hora de Codar tutorial",
      image: "https://via.placeholder.com/800x400",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/PedroHmelosilva/to-do_list",
      siteUrl: null
    },
    {
      id: 4,
      title: "CEP Finder",
      description: "Brazilian postal code search application",
      image: buscador_cep,
      technologies: ["JavaScript", "API Integration"],
      link: "https://github.com/PedroHmelosilva/projeto_buscadordecep",
      siteUrl: "https://projeto-buscadordecep.vercel.app"
    },
    {
      id: 5,
      title: "PHP Starter",
      description: "Initial PHP learning project",
      image: "https://via.placeholder.com/800x400",
      technologies: ["PHP", "Web Development"],
      link: "https://github.com/PedroHmelosilva/projeto_php_inicial",
      siteUrl: null
    },
    {
      id: 6,
      title: "Password Generator",
      description: "JavaScript application for generating secure passwords",
      image: "https://via.placeholder.com/800x400",
      technologies: ["JavaScript", "Security"],
      link: "https://github.com/PedroHmelosilva/gerador_de_senhas",
      siteUrl: null
    }
  ];

  return (
    <section id="projects-section" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
                {project.siteUrl && (
                  <a href={project.siteUrl} className="project-site-link" target="_blank" rel="noopener noreferrer">Visit Site</a>
                )}
              </div>
            </div>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;