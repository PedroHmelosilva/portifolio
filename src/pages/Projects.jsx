import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import buscador_cep from '../assets/img/buscador_cep.png';
import todo from '../assets/img/to_do.png';
import galeria from '../assets/img/site_galeria.png';
import gerador_senhas from '../assets/img/gerador_senhas.png';
import profile_site from '../assets/img/profile.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhp, faReact, faPython, faNodeJs, faJs, faCss3Alt, faHtml5,faSass } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [activeButtonType, setActiveButtonType] = useState(null);
  const [centeredCardId, setCenteredCardId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const cardRefs = useRef([]);

  const handleProjectLinkHover = (projectId, buttonType) => {
    setActiveProjectId(projectId);
    setActiveButtonType(buttonType);
  };

  const handleProjectLinkLeave = () => {
    setActiveProjectId(null);
    setActiveButtonType(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    // Configura Intersection Observer apenas para desktop
    if (!isMobile) {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7, // Consideramos centrado quando 70% do card está visível
      };

      const observerCallback = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id'));
            setCenteredCardId(id);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      // Observar todos os cards
      cardRefs.current.forEach(card => {
        if (card) observer.observe(card);
      });

      return () => {
        cardRefs.current.forEach(card => {
          if (card) observer.unobserve(card);
        });
        window.removeEventListener('resize', handleResize);
      };
    }
    
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const projects = [
    {
      id: 1,
      title: "C# Projects",
      description: "Collection of C# applications developed during ETEC studies, exploring .NET and object-oriented programming.",
      image: "https://raw.githubusercontent.com/PedroHmelosilva/portifolio/main/public/logo192.png",
      technologies: ["C#",],
      link: "https://github.com/PedroHmelosilva/repositorio_projetos_visualstudio",
      siteUrl: null
    },
    {
      id: 2,
      title: "Gallery Project",
      description: "Responsive image gallery web app built with Sass, showcasing modern web design techniques.",
      image: galeria,
      technologies: [<FontAwesomeIcon icon={faHtml5} />, <FontAwesomeIcon icon={faSass} />,],
      link: "https://github.com/PedroHmelosilva/projeto_galeria",
      siteUrl: null
    },
    {
      id: 3,
      title: "To-Do List",
      description: "Interactive task management app demonstrating core JavaScript functionality.",
      image: todo,
      technologies: [<FontAwesomeIcon icon={faJs} />, <FontAwesomeIcon icon={faHtml5} />, <FontAwesomeIcon icon={faCss3Alt} />],
      link: null,
      siteUrl: null
    },
    {
      id: 4,
      title: "CEP Finder",
      description: "Brazilian postal code search application",
      image: buscador_cep,
      technologies: [<FontAwesomeIcon icon={faJs} />, <FontAwesomeIcon icon={faHtml5} />, <FontAwesomeIcon icon={faCss3Alt} />],
      link: "https://github.com/PedroHmelosilva/projeto_buscadordecep",
      siteUrl: "https://projeto-buscadordecep.vercel.app"
    },
    {
      id: 5,
      title: "PHP Starter",
      description: "Initial PHP learning project",
      image: "https://via.placeholder.com/800x400",
      technologies: [<FontAwesomeIcon icon={faPhp} />, <FontAwesomeIcon icon={faHtml5} />, <FontAwesomeIcon icon={faCss3Alt} />],
      link: "https://github.com/PedroHmelosilva/projeto_php_inicial",
      siteUrl: null
    },
    {
      id: 6,
      title: "Password Generator",
      description: "JavaScript application for generating secure passwords",
      image: gerador_senhas,
      technologies: [<FontAwesomeIcon icon={faJs} />, <FontAwesomeIcon icon={faHtml5} />, <FontAwesomeIcon icon={faCss3Alt} />],
      link: "https://github.com/PedroHmelosilva/gerador_de_senhas",
      siteUrl: null
    },
    {
      id: 7,
      title: "Portfolio Website",
      description: "Profile site built with React, SASS and Vite, showcasing web development skills.",
      image: profile_site,
      technologies: [<FontAwesomeIcon icon={faReact} />, <FontAwesomeIcon icon={faSass} />],
      link: "https://github.com/PedroHmelosilva/profile_pessoal",
      siteUrl: null
    }
  ];

  return (
    <section id="projects-section" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card ${centeredCardId === project.id ? 'centered-card' : ''}`}
            ref={el => cardRefs.current[index] = el}
            data-id={project.id}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.link} 
                  className={`project-link ${activeProjectId === project.id && activeButtonType === 'view' ? 'active' : ''}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onMouseOver={() => handleProjectLinkHover(project.id, 'view')} 
                  onMouseLeave={handleProjectLinkLeave}
                >
                  View Project
                </a>
                {project.siteUrl && (
                  <a 
                    href={project.siteUrl} 
                    className={`project-site-link ${activeProjectId === project.id && activeButtonType === 'site' ? 'active' : ''}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onMouseOver={() => handleProjectLinkHover(project.id, 'site')} 
                    onMouseLeave={handleProjectLinkLeave}
                  >
                    Visit Site
                  </a>
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
