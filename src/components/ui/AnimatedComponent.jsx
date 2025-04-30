import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../utils/deviceDetection.ts';

/**
 * A component that conditionally applies Framer Motion animations
 * based on device type and user preference.
 * 
 * @param {Object} props Component props
 * @param {string} props.as The HTML element or component to render (default: 'div')
 * @param {boolean} props.enabled Whether animations are enabled (overrides device detection)
 * @param {Object} props.motionProps Animation properties for Framer Motion
 * @param {Object} props.children Child elements
 * @param {Object} props.rest Any other props to pass to the element
 * @returns {React.ReactElement} The rendered element with or without animations
 */
const AnimatedComponent = ({
  as = 'div',
  enabled,
  motionProps = {},
  children,
  ...rest
}) => {
  const isMobile = useIsMobile();
  
  // If enabled is explicitly provided, use that value
  // Otherwise, enable animations on desktop and disable on mobile
  const animationsEnabled = enabled !== undefined ? enabled : !isMobile;

  // If animations are disabled, render the element without animations
  if (!animationsEnabled) {
    const Component = as;
    return <Component {...rest}>{children}</Component>;
  }

  // If animations are enabled, render the motion component with animations
  const MotionComponent = motion[as];
  return <MotionComponent {...motionProps} {...rest}>{children}</MotionComponent>;
};

export default AnimatedComponent;