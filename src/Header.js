// Header.js

import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import logo from './1.png';

const Header = () => {
  return (
    <div className="sticky-header">
      <div className="mobile-contact-us-header">
        <Typography component="div" sx={{ flexGrow: 1 }}>
          +91-8828823099 / +91-9819316013
        </Typography>
        <Typography component="div" sx={{ flexGrow: 1 }} className="end-text">
          <a
            href="https://wa.me/8828823099"
            target="_blank"
            className="aTagColor"
          >
            Contact Support
          </a>
        </Typography>
      </div>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <img
              src={logo}
              alt="Logo"
              style={{ width: '60px', height: 'auto' }}
            />
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              Cementers
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
