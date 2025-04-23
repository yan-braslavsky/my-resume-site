import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Section from '../ui/Section';
import './Contact.css';

const Contact = () => {
  return (
    <Section 
      id="contact"
      title="Get In Touch"
      subtitle="Interested in connecting? Reach out through any of these channels."
    >
      <div className="social-links">
        <motion.a
          href="https://github.com/yan-braslavsky"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          whileHover={{ y: -5 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/yan-braslavsky-aa071840/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          whileHover={{ y: -5 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="mailto:yan.braslavsky@gmail.com"
          className="social-link"
          whileHover={{ y: -5 }}
        >
          <FaEnvelope />
        </motion.a>
      </div>
    </Section>
  );
};

export default Contact;