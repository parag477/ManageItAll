import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { fetchContacts } from '../../services/contactService';


const ContactSubmissions = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const loadContacts = async () => {
      const data = await fetchContacts();
      setContacts(data);
    };
    loadContacts();
  }, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Contact Submissions</Typography>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <TableContainer component={Paper} elevation={3} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><Typography fontWeight="bold">Name</Typography></TableCell>
                <TableCell><Typography fontWeight="bold">Email</Typography></TableCell>
                <TableCell><Typography fontWeight="bold">City</Typography></TableCell>
                <TableCell><Typography fontWeight="bold">Mobile Number</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact, index) => (
                <motion.tr
                  key={contact._id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TableCell>{contact.fullName}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.city}</TableCell>
                  <TableCell>{contact.mobileNumber}</TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </motion.div>
    </Box>
  );
};

export default ContactSubmissions;
