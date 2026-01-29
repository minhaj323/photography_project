import React from 'react';
import PhotoCard from './PhotoCard';

/**
 * PhotoGrid renders a responsive masonry-style grid of images.
 * It takes an array of 'photos' as a prop.
 */
const PhotoGrid = ({ photos, isLoading }) => {
  
  // Skeleton loader for a professional feel while fetching from your backend
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-72 bg-gray-200 animate-pulse rounded-lg"></div>
        ))}
      </div>
    );
  }

  // Empty state logic
  if (!photos || photos.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">No photos found in this category.</p>
      </div>
    );
  }

  return (
    <section className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  );
};

export default PhotoGrid;