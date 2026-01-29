import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryFilter from '../features/products/CategoryFilter';
import PhotoGrid from '../features/products/PhotoGrid';
import Button from '../components/ui/Button';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [photos, setPhotos] = useState([]);
  
  // FIX: Initialize isLoading to true to avoid synchronous setState inside useEffect
  const [isLoading, setIsLoading] = useState(true);
  
  const navigate = useNavigate();
  const galleryRef = useRef(null);

  const handleExploreClick = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJoinClick = () => {
    navigate('/register');
  };

  const scatteredImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc', style: { top: '-10%', left: '-5%', transform: 'rotate(-15deg)' } },
    { id: 2, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b', style: { bottom: '5%', left: '2%', transform: 'rotate(10deg)' } },
    { id: 3, src: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845', style: { top: '10%', right: '-3%', transform: 'rotate(12deg)' } },
    { id: 4, src: 'https://images.unsplash.com/photo-1519741497674-611481863552', style: { bottom: '-8%', right: '5%', transform: 'rotate(-8deg)' } },
  ];

  useEffect(() => {
    // FRemoved setIsLoading(true) from here to prevent cascading renders
    const fetchPhotos = setTimeout(() => {
      const mockPhotos = [
        { id: 1, title: 'Himalayan Peak', category: 'nature', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b', photographerName: 'Aman' },
        { id: 2, title: 'Urban Rain', category: 'street', url: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845', photographerName: 'Minhaj' },
        { id: 3, title: 'Wedding Vows', category: 'wedding', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc', photographerName: 'Rahul' },
        { id: 4, title: 'Desert Silence', category: 'nature', url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0', photographerName: 'Karan' },
      ];
      
      const filtered = activeCategory === 'all' 
        ? mockPhotos 
        : mockPhotos.filter(p => p.category === activeCategory);
        
      setPhotos(filtered);
      setIsLoading(false);
    }, 800);

    // CLEANUP: Prevents memory leaks if user navigates away before timer ends
    return () => clearTimeout(fetchPhotos);
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      {/* FIX: Use 'h-100' instead of 'h-[400px]' for standard Tailwind conventions */}
      <section className="relative h-100 flex items-center justify-center bg-[#101c2c] rounded-3xl overflow-hidden mb-12 shadow-2xl">
        
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          {scatteredImages.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt="Discover Category"
              // PERFORMANCE FIX: Added will-change-transform and transform-gpu to solve slow scrolling
              className="absolute w-32 h-44 object-cover rounded-lg border-2 border-white/20 shadow-lg will-change-transform transform-gpu"
              style={img.style}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Capture the World <br /> 
            <span className="text-[#d9bd7a]">Connect with Vision</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            The professional marketplace for high-quality photography and creative storytelling.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={handleExploreClick}>Explore Gallery</Button>
            <Button variant="outline" size="lg" onClick={handleJoinClick}>Join as Photographer</Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto" ref={galleryRef}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-[#101c2c]">Discover Masterpieces</h2>
          <CategoryFilter activeCategory={activeCategory} setCategory={setActiveCategory} />
        </div>
        <PhotoGrid photos={photos} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Home;