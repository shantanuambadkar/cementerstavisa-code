// Header.js

import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import logo from './Logo.png';

const Header = () => {
  return (
    <div className="sticky-header">
      <div className="mobile-contact-us-header">
        <Typography component="div" sx={{ flexGrow: 1 }} className="small-font">
          <a href="tel:+918828823099" className="aTagColor">
            +91-8828823099
          </a>{' '}
          /
          <a href="tel:+919819316013" className="aTagColor">
            +91-9819316013
          </a>
        </Typography>
        <Typography
          component="div"
          sx={{ flexGrow: 1 }}
          className="end-text small-font"
        >
          <a
            href="https://wa.me/+918828823099"
            className="aTagColor"
            target="_blank"
            rel="noopener noreferrer"
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
              style={{ width: '10%', height: 'auto' }}
            />
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              Cementers Developers
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
