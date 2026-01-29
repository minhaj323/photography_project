import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101c2c] text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="AhNayZ" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold text-white tracking-tight">AhNayZ</span>
          </div>
          <p className="text-sm leading-relaxed">
            Connecting world-class photographers with people who value high-quality visual storytelling. 
            Capture, Connect, and Create.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-[#d9bd7a] transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-[#d9bd7a] transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-[#d9bd7a] transition-colors"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/marketplace" className="hover:text-[#d9bd7a] transition-colors">Marketplace</Link></li>
            <li><Link to="/categories" className="hover:text-[#d9bd7a] transition-colors">Categories</Link></li>
            <li><Link to="/hire" className="hover:text-[#d9bd7a] transition-colors">Hire Photographers</Link></li>
            <li><Link to="/featured" className="hover:text-[#d9bd7a] transition-colors">Featured Gallery</Link></li>
          </ul>
        </div>

        {/* For Professionals Section */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">For Photographers</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/register" className="hover:text-[#d9bd7a] transition-colors">Sell Your Photos</Link></li>
            <li><Link to="/upload" className="hover:text-[#d9bd7a] transition-colors">Upload Portal</Link></li>
            <li><Link to="/guidelines" className="hover:text-[#d9bd7a] transition-colors">Community Standards</Link></li>
            <li><Link to="/pricing" className="hover:text-[#d9bd7a] transition-colors">Earning Structure</Link></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-[#d9bd7a] transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#d9bd7a] transition-colors">Contact Support</Link></li>
            <li><Link to="/privacy" className="hover:text-[#d9bd7a] transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-[#d9bd7a] transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="container mx-auto px-8 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; {currentYear} AhNayZ. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Made for Professionals</span>
          <span className="text-[#d9bd7a]">Secure Payments Enabled</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;