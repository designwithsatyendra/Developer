import React from 'react';
import { Container, Typography, Grid, Box, Stack, Button } from '@mui/material';

// components
import { styled } from '@mui/material/styles';
import education from '../_mock/education';
import Page from '../components/Page';
import Iconify from '../components/Iconify';

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

const Education = () => (
  <>
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Education
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Add Education
          </Button>
        </Stack>
      </Container>

      {education.map((data, index) => (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 1, mx: 2.5 }}>
                <AccountStyle>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                      qualification
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {data.qualification}
                    </Typography>
                  </Box>
                </AccountStyle>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 1, mx: 2.5 }}>
                <AccountStyle>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                      Percentage
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {data.CollgeName}
                    </Typography>
                  </Box>
                </AccountStyle>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 5, mx: 2.5 }}>
                <AccountStyle>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                      State
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {data.State}
                    </Typography>
                  </Box>
                </AccountStyle>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 5, mx: 2.5 }}>
                <AccountStyle>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                      PassoutYear
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {data.PassoutYear}
                    </Typography>
                  </Box>
                </AccountStyle>
              </Box>
            </Grid>
          </Grid>
        </>
      ))}
    </Page>
  </>
);

export default Education;
