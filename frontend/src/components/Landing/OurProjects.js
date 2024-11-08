import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Card, CardContent, CardMedia, Box } from '@mui/material';
import { fetchProjects } from '../../services/projectService';

const OurProjects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  return (
    <Box sx={{ padding: 3, marginBottom: '2em', marginTop: '2em' }}>
      <Typography variant="h4" align="center" fontWeight="bold" color="primary" mb={4}>
        Our Projects
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
            <Card sx={{
              maxWidth: 345,
              margin: 'auto',
              borderRadius: 3,
              boxShadow: 3,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': { transform: 'scale(1.05)' },
            }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.name}
                sx={{
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                  {project.description}
                </Typography>
                <Button 
                  variant="contained" 
                  color="warning" 
                  sx={{
                    fontWeight: 'bold',
                    paddingX: 3,
                    paddingY: 0.5,
                    borderRadius: 20,
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default OurProjects