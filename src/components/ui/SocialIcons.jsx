import React from 'react';
import AnimatedComponent from './AnimatedComponent';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './SocialIcons.css';

const SocialIcons = ({ vertical = false }) => {
  return (
    <div className={`sticky-social-links ${vertical ? 'vertical' : ''}`}>
      <AnimatedComponent
        as="a"
        href="https://github.com/yan-braslavsky"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        motionProps={{ whileHover: { y: -5 } }}
        aria-label="GitHub Profile"
      >
        <FaGithub />
      </AnimatedComponent>
      <AnimatedComponent
        as="a"
        href="https://www.linkedin.com/in/yan-braslavsky-aa071840/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        motionProps={{ whileHover: { y: -5 } }}
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin />
      </AnimatedComponent>
      <AnimatedComponent
        as="a"
        href="mailto:yan.braslavsky@gmail.com"
        className="social-icon"
        motionProps={{ whileHover: { y: -5 } }}
        aria-label="Email Contact"
      >
        <FaEnvelope />
      </AnimatedComponent>
    </div>
  );
};

export default SocialIcons;