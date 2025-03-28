import { Box, Container, Typography, IconButton, Grid, Link } from '@mui/material';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#1976d2', 
        color: 'white', 
        py: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Jitesh Kumar Mishra
            </Typography>
            <Typography variant="body2" gutterBottom>
              Candidate for Student Parliament
            </Typography>
            <Typography variant="body2">
              IIT BHU
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: jitesh.mishra@iitbhu.ac.in
            </Typography>
            <Typography variant="body2" gutterBottom>
              Phone: +91 XXXXX XXXXX
            </Typography>
            <Typography variant="body2">
              Room XXX, Hostel XXX, IIT BHU
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook" component="a" href="#" target="_blank">
                <FaFacebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter" component="a" href="#" target="_blank">
                <FaTwitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram" component="a" href="#" target="_blank">
                <FaInstagram />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn" component="a" href="#" target="_blank">
                <FaLinkedin />
              </IconButton>
              <IconButton color="inherit" aria-label="WhatsApp" component="a" href="#" target="_blank">
                <FaWhatsapp />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Box mt={3} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Jitesh Kumar Mishra for Student Parliament. All rights reserved.
          </Typography>
          <Typography variant="body2">
            <Link color="inherit" href="#">
              Privacy Policy
            </Link>{' | '}
            <Link color="inherit" href="#">
              Terms of Use
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 