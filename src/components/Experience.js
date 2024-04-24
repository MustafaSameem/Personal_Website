import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience">
      <h1 id="experience">Work Experience <span>[2]</span></h1>
      
      <h2>Software Engineer CO-OP @<span className ="place"><a href="https://nrc.canada.ca/en/research-development/research-collaboration/research-centres/automotive-surface-transportation-research-centre" 
          className="orange-link" target="_blank" rel="noreferrer">National Research Council Canada</a></span></h2>
      <p className="date">January - August 2023</p>

      <ul>
        <li>Developed a scientific application, enabling 7 researchers to experiment with 3D meshed geometries.</li>
        <li>Integrated advanced features using open-source APIs and conducted literature review on mesh research papers.</li>
        <li>Incorporated multi-threading for real-time 3D visualization with PyVista, enhancing user interaction.</li>
        <li>Achieved a 150x speed improvement in heat transfer simulations using Python, NumPy, C++, Flask, and JavaScript.</li>
        <li>Implemented an algorithm with PyMesh leading to a 19% volume retention while maintaining structural integrity.</li>
        <li>Completed tasks in Linux with virtual environments and utilized GitLab for version control.</li>
        <li>Presented findings weekly to all researchers, engaging in collaborative discussions.</li>
      </ul>
    </div>
  );
}

export default Experience;
