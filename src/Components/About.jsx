import React from 'react';
import aboutImage from "../assets/about-image.png";

const About = () => {
  return (
    <section id='about' className='flex my-10 h-[calc(100vh-200px)]'>
      <div>
        <img src={aboutImage} alt="" className='h-[500px]'/>
      </div>
      
      <div>
        <p>Lorem, ipsum.</p>
      </div>
    </section>
  );
};

export default About;