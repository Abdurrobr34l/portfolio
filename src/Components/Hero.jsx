import React from 'react';

const Hero = () => {
  return (
    <section className='relative flex flex-col justify-center items-center my-10 h-[calc(100vh-200px)]'>
     {/* Greeting */}
      <span className="text-lg md:text-xl font-medium text-(--color-secondary) mb-2">
        Hi, I am
      </span>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold text-primary mb-4">
        Abdur Rob
      </h1>

      {/* Description */}
      <p className="max-w-xl text-center text-secondary text-base md:text-lg mb-6 leading-relaxed">
        Transforming visions into seamless, responsive websites that engage and inspire. With expertise in modern web technologies and clean, functional design.
      </p>

      {/* CTA Button */}
      <a
        href="#about"
        className="common-btn"
      >
        Learn More
      </a>
    </section>
  );
};

export default Hero;