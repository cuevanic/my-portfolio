// src/components/About.js
import React from 'react';
import './About.css';
//import resume from '../assets/NC-Resume 2024.pdf'; 

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
      Hello! I’m Nicolle Cuevas, an Information Technology student at Kean University, where I’m pursuing my degree with a minor in Business Management. With a GPA of 3.59, I have a strong foundation in web development and Microsoft 365 administration. My technical skills include HTML, CSS, JavaScript, Java, and Python, allowing me to create engaging and functional web applications.
      My experience as a Senior Student Worker at the Office of Financial Aid has honed my organizational and communication skills. Additionally, I was a Game-Day Operations Intern for the Kean Sports Business Club, where I gained valuable insights into event management and teamwork.
      </p>
      
      {/* LinkedIn Button */}
      <a href="https://www.linkedin.com/in/nicolle-cuevas-b93b98273/" target="_blank" rel="noopener noreferrer">
        <button className="linkedin-button">Connect on LinkedIn</button>
      </a>
      {/* Resume Button */}
      <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="resume-button">View My Resume</button>
      </a>
    </section>
  );
};

export default About;
