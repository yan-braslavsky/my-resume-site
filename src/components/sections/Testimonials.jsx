import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';
import { TESTIMONIALS } from '../../data/data';
import Section from '../ui/Section';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <Section 
      id="testimonials"
      title="Testimonials"
      subtitle="Feedback from colleagues and clients I've had the pleasure to work with."
    >
      <div className="testimonials-container">
        {TESTIMONIALS.map((testimonial, idx) => (
          <motion.div
            key={idx}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="testimonial-quote">
              <FaQuoteRight />
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">{testimonial.author}</div>
            <div className="testimonial-role">{testimonial.role}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;