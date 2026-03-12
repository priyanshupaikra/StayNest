import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/', // Django backend default port
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach JWT tokens to every request
api.interceptors.request.use(
  (config) => {
    // Attempt to get the token, whether it's stored from Firebase or custom Django JWTs
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
