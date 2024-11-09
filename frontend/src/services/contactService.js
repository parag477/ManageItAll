import axios from 'axios';

const API_URL = 'http://3.25.60.208:5001/api/contacts';

// Function to submit contact form
export const submitContactForm = async (contactData) => {
  const response = await axios.post(API_URL, contactData);
  return response.data;
};

// Function to fetch all contact submissions (for admin panel)
export const fetchContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
