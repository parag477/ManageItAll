import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, People, Assignment, MailOutline } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Sidebar = () => (
  <Drawer variant="permanent" sx={{ width: 240 }}>
    <List>
      {[
        { text: 'Dashboard', icon: <Home /> },
        { text: 'Projects', icon: <Assignment /> },
        { text: 'Clients', icon: <People /> },
        { text: 'Contacts', icon: <MailOutline /> },
      ].map(({ text, icon }) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          key={text}
        >
          <ListItem button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </motion.div>
      ))}
    </List>
  </Drawer>
);

export default Sidebar;
