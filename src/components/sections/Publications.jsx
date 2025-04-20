import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import Section from '../ui/Section';
import './Publications.css';

const Publications = () => {
  return (
    <Section 
      id="publications"
      title="Publications"
      subtitle="Sharing insights and expertise with the tech community."
    >
      <div className="publications-container">
        <motion.div
          className="publication-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <h3 className="publication-title">Continuous Delivery of Mobile Applications</h3>
          <a
            href="https://tech.home24.com/continuous-delivery-of-mobile-applications-at-home24/"
            target="_blank"
            rel="noopener noreferrer"
            className="publication-link"
          >
            Read article <FaChevronRight />
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Publications;