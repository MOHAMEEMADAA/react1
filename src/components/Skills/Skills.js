import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      
      <div className="skill-bars">
        <div className="skill">
          <span>HTML/CSS</span>
          <div className="bar"><div className="progress" style={{ width: '90%' }}></div></div>
        </div>
        <div className="skill">
          <span>JavaScript</span>
          <div className="bar"><div className="progress" style={{ width: '80%' }}></div></div>
        </div>
        <div className="skill">
          <span>Graphic Design</span>
          <div className="bar"><div className="progress" style={{ width: '70%' }}></div></div>
        </div>
        <div className="skill">
          <span>Web Design</span>
          <div className="bar"><div className="progress" style={{ width: '85%' }}></div></div>
        </div>
        <div className="skill">
          <span>Mobile App Design</span>
          <div className="bar"><div className="progress" style={{ width: '75%' }}></div></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
