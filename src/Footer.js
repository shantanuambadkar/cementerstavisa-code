import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <p>&copy;2023 Cementers Developers | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
