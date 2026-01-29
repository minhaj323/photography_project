import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Button from '../components/ui/Button';

/**
 * PhotoDetails provides a zoomed-in view of a specific photo.
 * It integrates with the CartContext to allow purchases.
 */
const PhotoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulation of fetching a single photo by ID from your PostgreSQL/Node.js backend
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      // Mock data for a single photo
      const mockPhoto = {
        id: id,
        title: 'Himalayan Peak at Dawn',
        category: 'nature',
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
        photographerName: 'Aman',
        price: '49.99',
        description: 'A high-resolution shot captured during the golden hour in the heart of the Himalayas. Perfect for large-scale prints or digital background assets.',
        resolution: '6000 x 4000',
        fileFormat: 'RAW / JPG'
      };
      setPhoto(mockPhoto);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) return <div className="text-center py-20 text-gray-500">Loading masterpiece...</div>;
  if (!photo) return <div className="text-center py-20">Photo not found.</div>;

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 text-sm font-bold text-[#101c2c] hover:underline flex items-center gap-2"
      >
        ← Back to Gallery
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section: Large Image Display */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <img 
            src={photo.url} 
            alt={photo.title} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Section: Details & Purchase */}
        <div className="flex flex-col justify-center">
          <span className="text-[#d9bd7a] font-bold uppercase tracking-widest text-sm mb-2">
            {photo.category}
          </span>
          <h1 className="text-4xl font-extrabold text-[#101c2c] mb-4">{photo.title}</h1>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            {photo.description}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8 py-6 border-y border-gray-100">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">Photographer</p>
              <p className="font-bold text-[#101c2c]">{photo.photographerName}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">Price</p>
              <p className="font-bold text-[#101c2c] text-xl">${photo.price}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">Resolution</p>
              <p className="font-bold text-[#101c2c]">{photo.resolution}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">Format</p>
              <p className="font-bold text-[#101c2c]">{photo.fileFormat}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              className="flex-1 py-4 text-lg"
              onClick={() => {
                addToCart(photo);
                alert('Added to cart!');
              }}
            >
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1 py-4 text-lg">
              Download Preview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;