import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const AboutUs = () => (
  <Box sx={{ padding: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '2em' }}>
    <Typography variant="h4" fontWeight="bold" color="primary" mb={2}>
      About Us
    </Typography>
      <Typography variant="body1" color="textSecondary" mb={0} sx={{ padding: 4, maxWidth: 600, borderRadius: 2 }}>
        With years of expertise in real estate, excellent customer service, and a commitment to work that is clear and
        follows through, we provide quality services to build relationships with clients and, more importantly, maintain
        those relationships by communicating effectively.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 1 }}>
        Learn More
      </Button>
  </Box>
);

export default AboutUs;