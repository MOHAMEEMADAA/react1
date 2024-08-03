import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        <div className="item">WEB DESIGN</div>
        <div className="item">MOBILE DESIGN</div>
        <div className="item">LOGO DESIGN</div>
        <div className="item">WEB APPLICATION DEVELOPMENT</div>
        <div className="item">MOBILE APPLICATION DEVELOPMENT</div>
        <div className="item">PWA DEVELOPMENT</div>
      </div>
    </div>
  );
};

export default Portfolio;
