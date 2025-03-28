import { Container, Typography, Box, Grid, Card, CardContent, CardHeader, Divider, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { FaGraduationCap, FaUsers, FaUtensils, FaLaptop, FaHeartbeat, FaBullhorn } from 'react-icons/fa';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

const VisionPage = () => {
  const visionAreas = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      description: "Advocating for improved academic resources and opportunities for all students.",
      points: [
        "Push for more flexible credit systems and course options",
        "Enhance library resources and digital learning platforms",
        "Encourage research opportunities for undergraduate students",
        "Organize more industry-academia interactions and guest lectures"
      ],
      progress: 0
    },
    {
      icon: <FaUsers />,
      title: "Student Welfare",
      description: "Ensuring the physical and mental well-being of all students on campus.",
      points: [
        "Improve hostel facilities and maintenance systems",
        "Advocate for better amenities in student residences",
        "Create more recreational spaces for students",
        "Ensure transparency in administrative decisions affecting students"
      ],
      progress: 0
    },
    {
      icon: <FaUtensils />,
      title: "Mess & Food Services",
      description: "Working to improve the quality and variety of food options on campus.",
      points: [
        "Regular quality checks and feedback mechanisms for mess food",
        "Introduce more variety in mess menus",
        "Advocate for more food outlets on campus",
        "Ensure hygienic food preparation and serving practices"
      ],
      progress: 0
    },
    {
      icon: <FaLaptop />,
      title: "Technology & Infrastructure",
      description: "Upgrading campus infrastructure to meet modern educational needs.",
      points: [
        "Push for better internet connectivity across campus",
        "Advocate for upgraded laboratory equipment",
        "Ensure smart classrooms with modern teaching aids",
        "Develop online platforms for streamlined administrative processes"
      ],
      progress: 0
    },
    {
      icon: <FaHeartbeat />,
      title: "Health & Wellness",
      description: "Prioritizing both physical and mental health services for the student community.",
      points: [
        "Improve healthcare services at the institute health center",
        "Establish better mental health counseling services",
        "Organize regular health check-ups and awareness programs",
        "Create stress management and wellness programs during exam periods"
      ],
      progress: 0
    },
    {
      icon: <FaBullhorn />,
      title: "Student Voice & Representation",
      description: "Ensuring every student's concerns and ideas are heard and addressed.",
      points: [
        "Regular open forums for students to voice concerns",
        "Transparent communication of parliament decisions",
        "Create department-wise student representatives",
        "Develop feedback mechanisms for institutional policies"
      ],
      progress: 0
    }
  ];

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
              My Vision for IIT BHU
            </Typography>
            <Typography variant="h5" color="textSecondary">
              A student-centered approach to transform our campus experience
            </Typography>
          </Box>

          <Box mb={8}>
            <Typography variant="body1" paragraph>
              As your representative in the Student Parliament, I am committed to bringing meaningful changes to our campus life. My vision is centered around creating an environment where every student can thrive academically, socially, and personally. These are not just campaign promises but commitments I intend to fulfill with your support and collaboration.
            </Typography>
            <Typography variant="body1">
              Below are the key areas I plan to focus on, based on extensive discussions with fellow students and understanding the challenges we face collectively:
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {visionAreas.map((area, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card elevation={3} sx={{ height: '100%' }}>
                    <CardHeader
                      avatar={
                        <Box sx={{ color: 'primary.main', fontSize: 30 }}>
                          {area.icon}
                        </Box>
                      }
                      title={
                        <Typography variant="h5" component="h3">
                          {area.title}
                        </Typography>
                      }
                      subheader={area.description}
                    />
                    <CardContent>
                      {area.points.map((point, idx) => (
                        <Box key={idx} sx={{ mb: 1.5 }}>
                          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'baseline' }}>
                            <Box component="span" sx={{ mr: 1, fontSize: '0.8rem' }}>•</Box>
                            {point}
                          </Typography>
                        </Box>
                      ))}
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                          Progress:
                        </Typography>
                        <Box sx={{ width: '100%' }}>
                          <LinearProgress 
                            variant="determinate" 
                            value={area.progress} 
                            sx={{ height: 8, borderRadius: 5 }} 
                          />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box my={8}>
            <Divider sx={{ mb: 4 }} />
            <Typography variant="h4" gutterBottom>
              My Commitment to You
            </Typography>
            <Typography variant="body1" paragraph>
              I believe that effective representation is about listening, understanding, and acting on the behalf of those you represent. If elected, I commit to:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Transparency
                  </Typography>
                  <Typography variant="body1">
                    Regular updates on Student Parliament proceedings and decisions that affect our campus community.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Accessibility
                  </Typography>
                  <Typography variant="body1">
                    Being available to hear your concerns, suggestions, and feedback through regular office hours and open forums.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Accountability
                  </Typography>
                  <Typography variant="body1">
                    Taking responsibility for my actions and decisions, and providing regular progress reports on campaign promises.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Layout>
  );
};

export default VisionPage; 