import React from 'react';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-primary p-4 shadow-[0_-3px_6px_rgba(0,0,0,0.1)]">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='font-bold text-[#030712]'>ABDUR ROB</span></p>
  </aside>
</footer>
  );
};

export default Footer;