import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    role: '',
    password: '',
    cpassword: '',
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, role, password, cpassword } = user;
    if (!name || !email || !phone || !address || !role || !password || !cpassword) {
      window.alert('please fill all the field');
    } else {
      const res = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          role,
          password,
          cpassword,
        }),
      });

      const data = await res.json();
      // I need to change the data to res
      if (data.status === 422 || !data) {
        console.log('INvalid Registration');
      } else {
        console.log('Successfull Registration');
        navigate('/login');
      }
    }
  };

  return (
    <>
      <form method="POST" autoComplete="off">
        <Box>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                name="name"
                type="text"
                value={user.name}
                onChange={handleInputs}
                fullWidth
                id="outlined-basic"
                label="frist name"
                variant="outlined"
              />
              <TextField
                name="email"
                type="text"
                value={user.email}
                onChange={handleInputs}
                fullWidth
                id="outlined-basic"
                label="email"
                variant="outlined"
              />
              <TextField
                name="phone"
                type="number"
                value={user.phone}
                onChange={handleInputs}
                fullWidth
                id="outlined-basic"
                label="phone"
                variant="outlined"
              />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                name="address"
                type="text"
                value={user.address}
                onChange={handleInputs}
                fullWidth
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
              <TextField
                name="role"
                type="text"
                value={user.role}
                onChange={handleInputs}
                fullWidth
                id="outlined-basic"
                label="job role"
                variant="outlined"
              />
            </Stack>

            <TextField
              type="text"
              name="password"
              value={user.password}
              onChange={handleInputs}
              fullWidth
              id="outlined-basic"
              label="password"
              variant="outlined"
            />
            <TextField
              type="text"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInputs}
              fullWidth
              id="outlined-basic"
              label="password"
              variant="outlined"
            />

            <Button onClick={PostData} fullWidth size="large" type="submit" variant="contained">
              Register
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
};

export default RegisterForm;
