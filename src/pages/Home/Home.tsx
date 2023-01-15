import React from 'react';
import { Box } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: 'rgb(250,250,245)',
      }}
    >
      <NavBar />
    </Box>
  );
};

export default Home;
