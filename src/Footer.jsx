import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Grace Hollenbach &nbsp;|&nbsp;
        <a href="mailto:ghollen7002@gmail.com" className="footer-link">ghollen7002@gmail.com</a> &nbsp;|&nbsp;
        <a href="http://linkedin.com/in/grace-hollenbach" target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;