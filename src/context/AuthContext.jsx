import React, { createContext, useState, useEffect } from 'react';

// Create the Context
export const AuthContext = createContext(null);

/**
 * AuthProvider wraps the App and provides global state for user authentication.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('ahnayz_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Failed to parse user from localStorage');
      localStorage.removeItem('ahnayz_user');
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Mock Login Function
   */
  const login = (email, password, role) => {
    const userData = {
      name: 'John Doe',
      email,
      role, // 'photographer' or 'user'
    };

    setUser(userData);
    localStorage.setItem('ahnayz_user', JSON.stringify(userData));
  };

  /**
   * Logout Function
   */
  const logout = () => {
    setUser(null);
    localStorage.removeItem('ahnayz_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};