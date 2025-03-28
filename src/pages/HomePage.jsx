import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Grid, 
  Card, 
  CardContent,
  CardMedia,
  CardActionArea
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { FaGraduationCap, FaUsers, FaLightbulb } from 'react-icons/fa';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div initial="initial" animate="animate" variants={fadeIn}>
                <Typography variant="h2" component="h1" gutterBottom>
                  Jitesh Kumar Mishra
                </Typography>
                <Typography variant="h4" gutterBottom>
                  For Student Parliament - IIT BHU
                </Typography>
                <Typography variant="h6" paragraph>
                  Empowering students with a voice that matters
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Button 
                    component={Link} 
                    to="/vision" 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    sx={{ mr: 2, mb: 2 }}
                  >
                    My Vision
                  </Button>
                  <Button 
                    component={Link} 
                    to="/contact" 
                    variant="outlined" 
                    color="inherit" 
                    size="large"
                    sx={{ mb: 2 }}
                  >
                    Get Involved
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component="img"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                  alt="Jitesh Kumar Mishra"
                  src="/placeholder-profile.jpg"
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Key Priorities Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ mb: 6 }}
        >
          Key Priorities
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Box sx={{ fontSize: 60, color: 'primary.main', mb: 2 }}>
                    <FaGraduationCap />
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Academic Excellence
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Advocating for improved academic resources, research opportunities, and balanced curriculum for all students.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Box sx={{ fontSize: 60, color: 'primary.main', mb: 2 }}>
                    <FaUsers />
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Student Welfare
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Ensuring better hostel facilities, improved campus amenities, and mental health support for all students.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Box sx={{ fontSize: 60, color: 'primary.main', mb: 2 }}>
                    <FaLightbulb />
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Innovation & Culture
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Promoting cultural diversity, technical innovation, and extra-curricular activities for holistic development.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 6, my: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Make a Change?
          </Typography>
          <Typography variant="body1" paragraph>
            Join Jitesh's campaign and be part of the movement to transform student life at IIT BHU.
          </Typography>
          <Button 
            component={Link} 
            to="/contact" 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ mt: 2 }}
          >
            Join The Campaign
          </Button>
        </Container>
      </Box>

      {/* Testimonials/Endorsements Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ mb: 6 }}
        >
          What Students Say
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                      "Jitesh has always been passionate about student issues and has great ideas for improving campus life. He's the perfect candidate for Student Parliament."
                    </Typography>
                    <Typography variant="subtitle1" color="primary" fontWeight="bold">
                      - Student Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Department of Computer Science, 3rd Year
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default HomePage; 