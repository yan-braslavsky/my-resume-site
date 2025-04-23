/**
 * Header Component
 * 
 * A responsive navigation header that includes:
 * - Logo
 * - Navigation links with smooth scrolling to page sections
 * - Mobile-friendly hamburger menu
 * - Scroll-aware styling (changes appearance on scroll)
 * - Accessibility features (ARIA attributes, focus management)
 * 
 * The header is fixed at the top of the page and transforms its appearance
 * when the user scrolls down (becomes more compact with a different background).
 */
import React, { useState, useEffect } from 'react';
import { FaFilePdf, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = ({ resumePDF = '/yan_braslavsky_cv.pdf' }) => {
  // State to track whether the page has been scrolled
  // Used to apply special styling when header is not at the top
  const [scrolled, setScrolled] = useState(false);
  
  // State to track mobile menu open/closed state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * Scroll effect handler
   * 
   * Monitors window scroll position and updates the scrolled state when
   * the user scrolls past a threshold (10px).
   * 
   * This effect:
   * 1. Adds a scroll event listener when component mounts
   * 2. Updates scrolled state based on window.scrollY position
   * 3. Removes event listener on component unmount (cleanup)
   */
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Attach event listener
    document.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  /**
   * Mobile menu body scroll lock
   * 
   * Prevents the body from scrolling when the mobile menu is open,
   * creating a modal-like experience. This improves UX by preventing
   * the user from scrolling the main content while the menu is open.
   * 
   * This effect:
   * 1. Sets body overflow to 'hidden' when menu is open
   * 2. Resets to 'auto' when menu is closed
   * 3. Ensures body overflow is reset when component unmounts
   */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup to ensure body scroll is restored if component unmounts while menu is open
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  /**
   * Toggle mobile menu open/closed state
   * Invoked when user clicks the hamburger menu button
   */
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  /**
   * Close the mobile menu
   * Used when a navigation link is clicked to automatically close the menu
   */
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`header ${scrolled ? 'header-scrolled' : ''}`} 
      role="banner" // Accessibility: Identifies the element as a banner landmark
    >
      <div className="header-container">
        {/* Site logo - clicking it navigates to the root page and refreshes */}
        <a href="/" className="logo-link">
          <div className="logo" tabIndex="0">YB</div>
        </a>
        
        {/* Main navigation */}
        <nav
          className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}
          role="navigation" // Accessibility: Identifies the element as a navigation landmark
          aria-label="Main navigation" // Accessibility: Provides a label for screen readers
        >
          {/* 
            Navigation links using anchor tags with hash references for smooth scrolling
            Each link closes the mobile menu when clicked
            tabIndex and aria-label attributes improve keyboard navigation and screen reader support
            TODO : make sure those links are generated through props and are a result of the sections passed from above.
          */}
          <a href="#about" className="nav-link" tabIndex="0" aria-label="About section" onClick={closeMobileMenu}>About</a>
          <a href="#skills" className="nav-link" tabIndex="0" aria-label="Skills section" onClick={closeMobileMenu}>Skills</a>
          <a href="#experience" className="nav-link" tabIndex="0" aria-label="Experience section" onClick={closeMobileMenu}>Experience</a>
          <a href="#key-projects" className="nav-link" tabIndex="0" aria-label="Key Projects section" onClick={closeMobileMenu}>Projects</a>
          <a href="#education" className="nav-link" tabIndex="0" aria-label="Education section" onClick={closeMobileMenu}>Education</a>
          <a href="#testimonials" className="nav-link" tabIndex="0" aria-label="Testimonials section" onClick={closeMobileMenu}>Testimonials</a>
        </nav>

        {/* Action buttons (moved from Hero) */}
        <div className="header-actions">
          <a href={resumePDF} className="header-btn header-btn-primary" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
            <FaFilePdf /> Download Resume
          </a>
        </div>

        {/* 
          Mobile menu toggle button (hamburger)
          Only visible on small screens (controlled by CSS media queries)
          Changes appearance when active using CSS
        */}
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          aria-label="Toggle mobile menu" // Accessibility: Describes the button's purpose
          aria-expanded={mobileMenuOpen} // Accessibility: Indicates whether the controlled menu is expanded
          tabIndex="0" // Accessibility: Ensures the button is in the tab order
          onClick={toggleMobileMenu}
        >
          {/* Three lines that form the hamburger icon */}
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;