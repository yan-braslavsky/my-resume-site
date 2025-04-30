import React, { useState, useEffect } from 'react';

/**
 * Utility functions for device detection
 */

/**
 * Checks if the current device is a mobile device based on viewport width
 * @returns {boolean} True if the device is a mobile device
 */
export const isMobileDevice = (): boolean => {
  // Check if window is defined (for SSR compatibility)
  if (typeof window === 'undefined') return false;
  
  // Consider devices with width less than 768px as mobile devices
  return window.innerWidth < 768;
};

/**
 * Hook to detect if the current device is a mobile device
 * @returns {boolean} True if the device is a mobile device
 */
export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(isMobileDevice());

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(isMobileDevice());
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};