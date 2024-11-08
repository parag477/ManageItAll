// import React from 'react';
// import ProjectManagement from '../components/Admin/ProjectManagement';
// import ClientManagement from '../components/Admin/ClientManagement';
// import ContactSubmissions from '../components/Admin/ContactSubmissions';
// import NewsletterSubscriptions from '../components/Admin/NewsletterSubscriptions';

// import { Box, Typography, Button } from '@mui/material';



// const AdminPage = () => {
//   return (
//     <Box sx={{ padding: 5, textAlign: 'center' }}>
//       <Typography variant="h4" fontWeight="bold" color="primary">
//         Admin Dashboard
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mt={2}>
//         Welcome to the Admin Dashboard. Here you can manage users, content, and settings.
//       </Typography>
//       <ProjectManagement />
//       <ClientManagement />
//       <ContactSubmissions />
//       <NewsletterSubscriptions />
//     </Box>
//   );
// };

// export default AdminPage;



import React from 'react';
import { Box, Grid, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import theme from './theme';
import Sidebar from '../components/Admin/AdminSidebar';
import ProjectManager from '../components/Admin/ProjectManagement';
import ClientManager from '../components/Admin/ClientManagement';
import ContactDetails from '../components/Admin/ContactDetails';
import SubscriberList from '../components/Admin/SubscriberList';
import DashboardHeader from '../components/Admin/DashboardHeader';
import ContactSubmissions from '../components/Admin/ContactSubmissions';
const AdminPage = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box display="flex">
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: 'hidden' }}>
        <DashboardHeader />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}><ProjectManager /></Grid>
            <Grid item xs={12} md={6}><ClientManager /></Grid>
            <Grid item xs={12}><ContactSubmissions /></Grid>
            <Grid item xs={12}><SubscriberList /></Grid>
          </Grid>
        </motion.div>
      </Box>
    </Box>
  </ThemeProvider>
);

export default AdminPage;
