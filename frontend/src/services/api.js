import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // change if hosted online

const API = axios.create({
  baseURL: BASE_URL,
});

// Attach token to each request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
