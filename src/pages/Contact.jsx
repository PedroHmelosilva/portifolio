import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h1>More about me</h1>
          <p className="contact-text">
          Data Science student at <strong>Fatec Jundiaí </strong> 
          and Systems Analysis and Development Technician 
          at <strong>Etec Vasco Antônio Venchiarutti</strong>. I have 
          basic knowledge in Full-Stack development and practical 
          experience with academic projects, including a TCC selected 
          for the FETEPS Science Fair. I am looking for an internship 
          or young apprenticeship opportunity to apply my technical 
          knowledge.
          </p>
        </div>

        <div className="contact-info">
          <h1>Contact</h1>
          <p className="contact-text-list">
          Name: Pedro Henrique Mello Silva <br />
          Email: pedrohmeloesilva@gmail.com <br />
          </p>
          <div className="social-links">
            <a
              href="https://github.com/PedroHmelosilva"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pedromeloesilva/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;