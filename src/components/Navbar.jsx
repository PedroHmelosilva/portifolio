import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const navbarPosition = navbar.offsetTop;
      
      if (window.scrollY > navbarPosition) {
        setIsSticky(true);
        setShowNavbar(true);
      } else {
        setIsSticky(false);
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`navbar${isSticky ? ' sticky' : ''}${showNavbar ? ' show' : ' hide'}`}>
        <div className="desktop-buttons">
          <a href="#skills">Skills</a>
          <a href="#tools">Tools</a>
          <a href="#projects-section">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      
      <div className={`menu-buttons ${isOpen ? 'active' : ''}`}>
        <a href="#skills">Skills</a>
        <a href="#projects-section">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  );
}

export default Navbar;
