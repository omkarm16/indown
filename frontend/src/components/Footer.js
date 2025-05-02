import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} InstaDL. All rights reserved.</p>
      <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
    </footer>
  );
}

export default Footer;
