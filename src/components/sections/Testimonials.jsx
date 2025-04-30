import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { TESTIMONIALS } from '../../data/data';
import Section from '../ui/Section';
import AnimatedComponent from '../ui/AnimatedComponent';
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
          <AnimatedComponent
            key={idx}
            className="testimonial-card"
            motionProps={{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: idx * 0.2 },
              viewport: { once: true }
            }}
          >
            <div className="testimonial-avatar">
              <img 
                src={testimonial.avatar} 
                alt={`${testimonial.author}`} 
                className="avatar-image"
              />
            </div>
            <div className="testimonial-quote">
              <FaQuoteRight />
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">{testimonial.author}</div>
            <div className="testimonial-role">{testimonial.role}</div>
          </AnimatedComponent>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;