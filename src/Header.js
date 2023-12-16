// Header.js

import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

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
              src="/path/to/your/logo.png"
              alt="Logo"
              style={{ width: '40px', height: 'auto' }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
