// import React from 'react';
// import { FaBootstrap, FaGithub, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
// import { RiTailwindCssFill } from 'react-icons/ri';
// import { SiExpress, SiMongodb, SiNextdotjs } from 'react-icons/si';
// import { TbBrandVite } from 'react-icons/tb';

// const Hero = () => {
//   return (
//     <section className='relative flex flex-col justify-center items-center my-10 h-[calc(100vh-200px)]'>
//      {/* Greeting */}
//       <span data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl font-medium text-(--color-secondary) mb-2 z-10">
//         Hi, I am
//       </span>

//       {/* Icons */}
//       <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
//         <FaJs className="text-yellow-400 text-5xl absolute top-10 left-16 animate-floatX"  data-aos="fade-right" data-aos-delay="600"/>
//         <FaGithub className="text-gray-200 text-5xl absolute bottom-10 left-24 animate-rotateSlow"  data-aos="fade-right" data-aos-delay="600"/>
//         <SiNextdotjs className="text-gray-200 text-5xl absolute top-52 left-24 animate-rotateSlow"  data-aos="fade-right" data-aos-delay="600"/>
//         <FaNodeJs className="text-green-500 text-5xl absolute top-28 left-[25%] animate-float"  data-aos="fade-right" data-aos-delay="600"/>
//         <SiExpress className="text-gray-400 text-4xl absolute bottom-12 left-1/3 animate-float"  data-aos="fade-right" data-aos-delay="600"/>

//         <TbBrandVite className="text-purple-500 text-5xl absolute top-24 right-16 animate-rotateSlow"  data-aos="fade-left" data-aos-delay="600"/>
//         <FaReact className="text-sky-400 text-6xl absolute bottom-24 right-32 animate-rotateSlow"  data-aos="fade-left" data-aos-delay="600"/>
//         <SiMongodb className="text-green-600 text-5xl absolute top-1/3 right-1/4 -rotate-45 animate-float"  data-aos="fade-left" data-aos-delay="600"/>
//         <RiTailwindCssFill className="text-cyan-400 text-5xl absolute bottom-10 right-10 animate-rotateSlow"  data-aos="fade-left" data-aos-delay="600"/>
//         <FaBootstrap className="text-indigo-500 text-5xl absolute top-10 right-1/3 animate-float"  data-aos="fade-left" data-aos-delay="600"/>
//       </div>

//       {/* Name */}
//       <h1 data-aos="fade-up" data-aos-delay="300" className="text-4xl md:text-6xl xl:text-8xl font-bold text-primary mb-4 z-10">
//         Abdur Rob
//       </h1>

//       {/* Description */}
//       <p data-aos="fade-up" data-aos-delay="400" className="max-w-xl text-center text-secondary text-base md:text-lg mb-6 leading-relaxed z-0">
//         Transforming visions into seamless, responsive websites that engage and inspire. With expertise in modern web technologies and clean, functional design.
//       </p>

//       {/* CTA Button */}
//       <a
//        data-aos="fade-up" data-aos-delay="500"
//         href="#about"
//         className="common-btn z-10"
//       >
//         Learn More
//       </a>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import aboutImage from "../assets/mine-5.webp";
import { FaGithub, FaLinkedinIn, FaReact, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-88px)] flex items-center overflow-hidden">
      <div className="container mx-auto my-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="space-y-6">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 p-2 pr-3 rounded-full bg-primary/30 text-secondary text-md font-medium w-fit">
            <span className="inline-block animate-wave">👋</span>
            Welcome to my portfolio
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold leading-tight text-primary">
            Hi, I’m <span className="text-accent text-shadow">Abdur Rob</span>
            <br />
            Fullstack Developer
          </h1>

          {/* Description */}
          <p className="text-secondary max-w-xl text-base sm:text-lg">
            I craft exceptional digital experiences with modern technologies.
            Passionate about building scalable applications and solving complex problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              className="common-btn resume-btn"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="common-btn bg-transparent"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/Abdurrobr34l"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-primary bg-secondary/15 hover:bg-white hover:text-accent transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/abdurrobr34l/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-primary bg-secondary/15 hover:bg-white hover:text-accent transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com/Abdurrob_r34l"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-primary bg-secondary/15 hover:bg-white hover:text-accent transition"
              aria-label="Twitter / X"
            >
              <FaTwitter />
            </a>

            <a
              href="mailto:abdurrobr34l@gmail.com"
              className="p-3 rounded-full text-primary bg-secondary/15 hover:bg-white hover:text-accent transition"
              aria-label="Email"
            >
              <MdEmail />
            </a>
          </div>

        </div>

        {/* ---------------- RIGHT IMAGE ---------------- */}
        <div className="relative flex justify-center items-center">
          {/* Glow Circle */}
          <div className="absolute w-[280px] sm:w-[360px] lg:w-[420px] aspect-square rounded-full bg-accent blur-3xl animate-glow" />

          {/* Main Circle */}
          <div className="relative w-[260px] sm:w-[340px] lg:w-[400px] aspect-square rounded-full bg-linear-to-b from-accent/40 to-accent/20 flex items-center justify-center">
            <img
              src={aboutImage}
              alt="Profile"
              className="w-40 sm:w-48 lg:w-[360px]"
            />
          </div>

          {/* Floating Icons */}
          <span className="absolute top-10 right-10 p-3 text-xl rounded-xl bg-accent text-white animate-float">
            <SiNextdotjs />
          </span>

          <span className="absolute bottom-10 left-10 p-3 text-xl rounded-xl bg-accent text-white animate-floatX">
            <FaReact />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
