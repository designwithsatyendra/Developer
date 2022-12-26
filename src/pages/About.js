import React from 'react';
import { Grid, Typography, Box, Button, Card, Container } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import Page from '../components/Page';
import account from '../_mock/account';
import Resume from './resume.pdf';

const About = () => (
  <>
    <Page title="About Me">
      <Container>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography className="about" variant="h6" sx={{ mb: 5 }}>
            About Me
          </Typography>
        </Box>
        <Card>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 5, mx: 2.5 }}>
                <Box className="blur" style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                  <img
                    style={{ width: '400px', height: '50vh', textAlign: 'center' }}
                    src={account.myprofile}
                    alt="myimg"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 5, mx: 2.5 }}>
                <Typography variant="body2" sx={{ mb: 5 }}>
                  A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and
                  experience of building Web applications with JavaScript / Reactjs / Nodejs and some other tool
                  libraries and frameworks.
                </Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Here are a few Highlights:
                </Typography>
                <div style={{ marginLeft: '15px', margin: '15px' }}>
                  <ul style={{ fontSize: '13px' }}>
                    <li>Full Stack Wev and mobile development</li>
                    <li>Interactive Front End as per the Design</li>
                    <li>React and React Native</li>
                    <li>Buliding Rest API</li>
                    <li>Managing database</li>
                  </ul>
                </div>
                <a style={{ textDecoration: 'none' }} href="https://www.youtube.com/watch?v=OXWCzLpcGN4">
                  <Button
                    style={{ margin: '5px' }}
                    to="/"
                    size="large"
                    color="warning"
                    variant="contained"
                    startIcon={<EmojiPeopleIcon />}
                  >
                    Hire Me
                  </Button>
                </a>
                <a style={{ textDecoration: 'none' }} href={Resume} download>
                  <Button size="large" color="warning" variant="contained" startIcon={<PictureAsPdfIcon />}>
                    Get Resume
                  </Button>
                </a>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Page>
  </>
);

export default About;
