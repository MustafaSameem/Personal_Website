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
          <li>Developed a corporate website integrating advanced mathematical algorithms using Pymeshlab to automate STL mesh
          <br/>mesh operations for heat transfer simulations, resulting in the discovery of alternate optimized models</li>
          <li>Leveraged Python's multi-threading capabilities to concurrently execute Flask's server, Pyvista for real-time 
          <br/>mesh visualization, and Gmsh for surface decomposition, achieving 100x speed improvements</li>
          <li>Employed GitLab for version control, isolated projects using virtual environments, completed tasks in 
          <br/>Linux via MSYS and Mingw64, and ensured code quality through rigorous testing, enhancing project scalability</li>
          <li>Conducted literature reviews on mesh optimization, smoothing, remeshing and boolean transformations,
          <br/>presented weekly findings and actively collaborated on an innovative manufacturing process</li>
        </ul>
      </div>
    );
  }
  
  export default Experience;
