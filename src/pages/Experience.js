import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Stack, Typography, Grid, Box, Card } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import CImg from '../image/cimg.jfif';
import CTitan from '../image/images.png';

export default function Experience() {
  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Experience
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Add Experience
          </Button>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 5, mx: 2.5 }}>
                <Grid container spacing={2}>
                  <Grid item xs={8} sm={8} md={8}>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      React Developer
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      I worked with NASTECH Group of Companies to design and developed their online project management
                      system. The system could be used to track the project progress, assign tasks, manage employees,
                      generate reports among other works.
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Responsibilites
                    </Typography>
                    <div style={{ marginLeft: '15px', margin: '15px' }}>
                      <ul style={{ fontSize: '13px' }}>
                        <li>Suggesting the solution to the problems</li>
                        <li>Implementing the solutions</li>
                        <li>Designing the structure and UI of the pages</li>
                        <li>Making the required changes suggested by client</li>
                      </ul>
                    </div>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4}>
                    <Box>
                      <img src={CImg} alt="exlogo" style={{ borderRadius: '50%', verticalAlign: 'middle' }} />
                      <Typography variant="h6">Jmz Technologies</Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        Jun 2020 - Mar 2022
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 5, mx: 2.5 }}>
                <Grid container spacing={2}>
                  <Grid item xs={8} sm={8} md={8}>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      React Developer
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      I worked with TechnoSpark as their React and NextJS Developer. Here, I worked mainly on their
                      frontend application and it's integration with the Stripe API. I was mainly tasked with handling
                      Payment integration.
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Responsibilites
                    </Typography>
                    <div style={{ marginLeft: '15px', margin: '15px' }}>
                      <ul style={{ fontSize: '13px' }}>
                        <li>Writing clean and standard code</li>
                        <li>Helping fellow colleagues with their problems</li>
                        <li>Integrating Stripe payment gateway</li>
                        <li>Fixing any problems in previously written code</li>
                      </ul>
                    </div>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4}>
                    <Box>
                      <img src={CTitan} alt="exlogo" style={{ borderRadius: '50%', verticalAlign: 'middle' }} />
                      <Typography variant="h6">Titan Company</Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        Mar 2022 - present
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
