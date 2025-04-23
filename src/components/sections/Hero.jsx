import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ resumePDF = '/yan_braslavsky_cv.pdf' }) => {
  return (
    <section className="hero-section" id="about" aria-label="About me">
      <div className="hero-background"></div>
      <div className="hero-gradient"></div>
      <div className="grid-background"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">
          Yan Braslavsky<br />
          <span>Engineering Leadership</span>
        </h1>
        <p className="hero-subtitle">
          Building high-impact teams and scalable platforms with over 15 years of experience in tech.
          Calm in chaos, focused under pressure, and always leading with a human-first approach.
        </p>
        
        {/* Mobile-only actions: Resume button and social icons */}
        <div className="hero-mobile-actions">
          <a href={resumePDF} className="mobile-resume-btn" target="_blank" rel="noopener noreferrer">
            <FaFilePdf /> Download Resume
          </a>
          
          <div className="mobile-social-icons">
            <motion.a
              href="https://github.com/yan-braslavsky"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-icon"
              whileHover={{ scale: 1.1 }}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yan-braslavsky-aa071840/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-icon"
              whileHover={{ scale: 1.1 }}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:yan.braslavsky@gmail.com"
              className="mobile-social-icon"
              whileHover={{ scale: 1.1 }}
              aria-label="Email Contact"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;