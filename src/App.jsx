import { useState, useEffect } from 'react';
import { 
  ThemeProvider, 
  createTheme, 
  responsiveFontSizes 
} from '@mui/material/styles';
import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Avatar,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Link,
  Drawer,
  Menu,
  MenuItem,
  Divider
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaUsers, 
  FaLightbulb, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaWhatsapp,
  FaChevronDown,
  FaVoteYea,
  FaMicrophone,
  FaHandshake,
  FaBook,
  FaUniversity,
  FaBullhorn,
  FaCalendarAlt,
  FaHeart,
  FaShieldAlt,
  FaBars
} from 'react-icons/fa';
import jittuImage from './assets/images/jittu.jpeg';
import { ReactTyped } from 'react-typed';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1',
      light: '#5472d3',
      dark: '#002171',
    },
    secondary: {
      main: '#d32f2f', 
      light: '#ff6659',
      dark: '#9a0007',
    },
    tertiary: {
      main: '#00695c', 
      light: '#439889',
      dark: '#003d33',
    },
    background: {
      default: '#f5f5f5', 
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#424242',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '0.01em',
    },
    h4: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 6px 10px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
  ],
});

// Make fonts responsive
theme = responsiveFontSizes(theme);

const slogans = [
  "Empowering students with a voice that matters",
  "For the students, by the students",
  "Building a better campus, together",
  "Your voice deserves to be heard",
  "Progress through representation",
  "A new vision for student governance",
  "United campus, stronger voice",
  "Making IIT BHU work for all students"
];

