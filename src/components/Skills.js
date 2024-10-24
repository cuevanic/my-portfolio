// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <h3>Programming Languages</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skill-item">
          <h3>Technologies</h3>
          <ul>
            <li>React</li>
            <li>Google Services</li>
            <li>Microsoft 365</li>
            <li>iOS & Windows</li>
          </ul>
        </div>
        <div className="skill-item">
          <h3>Languages</h3>
          <ul>
            <li>English (Bilingual Proficiency)</li>
            <li>Spanish (Bilingual Proficiency)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
