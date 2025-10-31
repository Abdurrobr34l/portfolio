import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import appimage from "../assets/projects/apps.png";
import taxicab from "../assets/projects/taxicab.webp";
import agency from "../assets/projects/agency.webp";
import iLander from "../assets/projects//ilander.webp";
import nipro from "../assets/projects/nipro.webp";
import dragonNews from "../assets/projects/news.webp";

const Projects = () => {
  const projects = [
    {
      id: 1,
      projectName: "AppSphere",
      image: appimage,
      description:
        "AppSphere is a responsive app-store UI built with React. It displays apps from a JSON data source, supports live search, app details pages with review charts, localStorage-based installation, and a My Installation page to manage installed apps. The project follows the Hero IO assignment requirements.",
      stackUsed: [
        "React",
        "Tailwind CSS",
        "Vite",
        "React Router",
        "Axios",
        "Recharts",
      ],
    },
    {
      id: 2,
      projectName: "Taxicab",
      image: taxicab,
      description:
        "This is a fully responsive website built using HTML, CSS, JavaScript, jQuery, Bootstrap, and various jQuery plugins. The project features dynamic content interactions, responsive layouts for multiple devices, smooth scrolling effects, modal popups, and interactive components powered by jQuery plugins.",
      stackUsed: ["CSS", "Bootstrap", "Javascript", "JQuery", "JQuery Plugin"],
    },
    {
      id: 3,
      projectName: "Agency",
      image: agency,
      description:
        "Agency is a fully responsive, multi-page WordPress website designed to showcase services, team members, and client projects. Built with WordPress and enhanced using WPForms, custom animations, and interactive UI elements, the site provides a seamless user experience across devices.",
      stackUsed: ["WordPress", "PHP", "WPForms"],
    },
    {
      id: 4,
      projectName: "iLander",
      image: iLander,
      description:
        "iLander is a multi-page WordPress website designed for a creative agency. It features fully responsive layouts, smooth animations, interactive sections, and integrated contact forms. The project highlights custom page designs, clear content hierarchy.",
      stackUsed: [
        "WordPress",
        "PHP",
        "WPForms",
        "Custom CSS/Animations",
      ],
    },
    {
      id: 5,
      projectName: "Nipro",
      image: nipro,
      description: "Nipro Agency is a fully responsive multi-page website built with Bootstrap, designed to showcase the services and portfolio of a digital agency. It features smooth scrolling, interactive sections, and custom animations to enhance user engagement.",
      stackUsed: ["Bootstrap", "JavaScript", "jQuery", "Custom Animations"],
    },
    {
      id: 6,
      projectName: "Dragon News",
      image: dragonNews,
      description:
        "Dragon News is a responsive news portal built with React, Vite, and Firebase Authentication. It allows users to browse categorized news, read detailed articles, and securely log in or register using Firebase. The project is styled with Tailwind CSS and enhanced with DaisyUI and React Icons for a clean, modern UI.",
      stackUsed: ["React", "Firebase", "Tailwind CSS", "DaisyUI", "Date-FNS"],
    },
  ];

  return (
    <section id="projects" className="my-40">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(({ id, projectName, image, description, stackUsed }) => (
          <div className="relative overflow-hidden group border-white/20 bg-white/10 backdrop-blur-lg rounded-xl">
            <img
              src={image}
              alt="Project mockup image"
              className=" w-full rounded-xl object-cover"
            />

            <div
              key={id}
              className="absolute inset-0 border border-white/20 bg-white/80 backdrop-blur-lg rounded-xl p-3 text-primary shadow-lg
               opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear flex flex-col md:justify-center lg:gap-20 xl:gap-0"
            >
              <div>
                <h2 className="text-xl font-semibold text-accent">
                  {projectName}
                </h2>
                <p className=" mt-2 mb-4 textarea-md md:text-[12px] lg:text-base">{description}</p>
              </div>

              <div className="flex flex-col gap-2 md:gap-5">
                <ul className="flex items-center flex-wrap gap-2">
                  {stackUsed.map((stack) => (
                    <li
                      key={stack}
                      className="badge bg-indigo-500 text-white border-none"
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end gap-3 text-2xl">
                  <a href="#">
                    <FaGithub className="text-primary hover:text-accent" />
                  </a>
                  <a href="#">
                    <FaLink className="text-primary hover:text-accent" />
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
