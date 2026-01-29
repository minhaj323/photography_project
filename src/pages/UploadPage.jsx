import React from 'react';
import UploadForm from '../features/upload/UploadForm';

/**
 * UploadPage: The dedicated portal for photographers to publish new work.
 */
const UploadPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-[#101c2c] tracking-tight">
            Creator Studio
          </h1>
          <p className="text-gray-500 mt-2">
            Upload high-resolution imagery to the <span className="text-[#d9bd7a] font-bold">AhNayZ</span> marketplace.
          </p>
        </div>

        {/* The Upload Form Component */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <UploadForm />
        </div>

        {/* Technical Tips for Photographers */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-500">
          <div className="flex gap-3">
            <span className="text-[#d9bd7a]">●</span>
            <p>Upload files in JPG or PNG format for best compatibility.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#d9bd7a]">●</span>
            <p>Minimum resolution of 2000px is recommended for high-end buyers.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#d9bd7a]">●</span>
            <p>Ensure you have the full copyrights to any content you publish.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;