import React from 'react';

/**
 * ImagePreview shows the photographer a thumbnail of their selected file.
 * It also provides a way to "remove" or "clear" the selection.
 */
const ImagePreview = ({ file, onClear }) => {
  if (!file) return null;

  // Create a local URL for the file to show as a preview
  const previewUrl = URL.createObjectURL(file);

  return (
    <div className="relative group w-full max-w-sm mx-auto mt-6">
      {/* Image Thumbnail */}
      <div className="aspect-video rounded-xl overflow-hidden border-2 border-gray-100 shadow-sm">
        <img 
          src={previewUrl} 
          alt="Upload preview" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* File Info Overlay */}
      <div className="mt-2 flex items-center justify-between px-2">
        <div className="overflow-hidden">
          <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
          <p className="text-xs text-gray-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
        </div>
        
        {/* Remove Button */}
        <button
          onClick={onClear}
          className="p-2 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-colors"
          title="Remove image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImagePreview;