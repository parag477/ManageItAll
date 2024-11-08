import React, { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent, Box, Avatar } from '@mui/material';
import { fetchClients } from '../../services/clientService';

const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
      const loadClients = async () => {
        const data = await fetchClients();
        setClients(data);
      };
      loadClients();
    }, []);

  return (
    <Box sx={{ padding: 3, textAlign: 'center', marginTop: '2em', marginBottom: '2em' }}>
    <Typography variant="h4" align="center" fontWeight="bold" color="primary" mb={4}>
      Happy Clients
      </Typography>

    <Grid container spacing={3} justifyContent="center">
      {clients.map((client, index) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={4} 
          lg={3} 
          key={index}
        >
          <Card sx={{
            maxWidth: 345,
            margin: 'auto',
            borderRadius: 3,
            boxShadow: 3,
            padding: 2,
            textAlign: 'center',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': { transform: 'scale(1.05)' },
          }}>
            <Avatar 
              src={client.image} 
              alt={client.name} 
              sx={{ 
                width: 80, 
                height: 80, 
                margin: 'auto', 
                marginBottom: 2 
              }} 
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                {client.description}
              </Typography>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                {client.name}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {client.designation}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
  )
}

export default Clients