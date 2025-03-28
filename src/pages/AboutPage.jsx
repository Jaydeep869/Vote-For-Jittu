import { Container, Typography, Box, Grid, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { FaCheck, FaTrophy, FaUniversity, FaCalendarAlt } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            align="center" 
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 4 }}
          >
            About Jitesh Kumar Mishra
          </Typography>
          
          <Box sx={{ my: 6 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={5}>
                <Box
                  component="img"
                  src="/placeholder-profile.jpg"
                  alt="Jitesh Kumar Mishra"
                  sx={{
                    width: '100%',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography variant="h4" gutterBottom>
                  Who I Am
                </Typography>
                <Typography variant="body1" paragraph>
                  Hi! I'm Jitesh Kumar Mishra, a passionate student leader committed to making a positive impact on our campus community. As a student at IIT BHU, I've experienced firsthand the challenges and opportunities that our institution offers.
                </Typography>
                <Typography variant="body1" paragraph>
                  My journey at IIT BHU has been filled with learning, growth, and a deep appreciation for our diverse student body. I believe that every student deserves a voice, and I'm running for Student Parliament to ensure that those voices are heard and respected.
                </Typography>
                <Typography variant="body1">
                  With a background in [Student's Major/Department], I bring a unique perspective and a set of skills that I believe will help address the needs of our student community effectively.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          
          <Divider sx={{ my: 6 }} />
          
          {/* Education & Experience */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ color: 'primary.main', fontSize: 40, mr: 2 }}>
                    <FaUniversity />
                  </Box>
                  <Typography variant="h4">Education</Typography>
                </Box>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <FaCalendarAlt color="#1976d2" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="B.Tech in [Department]" 
                      secondary="IIT BHU, 20XX - Present" 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FaCalendarAlt color="#1976d2" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Higher Secondary Education" 
                      secondary="[School Name], 20XX" 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FaCalendarAlt color="#1976d2" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Secondary Education" 
                      secondary="[School Name], 20XX" 
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ color: 'primary.main', fontSize: 40, mr: 2 }}>
                    <FaTrophy />
                  </Box>
                  <Typography variant="h4">Achievements</Typography>
                </Box>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <FaCheck color="#1976d2" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="[Academic/Sports/Cultural Achievement]" 
                      secondary="[Brief description or year]" 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FaCheck color="#1976d2" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="[Leadership Position or Role]" 
                      secondary="[Organization or department, year]" 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FaCheck color="#1976d2" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="[Project or Initiative Led]" 
                      secondary="[Result or impact of the initiative]" 
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
          
          <Box sx={{ my: 6 }}>
            <Typography variant="h4" gutterBottom>
              Why I'm Running
            </Typography>
            <Typography variant="body1" paragraph>
              I believe in the potential of our student community at IIT BHU. We are more than just students; we are future leaders, innovators, and change-makers. The Student Parliament is a platform where our collective voices can shape policies that enhance our academic experience and campus life.
            </Typography>
            <Typography variant="body1" paragraph>
              My decision to run for Student Parliament stems from a deep commitment to serving our community. I've observed areas where we can improve, from academic resources to campus facilities, from mental health support to cultural inclusivity.
            </Typography>
            <Typography variant="body1">
              If elected, I promise to be a dedicated representative who listens to your concerns, advocates for your needs, and works tirelessly to make IIT BHU a better place for all students. Together, we can build a more responsive, inclusive, and dynamic student government.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Layout>
  );
};

export default AboutPage; 