import React from 'react';
import About from './About.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import './Header.css';

function Header() {
    return (
      <header className="header">
        <div className="nav"> {/* Wrap the navigation elements */}
          <ul>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#experience">Experience</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="intro">
          <p>Hello, my name is</p>
          <h1>Mustafa Sameem.</h1>
          <h1 className="larger-text">Problem-solving is my daily task</h1>
          
          <p className="white-text">
            I'm a software engineering student specialized in developing optimized
            <br />and scalable applications for end users. Based in
            <span className="orange-text"> Montreal, QC</span>.
          </p>
        </div>
        
        <div>
          <About/>
        </div>
        <div>
          <Experience/>
        </div>
        <div>
          <Projects/>
        </div>
        <div>
          <Contact/>
        </div>
      </header>
    );
  }
  
  export default Header;