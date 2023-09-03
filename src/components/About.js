import React from 'react';
import './About.css';

function About() {
    return (
      <div className="about">
        <h1 id="about">About Me <span>[1]</span></h1>
        <p>I am currently a third-year student pursuing my Bachelor's degree in <span>Software Engineering</span>. 
          <br/>My journey began as an Electrical Engineering major,  but seeing the endless possibilities 
          <br/>I could explore with my first programming class eventually lead me here.
        </p>

        <p>I have completed a 2-term internship at <span>National Research Council Canada</span> and I am very familiar 
          <br/>with using <span>Python</span> and <span>C++</span> for performance and efficiency. I am also highly skilled in web development, 
          <br/>utilizing <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, <span>JSX</span>, and <span>ReactJs</span>.
        </p>
      </div>
    );
  }
  
  export default About;