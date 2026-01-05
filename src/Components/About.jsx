import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaGithub, FaGamepad, FaBookOpen, FaBicycle, FaWalking, FaTools } from "react-icons/fa";
import { FaFootball } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const interests = [
  { icon: FaBookOpen, title: "Learning", description: "Always staying curious" },
  { icon: FaWalking, title: "Walking", description: "Refreshing the mind and body" },
  { icon: FaBicycle, title: "Cycling", description: "Exploring outdoors and staying fit" },
  { icon: FaTools, title: "Crafting", description: "Making things at home with creativity" },
  { icon: FaFootball, title: "Sports", description: "Playing cricket and football for fun" },
  { icon: FaGamepad, title: "Gaming", description: "Relaxing after work" },
];

const About = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 600, easing: "ease-in-out" });
  }, []);

  return (
    <section
      id="about"
      className="bg-primary-for-bg text-primary"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          data-aos="fade-up"
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-2 text-sm font-bold rounded-full bg-accent/20 text-accent mb-4">
            About Me
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Get to Know Me Better
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A passionate developer who loves turning ideas into reality
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-2 items-start">

          {/* Left Column */}
          <div className="space-y-8">
          {/* My Programming Story */}
            <div
              data-aos="fade-right"
              className="glass-card p-6 md:p-8 rounded-lg shadow-lg bg-primary/10! border border-accent/20"
            >
              <h3 className="font-display text-xl font-semibold mb-4 text-accent">
                My Programming Journey
              </h3>
              <p className="text-secondary leading-relaxed mb-4">
                My journey into programming began unexpectedly during my college years. It all started when I saw a friend struggling with a programming assignment, and I was intrigued by how something that seemed complex could be broken down into simple steps. That curiosity quickly turned into a passion as I began to explore the world of coding.
              </p>
              <p className="text-secondary leading-relaxed mb-4">
                In 2019, I dove into web development, starting with the basics of HTML, CSS, and JavaScript. I liken HTML to the skeleton of a website, CSS to the muscles that shape and style it, and JavaScript to the dynamic functions that bring it to life. Over time, I expanded my skills to include frameworks like React and backend technologies like Node.js, Express, and MongoDB.
              </p>
              <p className="text-secondary leading-relaxed">
                Today, I specialize in fullstack development and thrive on the challenge of building scalable, impactful applications. When I’m not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
              </p>
            </div>

            {/* What i Enjoy */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="glass-card p-6 md:p-8 rounded-lg shadow-lg bg-primary/10! border border-accent/20"
            >
              <h3 className="font-display text-xl font-semibold mb-4 text-accent">
                What I Enjoy
              </h3>
              <p className="text-secondary leading-relaxed">
                I'm passionate about crafting intuitive user experiences and robust backend systems. I thrive on solving challenging problems and love seeing my work positively impact others. Helping people through my projects and sharing my knowledge brings me immense satisfaction.
              </p>
            </div>

            {/* Social Links */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="glass-card p-6 md:py-6 2xl:py-3.5 rounded-lg shadow-lg bg-primary/10! border border-accent/20"
            >
              <h4 className="text-lg font-semibold text-accent mb-4">
                Connect With Me
              </h4>

              <div className="flex flex-wrap items-center gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-primary bg-secondary/15 hover:bg-white hover:text-accent transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-primary bg-secondary/15 hover:bg-white hover:text-accent transition"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Abdurrobr34l"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-primary bg-secondary/15 hover:bg-white hover:text-accent transition"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/abdurrobr34l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-primary bg-secondary/15 hover:bg-white hover:text-accent transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com/Abdurrob_r34l"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-primary bg-secondary/15 hover:bg-white hover:text-accent transition"
                  aria-label="Twitter / X"
                >
                  <FaTwitter />
                </a>

                {/* Email */}
                <a
                  href="mailto:abdurrobr34l@gmail.com"
                  className="p-3 rounded-full text-primary bg-secondary/15 hover:bg-white hover:text-accent transition"
                  aria-label="Email"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interests and Quick Facts */}
          <div>
            <div
              data-aos="fade-left"
              className="glass-card p-6 md:p-8 rounded-lg shadow-lg bg-primary/10! border border-accent/20 mb-8"
            >
              <h3 className="font-display text-xl font-semibold mb-6 text-accent">
                Beyond Coding
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {interests.map(({ icon: Icon, title, description }, idx) => (
                  <div
                    key={title}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    className="p-4 rounded-xl bg-primary/15 border border-accent/30 hover:bg-accent/20 cursor-pointer transition-colors group"
                  >
                    <div className="w-10 h-10 mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium text-primary mb-1">{title}</h4>
                    <p className="text-sm text-secondary">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="glass-card p-6 md:p-8 rounded-lg shadow-lg bg-primary/10! border border-accent/20"
            >
              <h3 className="font-display text-xl font-semibold mb-4 text-accent">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-secondary">
                {[
                  "Based in Chittagong, Bangladesh",
                  "2+ years of professional experience",
                  "Skilled in React, Node.js, and MongoDB",
                  "Open to remote opportunities",
                  "Love Contributing to open-source projects",
                  "Love collaborating with teams",
                  "Passionate about continuous learning and growth in technology",
                ].map((fact) => (
                  <li key={fact} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-1" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;



// import React from "react";
// import aboutImage from "../assets/about-image.png";
// // import { FaAngleRight } from "react-icons/fa6";
// import { FaAngleRight, FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

// const About = () => {
//   return (
//     <section id="about" className="pb-20 2xl:pt-32 h-[calc(100vh - 140px)]">
//       <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-20 xl:px-32">
//         <div>
//           <img
//            data-aos="fade-right" data-aos-delay="200"
//             src={aboutImage}
//             alt=""
//             className="h-[400px] rounded-full md:h-[450px]"
//           />

//           <div className="flex justify-center gap-5 mt-5 text-3xl text-primary">
//             <a data-aos="fade-up" data-aos-delay="300" href="#" className="transition-colors duration-200 ease-linear hover:text-accent"><FaGithub/></a>
//             <a data-aos="fade-up" data-aos-delay="400" href="#" className="transition-colors duration-200 ease-linear hover:text-accent"><FaLinkedin/></a>
//             <a data-aos="fade-up" data-aos-delay="500" href="#" className="transition-colors duration-200 ease-linear hover:text-accent"><FaFacebook/></a>
//             <a data-aos="fade-up" data-aos-delay="600" href="#" className="transition-colors duration-200 ease-linear hover:text-accent"><FaTwitter/></a>
//             <a data-aos="fade-up" data-aos-delay="700" href="#" className="transition-colors duration-200 ease-linear hover:text-accent"><FaYoutube/></a>
//           </div>
//         </div>

//         <div data-aos="fade-up" data-aos-delay="200">
//           {/* About Text */}
//           <div className="max-w-2xl space-y-4 text-center lg:text-start">
//             <p className="text-secondary leading-relaxed">
//               I’m{" "}
//               <span className="text-3xl font-bold text-accent">Abdur Rob</span>,
//               a MERN Stack Developer passionate about creating sleek,
//               responsive, and functional websites. I enjoy building digital
//               experiences that blend design and technology.
//               <br />
//               <br />
//               My goal is to blend creativity with functionality to deliver web
//               solutions that enhance user experience. I thrive on challenges,
//               particularly when it comes to problem-solving, and I'm always
//               eager to learn new skills and technologies.
//             </p>

//             <p className="mt-6 text-secondary leading-relaxed">
//               Here are a few technologies and tools I’ve been working with
//               recently:
//             </p>
//           </div>

//           {/* Skills */}
//           <ul className="grid grid-cols-2 gap-4 mt-14 text-primary text-[14px] font-semibold sm:grid-cols-3 lg:mt-5">
//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> SCSS
//             </li>
//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> Bootstrap
//             </li>
//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> WordPress
//             </li>
//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> Tailwind CSS
//             </li>

//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> DaisyUI
//             </li>
//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> JavaScript (ES6+)
//             </li>
//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> React.js
//             </li>

//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> Node.js
//             </li>
//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> Express.js
//             </li>
//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> MongoDB
//             </li>

//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> Vite
//             </li>
//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> Netlify
//             </li>
//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> Vercel
//             </li>

//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> Figma
//             </li>
//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> Photoshop
//             </li>
//             <li className="flex items-center gap-1">
//               <FaAngleRight className="text-accent" /> Canva
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
