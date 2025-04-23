import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './SocialIcons.css';

const SocialIcons = ({ vertical = false }) => {
  return (
    <div className={`sticky-social-links ${vertical ? 'vertical' : ''}`}>
      <motion.a
        href="https://github.com/yan-braslavsky"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        whileHover={{ y: -5 }}
        aria-label="GitHub Profile"
      >
        <FaGithub />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/yan-braslavsky-aa071840/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        whileHover={{ y: -5 }}
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin />
      </motion.a>
      <motion.a
        href="mailto:yan.braslavsky@gmail.com"
        className="social-icon"
        whileHover={{ y: -5 }}
        aria-label="Email Contact"
      >
        <FaEnvelope />
      </motion.a>
    </div>
  );
};

export default SocialIcons;