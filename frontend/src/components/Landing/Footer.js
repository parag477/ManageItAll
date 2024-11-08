import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import { subscribeNewsletter } from '../../services/subscriptionService';

const FooterContainer = styled(Box)({
  marginTop: '2em',
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
});

const AboveFooterSection = styled(Box)({
  backgroundImage: `url('https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  padding: '10em 1em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#ffffff',
  textAlign: 'center',
});

const NewsletterSection = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const FooterLinksContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    gap: '3em',
    flexWrap: 'wrap',
    marginBottom: '20px',
  });
  
  const FooterLink = styled(Link)({
    color: '#ffffff',
    textDecoration: 'none',
    marginTop: '2em',
    fontSize: '16px',
    fontWeight: 'bold',
    '&:hover': {
      color: '#f9a825',
    },
  });

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
        await subscribeNewsletter(email);
        alert('Subscribed successfully!');
        setEmail('');
        } catch (error) {
        console.error('Subscription failed:', error);
        alert('Failed to subscribe. Please try again.');
        }
    };

    return (
        <FooterContainer>
            <AboveFooterSection>
            <Typography variant="h5" fontWeight="bold" mb={2}>
                Learn more about our listing process, as well as our additional staging and design work.
            </Typography>
            <Button variant="contained" color="primary">
                Learn More
            </Button>
            </AboveFooterSection>

            <Box sx={{ padding: '40px 20px', borderTop: '1px solid #444' }}>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Useful Links
                </Typography>
                <FooterLinksContainer>
                    <FooterLink href="#">Home</FooterLink>
                    <FooterLink href="#">Services</FooterLink>
                    <FooterLink href="#">Projects</FooterLink>
                    <FooterLink href="#">Testimonials</FooterLink>
                    <FooterLink href="#">Contact</FooterLink>
                </FooterLinksContainer>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Subscribe to Us
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={1}>
                    Get the latest updates and offers.
                </Typography>
                <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <TextField
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    size="small"
                    sx={{
                        backgroundColor: '#ffffff',
                        borderRadius: 1,
                        '& .MuiOutlinedInput-root': {
                        color: '#333',
                        },
                    }}
                    />
                    <Button type="submit" variant="contained" color="primary">
                    Subscribe
                    </Button>
                </form>
                </Grid>
            </Grid>
            </Box>

            <Box sx={{ padding: '20px', textAlign: 'center', borderTop: '1px solid #444', backgroundColor: '#111' }}>
            <Typography variant="body2" color="textSecondary" mb={1}>
                © Real Trust 2023
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <FooterLink href="#" underline="none">Facebook</FooterLink>
                <FooterLink href="#" underline="none">Twitter</FooterLink>
                <FooterLink href="#" underline="none">Instagram</FooterLink>
            </Box>
            </Box>
        </FooterContainer>
        )
};

export default Footer;