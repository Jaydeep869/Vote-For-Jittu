import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  TextField, 
  Button, 
  Paper, 
  Snackbar,
  Alert,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Divider,
  IconButton
} from '@mui/material';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    year: '',
    message: '',
    involvement: 'support'
  });
  
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = 'Email is not valid';
    }
    
    if (formValues.phone && !/^[0-9]{10}$/.test(formValues.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Phone number is not valid';
    }
    
    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Here you would normally send the form data to a server
    console.log('Form submitted:', formValues);
    
    // Show success message
    setOpenSnackbar(true);
    
    // Reset form
    setFormValues({
      name: '',
      email: '',
      phone: '',
      department: '',
      year: '',
      message: '',
      involvement: 'support'
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Layout>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box textAlign="center" mb={6}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              Get Involved
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Join the movement to transform student life at IIT BHU
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                  We'd love to hear from you! Whether you have questions, suggestions, or want to join our campaign team, please fill out the form below.
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="name"
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        required
                        value={formValues.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="email"
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        required
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="phone"
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        value={formValues.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="department"
                        label="Department"
                        variant="outlined"
                        fullWidth
                        value={formValues.department}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="year"
                        label="Year of Study"
                        variant="outlined"
                        fullWidth
                        value={formValues.year}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset" sx={{ mb: 2 }}>
                        <FormLabel component="legend">How would you like to get involved?</FormLabel>
                        <RadioGroup
                          row
                          name="involvement"
                          value={formValues.involvement}
                          onChange={handleChange}
                        >
                          <FormControlLabel value="support" control={<Radio />} label="Support" />
                          <FormControlLabel value="volunteer" control={<Radio />} label="Volunteer" />
                          <FormControlLabel value="feedback" control={<Radio />} label="Provide Feedback" />
                          <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="message"
                        label="Message"
                        variant="outlined"
                        fullWidth
                        required
                        multiline
                        rows={4}
                        value={formValues.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 3 }}
                  >
                    Send Message
                  </Button>
                </Box>
                
                {/* Success message */}
                <Snackbar
                  open={openSnackbar}
                  autoHideDuration={6000}
                  onClose={handleCloseSnackbar}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                  <Alert onClose={handleCloseSnackbar} severity="success">
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                </Snackbar>
              </Paper>
            </Grid>
            
            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body1" paragraph>
                  You can reach out to us directly using the following contact details:
                </Typography>
                
                <Box sx={{ my: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ color: 'primary.main', fontSize: 24, mr: 2 }}>
                      <FaEnvelope />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Email
                      </Typography>
                      <Typography variant="body1">
                        jitesh.mishra@iitbhu.ac.in
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ color: 'primary.main', fontSize: 24, mr: 2 }}>
                      <FaPhone />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Phone
                      </Typography>
                      <Typography variant="body1">
                        +91 XXXXX XXXXX
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <Box sx={{ color: 'primary.main', fontSize: 24, mr: 2 }}>
                      <FaMapMarkerAlt />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Find Me At
                      </Typography>
                      <Typography variant="body1">
                        Room XXX, Hostel XXX,<br />
                        IIT BHU, Varanasi - 221005
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 3 }} />
                
                <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                  Connect With Us
                </Typography>
                <Typography variant="body1" paragraph>
                  Follow our campaign on social media:
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton color="primary" aria-label="Facebook" component="a" href="#" target="_blank" size="large">
                    <FaFacebook />
                  </IconButton>
                  <IconButton color="primary" aria-label="Twitter" component="a" href="#" target="_blank" size="large">
                    <FaTwitter />
                  </IconButton>
                  <IconButton color="primary" aria-label="Instagram" component="a" href="#" target="_blank" size="large">
                    <FaInstagram />
                  </IconButton>
                  <IconButton color="primary" aria-label="LinkedIn" component="a" href="#" target="_blank" size="large">
                    <FaLinkedin />
                  </IconButton>
                  <IconButton color="primary" aria-label="WhatsApp" component="a" href="#" target="_blank" size="large">
                    <FaWhatsapp />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          
          {/* Map or Campus Location */}
          <Box mt={8} mb={4}>
            <Typography variant="h4" gutterBottom>
              Find Us On Campus
            </Typography>
            <Typography variant="body1" paragraph>
              Our campaign headquarters is located at the Student Activity Center (SAC).
            </Typography>
            <Paper elevation={2}>
              <Box 
                sx={{ 
                  height: '400px', 
                  width: '100%', 
                  bgcolor: 'grey.200', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <Typography variant="body1" color="text.secondary">
                  Campus Map Would Be Displayed Here
                </Typography>
              </Box>
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Layout>
  );
};

export default ContactPage; 