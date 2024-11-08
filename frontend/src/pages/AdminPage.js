import React from 'react';
import ProjectManagement from '../components/ProjectManagement';
import ClientManagement from '../components/ClientManagement';
import ContactSubmissions from '../components/ContactSubmissions';
import NewsletterSubscriptions from '../components/NewsletterSubscriptions';

import { Box, Typography, Button } from '@mui/material';



const AdminPage = () => {
  return (
    <Box sx={{ padding: 5, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" color="primary">
        Admin Dashboard
      </Typography>
      <Typography variant="body1" color="textSecondary" mt={2}>
        Welcome to the Admin Dashboard. Here you can manage users, content, and settings.
      </Typography>
      <ProjectManagement />
      <ClientManagement />
      <ContactSubmissions />
      <NewsletterSubscriptions />
    </Box>
  );
};

export default AdminPage;
