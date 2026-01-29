import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../features/auth/useAuth'; 
import Button from '../ui/Button';

const Navbar = () => {
  // 1. Get real user data and actions from  hook
  const { user, isAuthenticated, isPhotographer, logout } = useAuth();

  // 2. State for handling dropdown "Actions"
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-[#101c2c] text-white px-8 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
      {/* Left Section: Branding */}
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="AhNayZ Logo" className="w-12 h-12 rounded-full border border-gray-700" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <NavLink to="/" className={({isActive}) => isActive ? "text-[#d9bd7a]" : "hover:text-white"}>Home</NavLink>
          
          {/* Action: Discover Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('discover')}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              Discover <span className={`text-[10px] transition-transform ${openDropdown === 'discover' ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openDropdown === 'discover' && (
              <div className="absolute top-10 left-0 w-48 bg-white text-[#101c2c] rounded-md shadow-xl py-2 z-50">
                <Link to="/popular" className="block px-4 py-2 hover:bg-gray-100">Popular Photos</Link>
                <Link to="/new" className="block px-4 py-2 hover:bg-gray-100">Recent Stories</Link>
              </div>
            )}
          </div>

          {/* Action: Categories Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('categories')}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              Categories <span className={`text-[10px] transition-transform ${openDropdown === 'categories' ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openDropdown === 'categories' && (
              <div className="absolute top-10 left-0 w-48 bg-white text-[#101c2c] rounded-md shadow-xl py-2 z-50 grid grid-cols-1 max-h-80 overflow-y-auto">
                <Link to="/category/wedding" className="block px-4 py-2 hover:bg-gray-100">Wedding</Link>
                <Link to="/category/nature" className="block px-4 py-2 hover:bg-gray-100">Nature</Link>
                <Link to="/category/street" className="block px-4 py-2 hover:bg-gray-100">Street</Link>
                <Link to="/category/portrait" className="block px-4 py-2 hover:bg-gray-100">Portrait</Link>
                <Link to="/category/architecture" className="block px-4 py-2 hover:bg-gray-100">Architecture</Link>
                <Link to="/category/fashion" className="block px-4 py-2 hover:bg-gray-100">Fashion</Link>
                <Link to="/category/wildlife" className="block px-4 py-2 hover:bg-gray-100">Wildlife</Link>
                <Link to="/category/sports" className="block px-4 py-2 hover:bg-gray-100">Sports</Link>
                <Link to="/category/macro" className="block px-4 py-2 hover:bg-gray-100">Macro</Link>
                <Link to="/category/food" className="block px-4 py-2 hover:bg-gray-100">Food</Link>
                <Link to="/category/documentary" className="block px-4 py-2 hover:bg-gray-100">Documentary</Link>
                <Link to="/category/abstract" className="block px-4 py-2 hover:bg-gray-100">Abstract</Link>
              </div>
            )}
          </div>

          <NavLink to="/hire" className={({isActive}) => isActive ? "text-[#d9bd7a]" : "hover:text-white"}>Hire</NavLink>
          <NavLink to="/marketplace" className={({isActive}) => isActive ? "text-[#d9bd7a]" : "hover:text-white"}>Marketplace</NavLink>
        </div>
      </div>

      {/* Right Section: Icons & Actions */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-4 text-gray-300">
          <button className="hover:text-white"><i className="far fa-bell text-lg"></i></button>
          <button className="hover:text-white"><i className="far fa-comment-alt text-lg"></i></button>
          <button className="hover:text-white"><i className="fas fa-search text-lg"></i></button>
        </div>

        <div className="flex items-center gap-3 ml-2">
          {/* Action: Conditional rendering based on role */}
          {isAuthenticated && isPhotographer && (
            <Link to="/upload">
              <Button variant="outline" size="sm" className="border-[#c4a661] text-[#c4a661]">
                Upload
              </Button>
            </Link>
          )}
          
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              {/* Using the 'user' data to display name and fix lint warning */}
              <div className="hidden lg:block text-right">
                <p className="text-[#d9bd7a] text-xs font-bold uppercase leading-none">
                  {user?.fullName || "User"}
                </p>
                <p className="text-[10px] text-gray-400 capitalize">{user?.role}</p>
              </div>
              
              <Link to="/dashboard">
                <Button variant="primary" size="sm">Dashboard</Button>
              </Link>
              <button onClick={logout} className="text-xs text-gray-400 hover:text-white underline">Log Out</button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="primary" size="sm">Log In</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;