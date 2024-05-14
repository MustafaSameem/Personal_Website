import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience">
      <h1 id="experience">Work Experience <span>[2]</span></h1>
      
      <h2>Software Engineer Intern R&D Automotive & Transportation @<span className ="place"><a href="https://nrc.canada.ca/en/research-development/research-collaboration/research-centres/automotive-surface-transportation-research-centre" 
          className="orange-link" target="_blank" rel="noreferrer">National Research Council Canada</a></span></h2>
      <p className="date">January - August 2023</p>

      <ul>
        <li>Developed a specialized scientific application using Python to help engineering researchers manipulate and study complex 3D geometries, significantly advancing research capabilities.</li>
        <li>Increased heat transfer simulation speed by 150x through automation using Python, C++, C, Flask, and JS.</li>
        <li>Cut computational load by 35% by fine-tuning data handling techniques involving 1+ million data points.</li>
        <li>Implemented multi-threading for real-time interaction with 3D visualization, enhancing user interaction.</li>
        <li>Integrated cutting-edge research findings and design features from open-source APIs in the application.</li>
        <li>Employed Pytest for comprehensive software testing and managed project updates with GitLab.</li>
      </ul>
    </div>
  );
}

export default Experience;
