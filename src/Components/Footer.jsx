import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary/5 backdrop-blur-3xl footer sm:footer-horizontal footer-center text-primary p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='font-bold text-[#030712]'>ABDUR ROB</span></p>
  </aside>
</footer>
  );
};

export default Footer;