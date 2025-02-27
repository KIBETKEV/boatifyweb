import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0ca86f',
      color: 'white',
      padding: '120px 800px',
      textAlign: 'center',
      fontSize: '0.9rem'
    }}>
        <h2>BOATIFY-Your boat rental platform</h2>
      <p>© {new Date().getFullYear()} Boatify. All rights reserved.</p>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '8px' }}>
        <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
        <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        <a href="/terms" style={{ color: 'white', textDecoration: 'none' }}>Terms</a>
      </nav>
    </footer>
  );
}

export default Footer;