import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Section from '../ui/Section';
import AnimatedComponent from '../ui/AnimatedComponent';
import './Contact.css';

const Contact = () => {
  return (
    <Section 
      id="contact"
      title="Get In Touch"
      subtitle="Interested in connecting? Reach out through any of these channels."
    >
      <div className="social-links">
        <AnimatedComponent
          as="a"
          href="https://github.com/yan-braslavsky"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          motionProps={{ whileHover: { y: -5 } }}
        >
          <FaGithub />
        </AnimatedComponent>
        <AnimatedComponent
          as="a"
          href="https://www.linkedin.com/in/yan-braslavsky-aa071840/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          motionProps={{ whileHover: { y: -5 } }}
        >
          <FaLinkedin />
        </AnimatedComponent>
        <AnimatedComponent
          as="a"
          href="mailto:yan.braslavsky@gmail.com"
          className="social-link"
          motionProps={{ whileHover: { y: -5 } }}
        >
          <FaEnvelope />
        </AnimatedComponent>
      </div>
    </Section>
  );
};

export default Contact;