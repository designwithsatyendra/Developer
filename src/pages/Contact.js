import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
import { Container, Typography, Card, Grid, Box, Stack, Button, TextField, TextareaAutosize } from '@mui/material';
import { styled } from '@mui/material/styles';
import Page from '../components/Page';

import { SendEmail } from '../API';
import InlineError from '../components/component/InlineError';
import { validateEmail } from '../components/component/Validation';
// import Toast from '../components/component/Toast';

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

export default function EcommerceShop() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState();
  const [send, setSend] = useState();

  useEffect(() => {
    validateEmail({ email, setEmailError });

    if (send) {
      setFullName('');
      setEmail('');
      setMessage('');
    }
  }, [fullName, email, message, send]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!emailError) {
      SendEmail({ fullName, email, message, setSend }).then(() => {
        setFullName('');
        setEmail('');
        setMessage('');
      });
    }
  };

  return (
    <Page title="Contact Us">
      <Container>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography className="about" variant="h6" sx={{ mb: 5 }}>
            Get in Touch
          </Typography>
        </Box>
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
                      7869351845
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
                      designwithsatya@gmail.com
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
                <form onSubmit={submitHandler}>
                  <Typography variant="body2"> {emailError && <InlineError error={emailError} />}</Typography>
                  <Stack spacing={3}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <TextField
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Frist Name"
                        variant="outlined"
                      />

                      <TextField
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                      />
                    </Stack>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={6}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can help you"
                      style={{ width: '100%' }}
                    />

                    <Button type="submit" fullWidth size="large" variant="contained">
                      Submit
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
                  <iframe
                    title="myFrame"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62241.30612445064!2d77.63917795648106!3d12.838001318663284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a5cfc0fce5af71d!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1664272240818!5m2!1sen!2sin"
                    height="280"
                    width="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Page>
  );
}
