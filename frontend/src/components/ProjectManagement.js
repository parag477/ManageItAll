import React, { useState, useEffect } from 'react';
import { fetchProjects, createProject } from '../services/projectService';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '', image: '' });

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = await createProject(formData);
    setProjects([...projects, newProject]);
    setFormData({ name: '', description: '', image: '' });
  };

  return (
    <div>
      <h2>Project Management</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Project Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Project Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Project Image URL" value={formData.image} onChange={handleChange} required />
        <button type="submit">Add Project</button>
      </form>

      <h3>Projects List</h3>
      {projects.map((project) => (
        <div key={project._id}>
          <img src={project.image} alt={project.name} />
          <h4>{project.name}</h4>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectManagement;
