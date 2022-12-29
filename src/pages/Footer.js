import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AuthSocial from '../sections/auth/AuthSocial';

const MainBox = styled(Box)(() => ({
  // backgroundColor: theme.palette.grey[0],
  background:
    'radial-gradient(circle at 15% 50%,#fef9c3,rgba(255,255,255,0) 25%),radial-gradient(circle at 85% 30%,#d1fae5,rgba(255,255,255,0) 25%);',
  textAlign: 'center',
  marginTop: '14rem',
  padding: '10px',
}));
const Footer = () => (
  <>
    <MainBox>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box style={{ marginTop: '15px' }} sx={{ mb: 1, mx: 2.5 }}>
            Services
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box style={{ marginTop: '15px' }} sx={{ mb: 1, mx: 2.5 }}>
            Follow Us
          </Box>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <AuthSocial />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box style={{ marginTop: '15px' }} sx={{ mb: 1, mx: 2.5 }}>
            Call US
          </Box>
          <Typography variant="body2">+917869351845</Typography>
        </Grid>
      </Grid>
      <Box style={{ marginTop: '5px' }}>
        <Typography variant="body1">Copyright © 2022 by Satyendra Rajpoot. All Right Reserved.</Typography>
      </Box>
    </MainBox>
  </>
);

export default Footer;
