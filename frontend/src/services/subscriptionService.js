import axios from 'axios';

const BACKEND = import.meta.env?.VITE_BACKEND_URL || process.env?.REACT_APP_BACKEND_URL || 'http://localhost:5001';
const API_URL = `${BACKEND}/api/subscriptions`;

// Function to subscribe to the newsletter
export const subscribeNewsletter = async (email) => {
  const response = await axios.post(API_URL, { email });
  return response.data;
};

// Function to fetch all subscriptions (for admin panel)
export const getSubscriptions = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
