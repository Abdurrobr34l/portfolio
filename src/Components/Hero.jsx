import React from 'react';
import { FaBootstrap, FaGithub, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';

const Hero = () => {
  return (
    <section className='relative flex flex-col justify-center items-center my-10 h-[calc(100vh-200px)]'>
     {/* Greeting */}
      <span data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl font-medium text-(--color-secondary) mb-2 z-10">
        Hi, I am
      </span>

      {/* Icons */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <FaJs className="text-yellow-400 text-5xl absolute top-10 left-16 animate-floatX"  data-aos="fade-right" data-aos-delay="600"/>
        <FaGithub className="text-gray-200 text-5xl absolute bottom-10 left-24 animate-rotateSlow"  data-aos="fade-right" data-aos-delay="600"/>
        <FaNodeJs className="text-green-500 text-5xl absolute top-28 left-[25%] animate-float"  data-aos="fade-right" data-aos-delay="600"/>
        <SiExpress className="text-gray-400 text-4xl absolute bottom-32 left-1/3 animate-float"  data-aos="fade-right" data-aos-delay="600"/>
        
        <TbBrandVite className="text-purple-500 text-5xl absolute top-24 right-16 animate-rotateSlow"  data-aos="fade-left" data-aos-delay="600"/>
        <FaReact className="text-sky-400 text-6xl absolute bottom-24 right-32 animate-float"  data-aos="fade-left" data-aos-delay="600"/>
        <SiMongodb className="text-green-600 text-5xl absolute top-1/3 right-1/4 animate-float"  data-aos="fade-left" data-aos-delay="600"/>
        <RiTailwindCssFill className="text-cyan-400 text-5xl absolute bottom-10 right-10 animate-rotateSlow"  data-aos="fade-left" data-aos-delay="600"/>
        <FaBootstrap className="text-indigo-500 text-5xl absolute top-10 right-1/3 animate-rotateSlow"  data-aos="fade-left" data-aos-delay="600"/>
      </div>

      {/* Name */}
      <h1 data-aos="fade-up" data-aos-delay="300" className="text-4xl md:text-6xl xl:text-8xl font-bold text-primary mb-4 z-10">
        Abdur Rob
      </h1>

      {/* Description */}
      <p data-aos="fade-up" data-aos-delay="400" className="max-w-xl text-center text-secondary text-base md:text-lg mb-6 leading-relaxed z-0">
        Transforming visions into seamless, responsive websites that engage and inspire. With expertise in modern web technologies and clean, functional design.
      </p>

      {/* CTA Button */}
      <a
       data-aos="fade-up" data-aos-delay="500"
        href="#about"
        className="common-btn z-10"
      >
        Learn More
      </a>
    </section>
  );
};

export default Hero;