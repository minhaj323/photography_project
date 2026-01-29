import React from 'react';

  // Reusable Input component 
  // styled to match brand colors and styles.
const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  name, 
  error, 
  className = '', 
  ...props 
}) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {/* Label styled to match the premium brand feel */}
      {label && (
        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">
          {label}
        </label>
      )}
      
      <input 
        type={type}
        name={name}
        placeholder={placeholder}
        className={`
          px-4 py-2.5 bg-white border border-gray-200 rounded-lg 
          text-[#101c2c] placeholder-gray-400
          focus:ring-2 focus:ring-[#d9bd7a] focus:border-transparent 
          focus:outline-none transition-all duration-200
          ${error ? 'border-red-500 ring-1 ring-red-500' : 'hover:border-gray-400'}
        `}
        {...props}
      />

      {/* Error message handling for form validation */}
      {error && (
        <span className="text-xs text-red-500 font-medium ml-1 mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;