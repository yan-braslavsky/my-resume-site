import React from 'react';
import { EDUCATION } from '../../data/data';
import Section from '../ui/Section';
import AnimatedComponent from '../ui/AnimatedComponent';
import './Education.css';

const Education = () => {
  return (
    <Section 
      id="education"
      title="Education"
      subtitle="Academic foundation supporting practical expertise."
    >
      <div className="education-container">
        {EDUCATION.map((edu, idx) => (
          <AnimatedComponent
            key={idx}
            className="education-item"
            motionProps={{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: idx * 0.1 },
              viewport: { once: true },
              whileHover: { y: -5 }
            }}
          >
            <h3 className="education-degree">{edu.degree}</h3>
            <div className="education-school">{edu.school}</div>
          </AnimatedComponent>
        ))}
      </div>
    </Section>
  );
};

export default Education;