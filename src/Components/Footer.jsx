import React from 'react';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-primary p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ABDUR ROB</p>
  </aside>
</footer>
  );
};

export default Footer;