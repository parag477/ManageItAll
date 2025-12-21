import axios from 'axios';

const BACKEND = import.meta.env?.VITE_BACKEND_URL || process.env?.REACT_APP_BACKEND_URL || 'http://localhost:5001';
const API_URL = `${BACKEND}/api/clients`;

export const fetchClients = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createClient = async (clientData) => {
  const response = await axios.post(API_URL, clientData);
  return response.data;
};
