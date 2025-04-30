import React from 'react';
import AnimatedComponent from './AnimatedComponent';
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
        <AnimatedComponent
          motionProps={{
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.6 },
            viewport: { once: true }
          }}
        >
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
          {children}
        </AnimatedComponent>
      </div>
    </section>
  );
};

export default Section;