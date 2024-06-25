import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{
      borderRadius: '10px',
      border: '3px solid black'
    }}>
      <Toolbar>
        <Typography variant="h6" fontFamily={'Verdana, Trebuchet MS, sans-serif'} fontSize={'3rem'} textAlign={'center'} component="div" sx={{ flexGrow: 1 }}>
          Superteam Balkan
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;