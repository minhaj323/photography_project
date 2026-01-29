import axios from 'axios';

// Create a reusable axios instance
const api = axios.create({
  baseURL: 'http://localhost:3000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add Auth Token to every request automatically
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('ahnayz_user'));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default api;