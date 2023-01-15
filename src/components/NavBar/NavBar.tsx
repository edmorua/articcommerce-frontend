import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import { AcUnit } from '@mui/icons-material';
import ButtonLink from '../LinkButton/LinkButton';

const NavBar = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton>
            <AcUnit />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Artic
          </Typography>
          <ButtonLink color='inherit' component={Link} to='/login'>
            Login
          </ButtonLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
