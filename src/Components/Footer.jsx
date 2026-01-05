import React from 'react';
import { Link } from 'react-router';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-primary p-4 shadow-[0_-3px_6px_rgba(0,0,0,0.1)]">
  
  <Container customStyle='flex flex-row items-center justify-between'>
    <p>© {new Date().getFullYear()} <span className='pr-1.5 font-bold text-[#030712]'>ABDUR ROB.</span>All right reserved</p>

    <div className='flex gap-4'>
      <Link to={"/"} className='font-bold transition-colors duration-300 ease-linear hover:text-red!'>Privacy Policy</Link>
      <Link to={"/"} className='font-bold transition-colors duration-300 ease-linear hover:text-red!'>Terms of Service</Link>
    </div>
  </Container>
</footer>
  );
};

export default Footer;