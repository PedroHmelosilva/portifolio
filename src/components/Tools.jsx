import React, { useState, useEffect } from 'react';
import './Tools.css';

const Tools = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="tools-container">
      <button 
        className="scroll-to-top-btn" 
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307.054 307.054">
          <g>
            <g id="_x34_85._Up">
              <path d="M302.445,205.788L164.63,67.959c-6.136-6.13-16.074-6.13-22.203,0L4.597,205.788c-6.129,6.132-6.129,16.069,0,22.201
                l11.101,11.101c6.129,6.136,16.076,6.136,22.209,0l115.62-115.626L269.151,239.09c6.128,6.136,16.07,6.136,22.201,0
                l11.093-11.101C308.574,221.857,308.574,211.92,302.445,205.788z"/>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Tools;