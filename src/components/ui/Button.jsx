import React from 'react';

/**
 * Reusable Button component styled 
 * to match brand colors and styles.
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  
  // Base structural styles
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-md transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Brand color variants
  const variants = {
    // Solid Gold (Log In style)
    primary: "bg-[#d9bd7a] text-[#101c2c] hover:bg-[#c4a661] shadow-md",
    
    // Navy (Matching the background)
    secondary: "bg-[#101c2c] text-white border border-gray-700 hover:bg-[#1a2b42]",
    
    // Outlined Gold (Upload style)
    outline: "border-2 border-[#d9bd7a] text-[#d9bd7a] hover:bg-[#d9bd7a] hover:text-[#101c2c]",
    
    // Simple Ghost for icons
    ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/10"
  };

  // Size variations
  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;