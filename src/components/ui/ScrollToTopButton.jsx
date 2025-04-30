import React, { useState, useEffect } from 'react';
import AnimatedComponent from './AnimatedComponent';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTopButton.css';

/**
 * A reusable scroll to top button component that appears when the user
 * scrolls down the page and allows them to smoothly scroll back to the top.
 * Self-manages its visibility based on scroll position.
 */
const ScrollToTopButton = ({ threshold = 500 }) => {
  const [visible, setVisible] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > threshold;
      
      if (shouldShow !== visible) {
        setVisible(shouldShow);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [visible, threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatedComponent
      as="button"
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      tabIndex="0"
      motionProps={{
        initial: { opacity: 0, scale: 0.8 },
        animate: { 
          opacity: visible ? 1 : 0, 
          scale: visible ? 1 : 0.8 
        },
        transition: { duration: 0.3 }
      }}
      // Always enable animations for this component since it's critical functionality
      enabled={true}
    >
      <FaArrowUp />
    </AnimatedComponent>
  );
};

export default ScrollToTopButton;