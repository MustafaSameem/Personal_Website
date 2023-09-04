import React from 'react';
import './Header.css';

function Header() {
    return (
      <header className="header">
        <div className="nav"> {/* Wrap the navigation elements */}
          <ul>
            <li className="nav-item"><a href="#about"><span>[1]</span> About</a></li>
            <li className="nav-item"><a href="#experience"><span>[2]</span> Experience</a></li>
            <li className="nav-item"><a href="#projects"><span>[3]</span> Projects</a></li>
            <li className="nav-item"><a href="#contact"><span>[4]</span> Contact</a></li>
          </ul>
        </div>
        
        <div className="intro">
          <p>Hello, my name is</p>
          <h1>Mustafa Sameem.</h1>
          <h1 className="smaller-text">Problem-solving is my daily task</h1>
          <p className="white-text"> Based in<span>Montreal, QC</span>.</p>
        </div>
      </header>
    );
  }
  
  export default Header;