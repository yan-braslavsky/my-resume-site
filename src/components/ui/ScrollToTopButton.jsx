import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTopButton.css';

/**
 * A reusable scroll to top button component that appears when the user
 * scrolls down the page and allows them to smoothly scroll back to the top.
 */
const ScrollToTopButton = ({ visible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      tabIndex="0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: visible ? 1 : 0, 
        scale: visible ? 1 : 0.8 
      }}
      transition={{ duration: 0.3 }}
    >
      <FaArrowUp />
    </motion.button>
  );
};

export default ScrollToTopButton;