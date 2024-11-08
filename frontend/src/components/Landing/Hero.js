import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Grid, Paper } from '@mui/material';
import { submitContactForm } from '../../services/contactService';

const Hero = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        city: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await submitContactForm(formData);
          alert('Contact form submitted!');
          setFormData({ fullName: '', email: '', mobileNumber: '', city: '' });
        } catch (error) {
          console.error('Failed to submit contact form:', error);
          alert('There was an issue submitting the form. Please try again.');
        }
      };

    return (
        <Box
            sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1666214280577-5f90bc36be92?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            padding: 10,
            color: '#fff',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            }}
        >
            <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
                <Box>
                <Typography variant="h2" fontWeight="bold" gutterBottom>
                    Consultation, Design, & Marketing
                </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper
                sx={{
                    padding: 4,
                    maxWidth: 400,
                    borderRadius: 3,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                }}
                >
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="primary"
                    sx={{
                    marginBottom: 2,
                    textAlign: 'center',
                    }}
                >
                    Get a Free Consultation
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <TextField
                            label="Full Name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            required
                            sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                            },
                            }}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            required
                            sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                            },
                            }}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            label="Mobile Number"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            required
                            sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                            },
                            }}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            label="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            required
                            sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                            },
                            }}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                            paddingY: 1.5,
                            fontSize: '1rem',
                            borderRadius: 2,
                            textTransform: 'none',
                            }}
                        >
                            Send Message
                        </Button>
                        </Grid>
                    </Grid>
                </form>
                </Paper>
            </Grid>
            </Grid>
        </Box>
    )
};

export default Hero;