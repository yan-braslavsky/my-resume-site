import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ resumePDF }) => {
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
        <div className="hero-buttons">
          <a href={resumePDF} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <FaFilePdf /> Download Resume
          </a>
          <a href="#contact" className="btn btn-secondary">
            <FaEnvelope /> Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;