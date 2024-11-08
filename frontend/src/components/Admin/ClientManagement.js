import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { fetchClients, createClient } from '../../services/clientService';

const ClientManager = () => {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '', designation: '', image: '' });

  useEffect(() => {
    const loadClients = async () => {
      const data = await fetchClients();
      setClients(data);
    };
    loadClients();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newClient = await createClient(formData);
    setClients([...clients, newClient]);
    setFormData({ name: '', description: '', designation: '', image: '' });
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Client Management</Typography>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        <form onSubmit={handleSubmit}>
          <TextField
            label="Client Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Designation"
            name="designation"
            value={formData.designation}
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
            label="Client Image URL"
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
            Add Client
          </Button>
        </form>
      </motion.div>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {clients.map((client) => (
          <Grid item xs={12} sm={6} md={4} key={client._id}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card variant="outlined">
                {client.image && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={client.image}
                    alt={client.name}
                  />
                )}
                <CardContent>
                  <Typography variant="h6">{client.name}</Typography>
                  <Typography variant="subtitle2">{client.designation}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {client.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClientManager;
