import axios from 'axios';


const API_URL = 'http://3.25.60.208:5001/api/subscriptions';

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
