import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { fetchProjects, createProject } from '../../services/projectService';

const ProjectManager = () => {
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
    <Box>
      <Typography variant="h5" gutterBottom>Project Management</Typography>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        <form onSubmit={handleSubmit}>
          <TextField
            label="Project Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
            margin="normal"
            required
          />
          <TextField
            label="Project Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            // component={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Add Project
          </Button>
        </form>
      </motion.div>

      {/* Projects List */}
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project._id}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card variant="outlined">
                {project.image && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.name}
                  />
                )}
                <CardContent>
                  <Typography variant="h6">{project.name}</Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectManager;
