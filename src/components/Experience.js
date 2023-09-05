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
          <li>Developed a corporate website integrating advanced algorithms using Pymeshlab explored in my research to 
          <br/>automate STL mesh operations for heat transfer simulations, and achieved 50x faster speeds than manual methods</li>
          <li>Leveraged Python's multi-threading capabilities to concurrently execute Flask's server, Pyvista for real-time 
          <br/>mesh visualization, and Gmsh for surface decomposition, resulting in improved dynamic meshing efficiency</li>
          <li>Employed GitLab for version control, isolated projects using Python virtual environments, completed tasks in 
          <br/>Unix/Linux via MSYS and Mingw64, and ensured code quality through rigorous testing, enhancing project scalability</li>
          <li>Researched mesh optimization, smoothing, remeshing, boolean transformations, and more through literature 
          <br/>review, presented findings weekly, and collaborated on a novel additive manufacturing process with supervisors</li>
        </ul>
      </div>
    );
  }
  
  export default Experience;