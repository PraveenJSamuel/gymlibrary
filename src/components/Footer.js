import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#374151">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '16px' } }} color='#FFBE79' textAlign="center" pb="5px"> <span><img src={Logo} alt="logo" style={{ width: 'auto', height: '100px' }} /></span> Copyright &copy; 2023 The Gym Library. All Rights Reserved.</Typography>
  </Box>
);

export default Footer;
