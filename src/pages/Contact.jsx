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
          <div className="social-links">
            <a
              href="https://github.com"
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" className="form-textarea" required />
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;