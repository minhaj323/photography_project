import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Hooks - Adjusting path to match your features/auth structure
import useAuth from './features/auth/useAuth';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PhotoDetails from './pages/PhotoDetails';
import UploadPage from './pages/UploadPage';

/**
 * App.jsx: The central Routing hub for AhNayZ.
 * Integrates your specific page and layout structure.
 */
const App = () => {
  // Accessing your custom hook logic
  const { isAuthenticated, isPhotographer, isLoading } = useAuth();

  // Prevents redirecting while the AuthContext is checking local storage
  if (isLoading) {
    return <div className="h-screen flex items-center justify-center text-[#101c2c]">Loading...</div>;
  }

  return (
    <Routes>
      {/* MainLayout wraps all routes to provide consistent Navbar/Footer */}
      <Route path="/" element={<MainLayout />}>
        
        {/* Public Routes */}
        <Route index element={<Home />} />
        <Route path="photos/:id" element={<PhotoDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Protected Dashboard - Accessible by both Buyers and Photographers */}
        <Route 
          path="dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        />

        {/* Role-Based Route - Restricted to Photographers only */}
        <Route 
          path="upload" 
          element={isAuthenticated && isPhotographer ? <UploadPage /> : <Navigate to="/dashboard" />} 
        />

      </Route>

      {/* Fallback to Home for any undefined routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;