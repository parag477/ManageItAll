import axios from 'axios';

const API_URL = 'http://3.25.60.208:5001/api/projects';

export const fetchProjects = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createProject = async (projectData) => {
  const response = await axios.post(API_URL, projectData);
  return response.data;
};
