import React from 'react';
import { FaBootstrap, FaGithub, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';

const Hero = () => {
  return (
    <section className='relative flex flex-col justify-center items-center my-10 h-[calc(100vh-200px)]'>
     {/* Greeting */}
      <span className="text-lg md:text-xl font-medium text-(--color-secondary) mb-2 z-10">
        Hi, I am
      </span>

      {/* Icons */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <FaJs className="text-yellow-400 text-5xl absolute top-10 left-16 animate-floatX" />
        <FaGithub className="text-gray-200 text-5xl absolute bottom-10 left-24 animate-rotateSlow" />
        <TbBrandVite className="text-purple-500 text-5xl absolute top-24 right-16 animate-rotateSlow" />
        <FaReact className="text-sky-400 text-6xl absolute bottom-24 right-32 animate-float" />
        <FaNodeJs className="text-green-500 text-5xl absolute top-28 left-[25%] animate-float" />
        <SiExpress className="text-gray-400 text-4xl absolute bottom-32 left-1/3 animate-float" />
        <SiMongodb className="text-green-600 text-5xl absolute top-1/3 right-1/4 animate-float" />
        <RiTailwindCssFill className="text-cyan-400 text-5xl absolute bottom-10 right-10 animate-rotateSlow" />
        <FaBootstrap className="text-indigo-500 text-5xl absolute top-10 right-1/3 animate-rotateSlow" />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold text-primary mb-4 z-10">
        Abdur Rob
      </h1>

      {/* Description */}
      <p className="max-w-xl text-center text-secondary text-base md:text-lg mb-6 leading-relaxed z-0">
        Transforming visions into seamless, responsive websites that engage and inspire. With expertise in modern web technologies and clean, functional design.
      </p>

      {/* CTA Button */}
      <a
        href="#about"
        className="common-btn z-10"
      >
        Learn More
      </a>
    </section>
  );
};

export default Hero;