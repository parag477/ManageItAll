import React, { useEffect } from 'react';
import { Box, Typography, IconButton, Avatar, Tooltip } from '@mui/material';
import { Settings, Logout } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h1" fontWeight="bold">
        Admin Dashboard
      </Typography>
      <Box display="flex" alignItems="center">
        <Tooltip title="Settings" arrow>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <IconButton color="secondary">
              <Settings />
            </IconButton>
          </motion.div>
        </Tooltip>
        <Tooltip title="Logout" arrow>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <IconButton color="error" onClick={handleLogout}>
              <Logout />
            </IconButton>
          </motion.div>
        </Tooltip>
        <Avatar sx={{ ml: 2, bgcolor: 'primary.main' }}>A</Avatar>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
