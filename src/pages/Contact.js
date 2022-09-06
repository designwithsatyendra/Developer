import { Container, Typography, Card, Grid, Box, Stack, Button, TextField, TextareaAutosize } from '@mui/material';

import { styled } from '@mui/material/styles';
import Page from '../components/Page';

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));
export default function EcommerceShop() {
  return (
    <Page title="Dashboard: Products">
      <Container>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Contact
        </Typography>
        <Card>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 1, mx: 2.5 }}>
                <AccountStyle>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                      Phone
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      7880386280
                    </Typography>
                  </Box>
                </AccountStyle>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 1, mx: 2.5 }}>
                <AccountStyle>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      satyendrapoojarajpoot@gmail.com.in
                    </Typography>
                  </Box>
                </AccountStyle>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 5, mx: 2.5 }}>
                <AccountStyle>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                      Address
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Banda Uttar pradesh 210001
                    </Typography>
                  </Box>
                </AccountStyle>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ mb: 5, mx: 2.5 }}>
                <form method="POST">
                  <Stack spacing={3}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <TextField
                        name="name"
                        type="text"
                        fullWidth
                        id="outlined-basic"
                        label="Frist Name"
                        variant="outlined"
                      />
                      <TextField
                        name="email"
                        type="email"
                        fullWidth
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                      />
                    </Stack>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={8}
                      placeholder="type message here"
                      style={{ width: '100%' }}
                    />

                    <Button fullWidth size="large" type="submit" variant="contained">
                      Send Message
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                sx={{ mb: 5, mx: 2.5 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  height: '87%',
                }}
              >
                <Typography variant="h2" sx={{ mb: 5 }}>
                  Get In Touch
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Page>
  );
}