const voteMessages = [
  "Vote for Jitesh", // English
  "जितेश को वोट दें", // Hindi
  "जितेश ला मत द्या", // Marathi
  "ಜಿತೇಶ್‌ಗೆ ಮತ ನೀಡಿ", // Kannada
  "ஜிதேஷுக்கு வாக்களியுங்கள்", // Tamil
  "జితేష్‌కు ఓటు వేయండి", // Telugu
  "জিতেশকে ভোট দিন", // Bengali
  "ജിതേഷിന് വോട്ട് ചെയ്യുക", // Malayalam
  "જિતેશને મત આપો", // Gujarati
  "ਜਿਤੇਸ਼ ਨੂੰ ਵੋਟ ਦਿਓ", // Punjabi
  "ଜିତେଶଙ୍କୁ ଭୋଟ୍ ଦିଅନ୍ତୁ", // Odia
  "জিতেশক ভোট দিয়ক", // Assamese
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [slogan, setSlogan] = useState(slogans[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Change slogan every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * slogans.length);
      setSlogan(slogans[randomIndex]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'vision', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle tab changes
  const handleSectionChange = (event, newSection) => {
    setActiveSection(newSection);
    const element = document.getElementById(newSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false); // Close mobile menu when a section is selected
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Vision areas
  const visionPoints = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      description: "Advocating for improved academic resources and more research opportunities for all students."
    },
    {
      icon: <FaUsers />,
      title: "Student Welfare",
      description: "Ensuring better hostel facilities, improved campus amenities, and mental health support."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation & Culture",
      description: "Promoting cultural diversity, technical innovation, and extra-curricular activities."
    }
  ];

  // Expanded commitments
  const commitments = [
    {
      icon: <FaVoteYea />,
      title: "Your Voice Matters",
      description: "I will always listen to your concerns and be your strong advocate in the Student Parliament, ensuring every student's perspective is represented."
    },
    {
      icon: <FaMicrophone />,
      title: "Transparent Communication",
      description: "You'll always know what's happening with regular updates, open forums, and clear communication about ongoing initiatives and challenges."
    },
    {
      icon: <FaHandshake />,
      title: "Actionable Results",
      description: "I focus on practical solutions that bring real improvements to your campus experience, with measurable goals and regular progress reports."
    },
    {
      icon: <FaCalendarAlt />,
      title: "Responsive Timing",
      description: "Quick response to urgent student issues within 48 hours, with a structured approach to addressing both immediate and long-term concerns."
    },
    {
      icon: <FaHeart />,
      title: "Inclusive Approach",
      description: "Ensuring all student groups, regardless of background, department, or year of study, are equally represented and their unique needs addressed."
    },
    {
      icon: <FaShieldAlt />,
      title: "Ethical Leadership",
      description: "Maintaining integrity in all dealings, with transparent use of resources and decision-making processes that put students first."
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Navigation Bar */}
      <AppBar position="fixed" elevation={3} color="primary" sx={{ 
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        backdropFilter: 'blur(8px)',
        background: 'linear-gradient(90deg, rgba(13, 71, 161, 0.95), rgba(41, 98, 255, 0.9))',
        height: { xs: '60px', md: 'auto' }, // Reduced height on mobile
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Toolbar sx={{ minHeight: { xs: '60px', md: '64px' } }}>
          <Typography variant="h6" component="div" sx={{ 
            flexGrow: 1, 
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', sm: '1.2rem', md: '1.5rem' } // Smaller font on mobile
          }}>
            JITESH KUMAR MISHRA
          </Typography>
          
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleMobileMenu}
                sx={{ 
                  mr: 2,
                  p: 1,
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '8px',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <FaBars size={20} />
              </IconButton>
              
              <Drawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                PaperProps={{
                  sx: {
                    width: '70%',
                    maxWidth: '300px',
                    background: 'linear-gradient(135deg, #0d47a1 0%, #2962ff 100%)',
                    color: 'white',
                    padding: '1rem 0'
                  }
                }}
              >
                <Box sx={{ 
                  p: 2, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%'
                }}>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 'bold', 
                    mb: 3, 
                    pb: 2, 
                    borderBottom: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    JITESH KUMAR MISHRA
                  </Typography>
                  
                  <List component="nav">
                    {['home', 'about', 'vision', 'contact'].map((section) => (
                      <ListItem 
                        button 
                        key={section}
                        onClick={() => handleSectionChange(null, section)}
                        sx={{
                          mb: 1,
                          borderRadius: '8px',
                          background: activeSection === section ? 'rgba(255,255,255,0.2)' : 'transparent',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(255,255,255,0.1)'
                          }
                        }}
                      >
                        <ListItemText 
                          primary={section.charAt(0).toUpperCase() + section.slice(1)} 
                          sx={{
                            color: 'white',
                            pl: 2,
                            '& .MuiTypography-root': {
                              fontWeight: activeSection === section ? 'bold' : 'normal'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Box sx={{ mt: 'auto', pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2 }}>
                      <IconButton color="inherit" size="small">
                        <FaInstagram />
                      </IconButton>
                      <IconButton color="inherit" size="small">
                        <FaWhatsapp />
                      </IconButton>
                    </Box>
                    <Typography variant="body2" align="center" sx={{ opacity: 0.7, fontSize: '0.8rem' }}>
                      Vote for Change
                    </Typography>
                  </Box>
                </Box>
              </Drawer>
            </>
          ) : (
            <Tabs 
              value={activeSection}
              onChange={handleSectionChange}
              textColor="inherit"
              indicatorColor="secondary"
              aria-label="navigation tabs"
              sx={{
                '& .MuiTab-root': {
                  fontWeight: 'medium',
                  fontSize: '1rem',
                  minWidth: '100px',
                  transition: 'all 0.3s ease',
                  opacity: 0.7,
                  '&.Mui-selected': {
                    opacity: 1,
                    fontWeight: 'bold'
                  },
                  '&:hover': {
                    opacity: 1,
                    background: 'rgba(255,255,255,0.1)'
                  },
                },
                '& .MuiTabs-indicator': {
                  height: '3px',
                  borderRadius: '3px 3px 0 0'
                }
              }}
            >
              <Tab value="home" label="Home" />
              <Tab value="about" label="About" />
              <Tab value="vision" label="Vision" />
              <Tab value="contact" label="Contact" />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
      
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: { xs: '100vh', md: '100vh' },
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'primary.main',
          color: 'white',
          pt: { xs: 10, md: 12 },
          pb: { xs: 6, md: 8 },
          position: 'relative',
          backgroundImage: 'linear-gradient(135deg, rgba(13, 71, 161, 0.95), rgba(41, 98, 255, 0.8)), url(https://source.unsplash.com/random/1600x900/?campus)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <Typography 
                  variant="h1" 
                  component="h1" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '2.2rem', md: '3.8rem' },
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    fontWeight: 900,
                    letterSpacing: { xs: '1px', md: '2px' },
                    textAlign: { xs: 'center', md: 'center' },
                    mb: 1
                  }}
                >
                  JITESH KUMAR MISHRA
                </Typography>
                
                <Typography 
                  variant="h4" 
                  gutterBottom
                  sx={{ 
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    mb: 2,
                    letterSpacing: '1px',
                    textAlign: { xs: 'center', md: 'center' },
                    fontSize: { xs: '1.3rem', md: '1.8rem' }
                  }}
                >
                  FOR STUDENT PARLIAMENT - IIT BHU
                </Typography>
                
                <motion.div
                  key={slogan}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  <Typography 
                    variant="h5" 
                    paragraph
                    sx={{ 
                      fontStyle: 'italic',
                      mb: 4,
                      fontWeight: 'light',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      width: { md: '80%' },
                      maxWidth: { md: '600px' },
                      mx: 'auto',
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      padding: { md: '0.5rem 1.5rem 0.5rem 0' },
                      borderRight: { md: '4px solid rgba(211, 47, 47, 0.7)' },
                      position: 'relative',
                      lineHeight: 1.8,
                      textAlign: 'center',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    className="campaign-quote"
                  >
                    "{slogan}"
                  </Typography>
                </motion.div>
                
                <Box sx={{ 
                  mt: 4, 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  justifyContent: 'center',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center'
                }}>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    onClick={() => handleSectionChange(null, 'vision')}
                    sx={{ 
                      mb: { xs: 2, sm: 2 },
                      px: 4,
                      borderRadius: '30px',
                      fontWeight: 'bold',
                      boxShadow: 3,
                      width: { xs: '220px', sm: 'auto' }
                    }}
                    className="pulse-button campaign-button"
                  >
                    My Vision
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="inherit" 
                    size="large"
                    onClick={() => handleSectionChange(null, 'contact')}
                    sx={{ 
                      mb: 2,
                      px: 4,
                      borderRadius: '30px',
                      fontWeight: 'bold',
                      borderWidth: 2,
                      ml: { xs: 0, sm: 2 },
                      width: { xs: '220px', sm: 'auto' }
                    }}
                    className="campaign-button"
                  >
                    Connect With Me
                  </Button>
                </Box>
                
                {/* Multilingual Voting Message */}
                <Box 
                  sx={{ 
                    mt: 6, 
                    py: { xs: 2, md: 3 }, // Less padding on mobile
                    px: { xs: 2, md: 5 }, 
                    borderRadius: 2, 
                    bgcolor: 'rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: '90%', md: '450px' }, // Adjusted width on mobile
                    height: { xs: '150px', md: '180px' }, // Reduced height on mobile
                    mx: 'auto',
                    textAlign: 'center',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #ff6659, #d32f2f)',
                      zIndex: 1
                    }
                  }}
                >
                  <Typography variant="body1" sx={{ mb: 1, opacity: 0.9, fontWeight: 'light', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                    IIT BHU speaks in one voice
                  </Typography>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 'bold', 
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.75rem' }, // Smaller font on mobile
                    width: '100%',
                    height: { xs: '60px', md: '80px' }, // Reduced height on mobile
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ReactTyped
                      strings={voteMessages}
                      typeSpeed={100}
                      backSpeed={50}
                      backDelay={1000}
                      loop
                      cursorChar="|"
                      className="typed-text"
                    />
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                style={{ position: 'relative' }}
              >
                <Box 
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                    transform: 'translate(-8%, -8%) scale(1.2)',
                    zIndex: 0
                  }}
                />
                <Avatar
                  src={jittuImage}
                  alt="Jitesh Kumar Mishra"
                  sx={{
                    width: '350px',
                    height: '350px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                    border: '5px solid white',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
        
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: 20, 
            left: '50%', 
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Typography variant="body2" gutterBottom sx={{ opacity: 0.8 }}>
              Scroll to discover more
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <FaChevronDown />
            </Box>
          </motion.div>
        </Box>
      </Box>
      
      {/* About Section */}
      <Box 
        id="about" 
        sx={{ 
          py: 12,
          px: 2,
          bgcolor: 'background.default',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative elements */}
        <Box 
          sx={{ 
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(84, 114, 211, 0.1) 0%, rgba(245, 245, 245, 0) 70%)',
            top: '-200px',
            left: '-100px',
          }}
        />
        
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              align="center" 
              gutterBottom
              color="primary"
              sx={{ fontWeight: 'bold', mb: 6 }}
              className="section-title"
            >
              ABOUT ME
            </Typography>
          </motion.div>
          
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component="img"
                  src={jittuImage}
                  alt="Jitesh Kumar Mishra"
                  sx={{
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: 4,
                    boxShadow: 5,
                    border: '5px solid white',
                  }}
                />
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                  Jitesh Kumar Mishra
                </Typography>
                
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                  Hi! I'm a passionate student leader committed to making a positive impact on our campus community. As a student at IIT BHU, I've experienced firsthand the challenges and opportunities that our institution offers.
                </Typography>
                
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                  My journey at IIT BHU has been filled with learning, growth, and a deep appreciation for our diverse student body. I believe that every student deserves a voice, and I'm running for Student Parliament to ensure that those voices are heard and respected.
                </Typography>
                
                <Paper elevation={3} sx={{ 
                  p: 3, 
                  borderLeft: '6px solid', 
                  borderColor: 'secondary.main', 
                  mt: 4, 
                  borderRadius: '4px 16px 16px 4px',
                  height: { xs: 'auto', md: '100px' },
                  minHeight: { xs: '120px', md: '100px' },
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
                  <Typography variant="body1" sx={{ 
                    fontWeight: 500, 
                    fontSize: { xs: '0.9rem', md: '1.2rem' }, 
                    fontStyle: 'italic', 
                    color: 'text.primary'
                  }} className="campaign-quote">
                    "I am committed to representing your interests and working toward meaningful improvements in our campus experience. Together, we can make IIT BHU even better!"
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Vision Section */}
      <Box 
        id="vision" 
        sx={{ 
          py: 12,
          px: 2,
          bgcolor: 'primary.main',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative elements */}
        <Box 
          sx={{ 
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(13, 71, 161, 0) 70%)',
            bottom: '-100px',
            right: '-100px',
          }}
        />
        
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              align="center" 
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 2 }}
              className="section-title"
            >
              MY VISION
            </Typography>
            
            <Typography 
              variant="h5" 
              align="center" 
              sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
            >
              A student-centered approach to transform our campus experience
            </Typography>
          </motion.div>
          
          <Grid container spacing={4} justifyContent="center">
            {visionPoints.map((point, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ height: '100%', width: '100%' }}
                >
                  <Card sx={{ 
                    height: '100%', 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    backdropFilter: 'blur(10px)', 
                    color: 'white',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.2)'
                    },
                    display: 'flex',
                    flexDirection: 'column'
                  }} className="animated-card">
                    <CardContent className="vision-card-content" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', p: 3 }}>
                      <Box className="vision-icon">
                        {point.icon}
                      </Box>
                      <Typography variant="h5" component="h3" gutterBottom className="vision-title" sx={{ mb: 2 }}>
                        {point.title}
                      </Typography>
                      <Box className="vision-description" sx={{ px: 1 }}>
                        <Typography variant="body1" sx={{ textAlign: 'center', width: '100%' }}>
                          {point.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 10 }}>
            <Typography 
              variant="h3" 
              component="h3"
              align="center" 
              gutterBottom
              sx={{ mb: 6, fontWeight: 'bold' }}
            >
              My Commitment to You
            </Typography>
            
            <Paper 
              elevation={6} 
              sx={{ 
                p: { xs: 3, md: 5 }, 
                bgcolor: 'primary.main', 
                color: 'white', 
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0d47a1 0%, #2962ff 100%)'
              }} 
            >
              {/* Decorative overlay */}
              <Box sx={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                background: 'linear-gradient(45deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                zIndex: 0
              }} />
              
              <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }} justifyContent="center">
                {commitments.map((commitment, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}
                    >
                      <Box sx={{ 
                        textAlign: 'center', 
                        p: 3,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        maxWidth: '350px',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          background: 'rgba(255,255,255,0.1)',
                          borderRadius: 2
                        }
                      }} className="commitment-box">
                        <Box sx={{ 
                          fontSize: 45, 
                          mb: 2,
                          p: 2,
                          borderRadius: '50%',
                          bgcolor: 'rgba(255,255,255,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 80,
                          height: 80,
                          flexShrink: 0,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.4)',
                            transform: 'scale(1.1)'
                          }
                        }}>
                          {commitment.icon}
                        </Box>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2, minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center' }} className="commitment-title">
                          {commitment.title}
                        </Typography>
                        <Box className="commitment-description" sx={{ width: '100%', flexGrow: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', px: 1 }}>
                          <Typography variant="body2" sx={{ fontSize: '0.95rem', textAlign: 'center', width: '100%' }}>
                            {commitment.description}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Box>
        </Container>
      </Box>
      
      {/* Contact Section */}
      <Box 
        id="contact" 
        sx={{ 
          py: 12,
          px: 2,
          bgcolor: 'background.paper',
          color: 'text.primary',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative elements */}
        <Box 
          sx={{ 
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(211, 47, 47, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
            top: '10%',
            right: '-200px',
          }}
        />
        
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              align="center" 
              gutterBottom
              color="primary"
              sx={{ fontWeight: 'bold', mb: 2 }}
              className="section-title"
            >
              GET IN TOUCH
            </Typography>
            
            <Typography 
              variant="h5" 
              align="center" 
              color="text.secondary"
              sx={{ mb: 6 }}
            >
              Join the movement to transform student life at IIT BHU
            </Typography>
          </motion.div>
          
          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 5, md: 5 },
              pt: { xs: 7, md: 6 },
              mt: { xs: 10, md: 8 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }} 
            className="political-card shadow-strong"
          >
            {/* Ribbon positioned outside the Paper's overflow context */}
            <Box 
              className="political-ribbon"
              sx={{ 
                position: 'absolute',
                top: { xs: '20px', md: '20px' },
                right: { xs: '-65px', md: '-50px' },
                transform: 'rotate(45deg)',
                background: 'linear-gradient(90deg, #d32f2f, #ff6659)',
                color: 'white',
                padding: { xs: '5px 35px', md: '8px 40px' },
                fontWeight: 'bold',
                boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
                zIndex: 10,
                fontSize: { xs: '0.75rem', md: '0.9rem' },
                letterSpacing: '1px',
                textTransform: 'uppercase',
                width: { xs: '180px', md: '200px' },
                textAlign: 'center'
              }}
            >
              Vote for Change
            </Box>
            
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h4" gutterBottom color="primary" align="center" sx={{ 
                    fontWeight: 'bold',
                    fontSize: { xs: '1.6rem', md: '2.125rem' },
                    mt: { xs: 1, md: 0 }
                  }}>
                    Connect With Me
                  </Typography>
                  
                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    mt: 3,
                    borderRadius: 2,
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                  }}>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <FaEnvelope style={{ marginRight: '10px', color: '#0d47a1' }} /> mishrajitesh23@gmail.com
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <FaPhone style={{ marginRight: '10px', color: '#0d47a1' }} /> +91 9779465929
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                      <FaMapMarkerAlt style={{ marginRight: '10px', color: '#0d47a1' }} /> Room 430, Hostel PC RAY, IIT BHU
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Typography variant="h4" gutterBottom color="primary" align="center" sx={{ fontWeight: 'bold' }}>
                    Connect On Social Media
                  </Typography>
                  
                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    mt: 3,
                    borderRadius: 2,
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 4
                  }}>
                    <Link href="https://www.instagram.com/jiituu.24?igsh=MWt6N3VidmZuY2xyNA==" target="_blank" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                      <FaInstagram color="#E1306C" style={{ fontSize: '24px', marginRight: '8px' }} />
                      <Typography variant="body1">Instagram</Typography>
                    </Link>
                    
                    <Link href="https://wa.me/919779465929" target="_blank" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                      <FaWhatsapp color="#25D366" style={{ fontSize: '24px', marginRight: '8px' }} />
                      <Typography variant="body1">WhatsApp</Typography>
                    </Link>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </Paper>
          
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <motion.div
              whileInView={{ scale: [0.95, 1.05, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Paper 
                elevation={5} 
                sx={{ 
                  py: 4, 
                  px: 3,
                  color: 'white', 
                  borderRadius: 4,
                  background: 'linear-gradient(45deg, #0d47a1 30%, #2962ff 90%)',
                  boxShadow: '0 8px 20px rgba(13, 71, 161, 0.3)'
                }}
                className="vote-cta"
              >
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Vote for Progress. Vote for Change.
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
                  Your vote can make a difference in shaping the future of IIT BHU. Together, we can build a better campus community for all students.
                </Typography>
                <Button 
                  variant="outlined" 
                  color="inherit" 
                  size="large" 
                  sx={{ 
                    mt: 3,
                    px: 4,
                    borderWidth: 2,
                    borderRadius: 30,
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    letterSpacing: 1
                  }}
                >
                  Join the Movement
                </Button>
              </Paper>
            </motion.div>
          </Box>
        </Container>
      </Box>
      
      {/* Footer */}
      <Box 
        component="footer" 
        sx={{ 
          backgroundColor: 'primary.dark', 
          color: 'white', 
          py: 4,
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                JITESH KUMAR MISHRA
              </Typography>
              <Typography variant="body2">
                Candidate for Student Parliament • IIT BHU
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-end' } }}>
                
                <IconButton color="inherit" size="small">
                  <FaInstagram />
                </IconButton>
                <IconButton color="inherit" size="small">
                  <FaWhatsapp />
                </IconButton>
              </Box>
              <Typography variant="body2" sx={{ mt: 1 }}>
                &copy; {new Date().getFullYear()} Jitesh Kumar Mishra Campaign. All rights reserved.
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, opacity: 0.9, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                Created with <Box component="span" sx={{ color: '#ff6659', mx: 0.5, fontSize: '1.1rem' }} className="heart-pulse">❤</Box> by JD
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

