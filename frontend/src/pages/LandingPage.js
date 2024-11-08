import React from 'react';
import { Box, Divider } from '@mui/material';

import Hero from '../components/Landing/Hero';
import OurProjects from '../components/Landing/OurProjects';
import Clients from '../components/Landing/Clients';
import WhyChooseUs from '../components/Landing/WhyChooseUs';
import AboutUs from '../components/Landing/AboutUs';
import Footer from '../components/Landing/Footer';

const LandingPage = () => {
  
  return (
    <Box>
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <Divider />
      <OurProjects />
      <Divider />
      <Clients />
      <Divider />
      <Footer/>
  </Box>
  );
};

export default LandingPage;
