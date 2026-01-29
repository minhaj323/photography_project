import React from 'react';

/**
 * CategoryFilter allows users to filter the PhotoGrid.
 * It tracks the 'activeCategory' and provides a 'setCategory' function.
 */
const CategoryFilter = ({ activeCategory, setCategory }) => {
  // These categories correspond to what photographers select during upload
  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'nature', label: 'Nature' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'landscape', label: 'Landscape' }
  ];

  return (
    <div className="flex items-center gap-3 overflow-x-auto py-6 no-scrollbar">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setCategory(cat.id)}
          className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
            activeCategory === cat.id
              ? 'bg-black text-white border-black shadow-md'
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;