import React from 'react';
import './Contact.css';

function Contact() {
  const email = 'mustafa.slly@gmail.com'; // Replace with your actual email address
  const LinkedInLink = 'https://www.linkedin.com/in/mustafa-sameem-984904249/'; // Replace with your Instagram link

  return (
    <div className="contact">
      <h1 id="contact">Contact Me <span>[4]</span></h1>

      <a href={`mailto:${email}`}>
        <button className="button">Email</button>
      </a>
      <br/>
      <a href={LinkedInLink} target="_blank" rel="noopener noreferrer">
        <button className="button">LinkedIn</button>
      </a>

    </div>
  );
}

export default Contact;
