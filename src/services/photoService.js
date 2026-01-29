import api from './api';

const photoService = {
  // Fetch all photos for the Home.jsx grid
  getAllPhotos: async (category = 'all') => {
    const response = await api.get(`/photos?category=${category}`);
    return response.data;
  },

  // Fetch a single photo's details for PhotoDetails.jsx
  getPhotoById: async (id) => {
    const response = await api.get(`/photos/${id}`);
    return response.data;
  },

  // Photographer Upload Logic
  uploadPhoto: async (formData) => {
    // Note: Uploads usually require 'multipart/form-data' for images
    const response = await api.post('/photos/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  }
};

export default photoService;