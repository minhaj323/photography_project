import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useAuth } from '../features/auth/useAuth';

const MainLayout = () => {
  const { user } = useAuth(); // Get user role for the Navbar

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Shared Navbar - passes user data to show "Upload" for photographers */}
      <Navbar user={user} />

      {/* The 'Outlet' is where Home, Register, or Upload pages will appear */}
      <main className="grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;