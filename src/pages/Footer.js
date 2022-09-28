import React from 'react';
// material
import { Container, Stack, Typography, Box } from '@mui/material';
// components
import AuthSocial from '../sections/auth/AuthSocial';
import Page from '../components/Page';

function Footer() {
  return (
    <>
      <Page title="Dashboard: Footer">
        <Box sx={{ border: '2px solid red', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
          <Container maxWidth="sm">
            <Stack alignItems="center" justifyContent="space-between" mb={5}>
              <AuthSocial />
              <Typography variant="body2">@2022 Satyendra.All right reserved.</Typography>
            </Stack>
          </Container>
        </Box>
      </Page>
    </>
  );
}

export default Footer;
