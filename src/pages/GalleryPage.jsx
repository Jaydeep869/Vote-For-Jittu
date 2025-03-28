import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent,
  Tabs,
  Tab,
  Modal,
  IconButton
} from '@mui/material';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import CloseIcon from '@mui/icons-material/Close';

const GalleryPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // These would be replaced with actual images from Jitesh's campaign
  const galleries = [
    {
      category: "Campaign Events",
      images: [
        { src: "https://source.unsplash.com/random/800x600/?campus", title: "Campus Rally", description: "Addressing students at the central campus" },
        { src: "https://source.unsplash.com/random/800x600/?meeting", title: "Department Meeting", description: "Discussion with Computer Science students" },
        { src: "https://source.unsplash.com/random/800x600/?classroom", title: "Classroom Session", description: "Interactive session with first-year students" },
        { src: "https://source.unsplash.com/random/800x600/?debate", title: "Student Debate", description: "Participating in the student welfare debate" },
        { src: "https://source.unsplash.com/random/800x600/?podium", title: "Vision Speech", description: "Presenting my vision for the Student Parliament" },
        { src: "https://source.unsplash.com/random/800x600/?student", title: "Student Interaction", description: "One-on-one discussions with fellow students" }
      ]
    },
    {
      category: "Campus Initiatives",
      images: [
        { src: "https://source.unsplash.com/random/800x600/?volunteer", title: "Tree Planting Drive", description: "Environmental initiative at the hostel area" },
        { src: "https://source.unsplash.com/random/800x600/?workshop", title: "Technical Workshop", description: "Organizing a coding workshop for juniors" },
        { src: "https://source.unsplash.com/random/800x600/?cleanup", title: "Campus Cleanup", description: "Leading the weekend campus cleanup drive" },
        { src: "https://source.unsplash.com/random/800x600/?fundraising", title: "Fundraising Event", description: "Charity event for local education initiatives" }
      ]
    },
    {
      category: "Student Life",
      images: [
        { src: "https://source.unsplash.com/random/800x600/?students", title: "Hostel Life", description: "Building camaraderie in the student residences" },
        { src: "https://source.unsplash.com/random/800x600/?study", title: "Study Groups", description: "Collaborative study sessions during exam season" },
        { src: "https://source.unsplash.com/random/800x600/?cultural", title: "Cultural Festival", description: "Participating in the annual cultural events" },
        { src: "https://source.unsplash.com/random/800x600/?sports", title: "Sports Tournament", description: "Inter-hostel cricket championship" },
        { src: "https://source.unsplash.com/random/800x600/?technology", title: "Tech Exhibition", description: "Showcasing innovations at the tech expo" }
      ]
    }
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
              Campaign Gallery
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Visual journey of our campaign and campus activities
            </Typography>
            
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              indicatorColor="primary"
              textColor="primary"
              centered
              sx={{ mt: 4 }}
            >
              {galleries.map((gallery, index) => (
                <Tab key={index} label={gallery.category} />
              ))}
            </Tabs>
          </Box>

          <Box mt={4}>
            <Grid container spacing={3}>
              {galleries[tabValue].images.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card 
                      elevation={3} 
                      sx={{ 
                        cursor: 'pointer',
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'scale(1.03)'
                        }
                      }}
                      onClick={() => handleOpenModal(image)}
                    >
                      <CardMedia
                        component="img"
                        height="240"
                        image={image.src}
                        alt={image.title}
                      />
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {image.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {image.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Image Modal */}
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="image-modal"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4
            }}
          >
            <Box
              sx={{
                position: 'relative',
                bgcolor: 'background.paper',
                boxShadow: 24,
                borderRadius: 1,
                p: 1,
                maxWidth: '90%',
                maxHeight: '90%',
              }}
            >
              <IconButton
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'grey.500',
                  bgcolor: 'rgba(255, 255, 255, 0.7)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  }
                }}
                onClick={handleCloseModal}
              >
                <CloseIcon />
              </IconButton>
              {selectedImage && (
                <>
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: 'calc(90vh - 100px)',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" id="image-modal">
                      {selectedImage.title}
                    </Typography>
                    <Typography variant="body1">
                      {selectedImage.description}
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
          </Modal>
        </motion.div>
      </Container>
    </Layout>
  );
};

export default GalleryPage; 