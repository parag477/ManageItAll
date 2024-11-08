import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h5" textAlign="center">Log In</Typography>
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} fullWidth margin="normal" />
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Log In</Button>
    </Box>
  );
};

export default Login;
