import React from 'react';
import './Projects.css';

function Projects() {
    return (
      <div className="projects">
        <h1 id="projects">Projects <span>[3]</span></h1>

        <h2>Condo Management System <span>(<a href="https://soen-390-project.onrender.com/" 
          className="orange-link" target="_blank" rel="noreferrer">Link</a>)</span></h2>
        <p>NodeJs, React, TypeScript, MongoDB, AWS, Firebase, Docker</p>
              
        <h2>Artificial Intelligence Chess Engine <span>(<a href="https://github.com/MustafaSameem/Chess-Engine" 
          className="orange-link" target="_blank" rel="noreferrer">Link</a>)</span></h2>
        <p>C++, SFML</p>

        <h2>Client Server Banking System <span>(<a href="https://github.com/MustafaSameem/Asynchronous-banking-System" 
          className="orange-link" target="_blank" rel="noreferrer">Link</a>)</span></h2>
        <p>Java</p>

        <h2>Spotify Music Database</h2>
        <p>MySQL, Neo4j, Python</p>

      </div>
    );
}

export default Projects;

