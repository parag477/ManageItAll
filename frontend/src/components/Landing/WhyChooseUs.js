import React from 'react';
import { Grid, Box, Typography, Paper } from '@mui/material';
import { TrendingUp, DesignServices, Campaign } from '@mui/icons-material';

const features = [
  { title: 'Potential ROI', description: 'Maximize your investment with our expert guidance.', icon: <TrendingUp fontSize="large" /> },
  { title: 'Design Expertise', description: 'Professional staging and interior design services.', icon: <DesignServices fontSize="large" /> },
  { title: 'Effective Marketing', description: 'Tailored marketing strategies for optimal reach.', icon: <Campaign fontSize="large" /> }
];

const WhyChooseUs = () => (
  <Box sx={{ padding: 5, textAlign: 'center' }}>
    <Typography variant="h4" fontWeight="bold" color="primary" mb={3}>
      Why Choose Us?
    </Typography>
    <Grid container spacing={3} justifyContent="center">
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              borderRadius: 2,
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}
          >
            <Box sx={{ color: 'primary.main', mb: 2 }}>
              {feature.icon}
            </Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {feature.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {feature.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default WhyChooseUs;