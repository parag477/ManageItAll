import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const ContactDetails = () => {
  return (
    <Box>
      <Typography variant="h5">Contact Form Submissions</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Name: John Doe" secondary="Email: john@example.com | City: New York | Mobile: 1234567890" />
        </ListItem>
      </List>
    </Box>
  );
};

export default ContactDetails;
