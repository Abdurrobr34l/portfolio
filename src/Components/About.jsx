import React from 'react';
import aboutImage from "../assets/mine-5.webp";

const About = () => {
  return (
    <section id='about' className='h-[calc(100vh-170px)]'>
      <div className='flex items-center justify-between'>
      <div>
        <p>Lorem, ipsum.</p>
      </div>
      
      <div>
        <img src={aboutImage} alt="" className='h-[500px]'/>
      </div>
      </div>
    </section>
  );
};

export default About;