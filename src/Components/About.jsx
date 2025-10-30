import React from "react";
import aboutImage from "../assets/about-image.png";
// import { FaAngleRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="mb-10 2xl:mt-14 h-[calc(100vh - 120px)]">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-20 lg:px-20 xl:px-32">
        <div>
          <img src={aboutImage} alt="" className="h-[400px] rounded-full md:h-[450px]" />
        </div>

        <div>
          {/* About Text */}
          <div className="max-w-2xl space-y-4 text-center lg:text-start">
            <p className="text-secondary leading-relaxed">
              I’m <span className="text-3xl font-bold text-accent">Abdur Rob</span>, a
              MERN Stack Developer passionate about creating sleek, responsive,
              and functional websites. I enjoy building digital experiences that
              blend design and technology.
            <br />
            <br />
            My goal is to blend creativity with functionality to deliver web solutions that enhance user experience. I thrive on challenges, particularly when it comes to problem-solving, and I'm always eager to learn new skills and technologies.
            </p>

            <p className="mt-5 text-secondary leading-relaxed mb-4">
    Here are a few technologies and tools I’ve been working with recently:
  </p>
          </div>

          {/* Skills */}
          <ul className="grid grid-cols-2 gap-4 text-primary text-[14px] font-semibold sm:grid-cols-3">
            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> SCSS</li>
            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> Bootstrap</li>
            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> Tailwind CSS</li>
            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> WordPress</li>

            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> DaisyUI</li>
            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> JavaScript (ES6+)</li>
            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> React.js</li>

            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> Node.js</li>
            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> Express.js</li>
            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> MongoDB</li>

            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> Vite</li>
            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> Netlify</li>
            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> Vercel</li>
 
             <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> Figma</li>
            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> Photoshop</li>
            <li className="flex items-center gap-1"><FaAngleRight className="text-accent"/> Canva</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
