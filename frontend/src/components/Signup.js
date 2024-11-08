// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box, Alert, Checkbox, FormControlLabel } from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.checked ? 'admin' : 'user' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/auth/signup', formData);
      setSuccess('User registered successfully!');
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Server error');
      setSuccess('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h5" textAlign="center">Sign Up</Typography>
      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} fullWidth margin="normal" />
      <FormControlLabel
        control={<Checkbox checked={formData.role === 'admin'} onChange={handleRoleChange} />}
        label="Admin Role"
      />
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mt: 2 }}>{success}</Alert>}
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Sign Up</Button>
    </Box>
  );
};

export default Signup;
