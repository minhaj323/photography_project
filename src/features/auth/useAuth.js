import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

/**
 * Custom hook to access authentication state and methods.
 * This connects your components to the global AuthContext.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  // Destructure the values from the context
  const { user, login, logout, isLoading } = context;

  /**
   * Helper to check if the current user is a photographer.
   * Useful for showing the "Upload" button or Photographer Dashboard.
   */
  const isPhotographer = user?.role === 'photographer';

  /**
   * Helper to check if the user is a buyer.
   */
  const isBuyer = user?.role === 'user';

  return {
    user,
    login,
    logout,
    isLoading,
    isPhotographer,
    isBuyer,
    isAuthenticated: !!user,
  };
};

export default useAuth;