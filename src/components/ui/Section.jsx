import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

/**
 * A reusable Section component that provides consistent styling and animation
 * for all sections of the resume site.
 */
const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '' 
}) => {
  return (
    <section className={`section ${className}`} id={id}>
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;