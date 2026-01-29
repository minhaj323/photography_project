import React from 'react';
import Button from '../../components/ui/Button';

/**
 * PhotoCard displays an individual image with action overlays.
 * Includes buttons for Buy/Download depending on user needs.
 */
const PhotoCard = ({ photo }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image Container */}
      {/* FIX: Changed aspect-[4/5] to aspect-4/5 */}
      <div className="aspect-4/5 overflow-hidden bg-gray-200">
        <img 
          src={photo.url} 
          alt={photo.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        
        {/* Category Badge - Top Left */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-black">
          {photo.category}
        </span>
      </div>

      {/* Hover Overlay with Actions */}
      {/* FIX: Changed bg-gradient-to-t to bg-linear-to-t */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-semibold text-lg leading-tight">{photo.title}</h3>
          <p className="text-gray-300 text-sm mb-4">by {photo.photographerName}</p>
          
          <div className="flex gap-2">
            <Button 
              variant="primary" 
              size="sm" 
              className="flex-1 bg-white text-black hover:bg-gray-100"
            >
              Buy Now
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="px-3 border-white text-white hover:bg-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;