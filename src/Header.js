// Header.js

import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import logo from './1.png';

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Cementers
            </Typography>
            <img
              src={logo}
              alt="Logo"
              style={{ width: '60px', height: 'auto' }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
