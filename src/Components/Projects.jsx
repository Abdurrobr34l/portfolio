import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import appimage from "../assets/projects/apps.png";
import taxicab from "../assets/projects/taxicab.webp";

const Projects = () => {
  const projects = [
    {
      id: 1,
      projectName: "AppSphere",
      image: appimage,
      description:
        "Responsive app-store UI with search, details, and install features.",
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
      description: "Personal portfolio to showcase projects and skills.",
      stackUsed: ["React", "Tailwind CSS", "Vite"],
    },
    {
      id: 3,
      projectName: "E-Commerce App",
      image: appimage,
      description:
        "Full-stack e-commerce platform with shopping cart and payment.",
      stackUsed: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    },
    {
      id: 4,
      projectName: "Design Tool Dashboard",
      image: appimage,
      description:
        "Dashboard to manage design projects and assets in real-time.",
      stackUsed: ["React", "DaisyUI", "Figma API"],
    },
    {
      id: 5,
      projectName: "Blog CMS",
      image: appimage,
      description: "Content management system for publishing blog posts.",
      stackUsed: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    },
    {
      id: 6,
      projectName: "Weather App",
      image: appimage,
      description:
        "Live weather updates with search by city and API integration.",
      stackUsed: ["React", "Axios", "Tailwind CSS", "OpenWeather API"],
    },
  ];

  return (
    <section id="projects" className="my-40">
      <div className="grid grid-cols-3 gap-5">
        {projects.map(({ id, projectName, image, description, stackUsed }) => (


          // <div className="relative overflow-hidden">
          //   <img src={appimage} alt="It is Project mockup image" className="h-[280px] w-full rounded-xl"/>

          //   <div key={id} className="absolute border border-white/20 bg-white/10 backdrop-blur-md rounded-xl p-6 text-primary shadow-lg">
          //   <h2 className="text-xl font-semibold text-accent">{projectName}</h2>
          //   <p className="mt-2 mb-4">{description}</p>
          //   <ul className="flex items-center flex-wrap gap-2">
          //     {stackUsed.map((stack) => (
          //       <li className="badge bg-indigo-500 text-white border-none">{stack}</li>
          //     ))}
          //   </ul>
          //   <div className="flex justify-end gap-3 text-xl">
          //     <a href="#">
          //       <FaGithub className="text-primary hover:text-accent" />
          //     </a>
          //     <a href="#">
          //       <FaLink className="text-primary hover:text-accent" />
          //     </a>
          //   </div>
          // </div>
          // </div>

          <div className="relative overflow-hidden group">
            <img
              src={image}
              alt="Project mockup image"
              className=" w-full rounded-xl object-cover"
            />

            <div
              key={id}
              className="absolute inset-0 border border-white/20 bg-white/10 backdrop-blur-lg rounded-xl p-6 text-primary shadow-lg
               opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-accent">
                  {projectName}
                </h2>
                <p className="mt-2 mb-4">{description}</p>
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
              </div>
              <div className="flex justify-end gap-3 text-xl">
                <a href="#">
                  <FaGithub className="text-primary hover:text-accent" />
                </a>
                <a href="#">
                  <FaLink className="text-primary hover:text-accent" />
                </a>
              </div>
            </div>
          </div>


        ))}
      </div>
    </section>
  );
};

export default Projects;
