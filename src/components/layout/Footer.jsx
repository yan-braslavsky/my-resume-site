import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="content-container">
        <div className="footer-content">
          © {new Date().getFullYear()} Yan Braslavsky. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;