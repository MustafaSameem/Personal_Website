import React from 'react';
import './About.css';

function About() {
    return (
      <div className="about">
        <h1 id="about">About Me <span>[1]</span></h1>
        <p>I am currently a third-year student pursuing my Bachelor's degree in<span>Software Engineering</span> 
        <br/>and I am specialized in developing optimized and scalabale applications for end users. 
        </p>

        <p>I have completed a 2-term internship at 
          <span><a href="https://nrc.canada.ca/en/research-development/research-collaboration/research-centres/automotive-surface-transportation-research-centre" 
          className="orange-link" target="_blank" rel="noreferrer">National Research Council Canada</a></span>, during which I gained 
          <br/>significant experience in using<span>Python</span> and<span>C++</span> for performance and efficiency. I am also highly
          <br/>skilled in web development, utilizing<span>HTML</span>,<span>CSS</span>,<span>JavaScript</span>,<span>JSX</span>, and<span>ReactJs</span>.
        </p>
      </div>
    );
  }
  
  export default About;