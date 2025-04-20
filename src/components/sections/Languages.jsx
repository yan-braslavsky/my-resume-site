import React from 'react';
import { motion } from 'framer-motion';
import { LANGUAGES } from '../../data/data';
import Section from '../ui/Section';
import './Languages.css';

const Languages = () => {
  return (
    <Section 
      id="languages"
      title="Languages"
      subtitle="Communicating effectively across borders and cultures."
    >
      <div className="languages-container">
        {LANGUAGES.map((lang, idx) => (
          <motion.div
            key={lang.name}
            className="language-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="language-icon">{lang.icon}</div>
            <div className="language-name">{lang.name}</div>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.level}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Languages;