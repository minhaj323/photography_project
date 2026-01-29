import api from './api';

const userService = {
  // Login for both roles
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  // Registration logic used by RegisterForm.jsx
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  // Fetch user profile for the Dashboard.jsx
  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  }
};

export default userService;