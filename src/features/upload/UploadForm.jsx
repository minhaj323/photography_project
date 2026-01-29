import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import ImagePreview from './ImagePreview';

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadData, setUploadData] = useState({
    title: '',
    category: '',
    price: '',
    description: ''
  });

  // Comprehensive list of 12 photography categories
  const categories = [
    "Wedding", "Portrait", "Nature & Landscape", "Street", 
    "Architecture", "Fashion", "Wildlife", "Sports", 
    "Macro", "Food", "Documentary", "Abstract"
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleInputChange = (e) => {
    setUploadData({ ...uploadData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send selectedFile and uploadData to backend
    console.log("Submitting to Marketplace:", { selectedFile, uploadData });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Upload New Work</h2>
        <p className="text-gray-500">Share your vision with the community and start earning.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Image Selection */}
        <div className="space-y-4">
          <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors relative">
            {!selectedFile ? (
              <label className="flex flex-col items-center justify-center cursor-pointer w-full h-full">
                <div className="p-3 bg-white rounded-full shadow-sm mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600">Select Photo</span>
                <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
              </label>
            ) : (
              <ImagePreview file={selectedFile} onClear={() => setSelectedFile(null)} />
            )}
          </div>
        </div>

        {/* Right Column: Metadata & Category */}
        <div className="space-y-4">
          <Input 
            label="Photo Title" 
            name="title" 
            placeholder="e.g. Golden Hour in Manali" 
            onChange={handleInputChange}
            required 
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Category</label>
            <select 
              name="category"
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none bg-white transition-all"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat.toLowerCase()}>{cat}</option>
              ))}
            </select>
          </div>

          <Input 
            label="Price (USD)" 
            name="price" 
            type="number" 
            placeholder="0.00" 
            onChange={handleInputChange}
            required 
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea 
              name="description"
              rows="3"
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
              placeholder="Tell the story behind this photo..."
            ></textarea>
          </div>

          <Button type="submit" className="w-full py-3">
            Publish Photo
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;