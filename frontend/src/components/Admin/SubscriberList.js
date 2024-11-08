import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { getSubscriptions } from '../../services/subscriptionService';

const SubscriberList = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const loadSubscriptions = async () => {
      const data = await getSubscriptions();
      setSubscriptions(data);
    };
    loadSubscriptions();
  }, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Subscriber List</Typography>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <List>
          {subscriptions.map((subscription, index) => (
            <motion.div
              key={subscription._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <ListItem>
                <ListItemText primary={subscription.email} />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </motion.div>
    </Box>
  );
};

export default SubscriberList;
