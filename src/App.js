import React from 'react'
import Header from './components/Header'
import About from './components/About.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div>
      <div>
        <Header/>
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
    </div>
  );
}

export default App