import React, { useEffect, useState } from "react";
import { Link } from "react-router"; // make sure you use react-router-dom

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Fetch projects data from public/projects.json
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section id="projects" className="relative">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-accent/20 text-accent">
          Projects
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          Featured Work
        </h2>

        <p className="mt-4 text-secondary">
          Some of my best projects that showcase my skills and passion
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="glass-card overflow-hidden flex flex-col">
            {/* IMAGE / PREVIEW AREA */}
            <div className="h-44 bg-accent/25 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-center bg-cover opacity-90"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col grow">
              <h3 className="text-lg font-semibold text-primary mb-2">
                {project.name}
              </h3>

              <p className="text-sm text-secondary mb-4">
                {project.shortDescription}
              </p>

              {/* TAGS / Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto mb-6">
                {project.techStack.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs rounded-full bg-white/80 text-accent font-medium`}
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-3 py-1 text-xs rounded-full bg-white/20 text-secondary font-medium">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex gap-3">
                {/* <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-accent hover:bg-secondary transition-colors border px-3 py-1 rounded"
                >
                  Live Demo
                </a> */}

                <Link
                  to={`/details/${project.id}`}
                  className="flex items-center gap-2 text-sm text-primary hover:text-accent hover:bg-secondary transition-colors border px-3 py-1 rounded"
                >
                  View Details <span className="text-lg">›</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;



// import React from "react";
// import { Link } from "react-router";

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description: "Full-featured online shopping experience",
//     image: "/placeholder-1.jpg", // replace later
//     tags: ["React", "Node.js", "MongoDB", "+2"],
//   },
//   {
//     title: "Task Management App",
//     description: "Collaborative project management tool",
//     image: "/placeholder-2.jpg",
//     tags: ["Next.js", "TypeScript", "PostgreSQL", "+1"],
//   },
//   {
//     title: "Social Media Dashboard",
//     description: "Analytics and scheduling platform",
//     image: "/placeholder-3.jpg",
//     tags: ["React", "Express", "Redis", "+2"],
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="relative"
//     >
//       {/* Header */}
//       <div className="text-center max-w-2xl mx-auto mb-20">
//         <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-accent/20 text-accent">
//           Projects
//         </span>

//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
//           Featured Work
//         </h2>

//         <p className="mt-4 text-secondary">
//           Some of my best projects that showcase my skills and passion
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="glass-card overflow-hidden flex flex-col"
//           >
//             {/* IMAGE / PREVIEW AREA */}
//             <div className="h-44 bg-accent/25 relative overflow-hidden">
//               {/* Replace div with <img /> later */}
//               <div
//                 className="absolute inset-0 bg-center bg-cover opacity-90"
//                 style={{
//                   backgroundImage: `url(${project.image})`,
//                 }}
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="p-6 flex flex-col grow">
//               <h3 className="text-lg font-semibold text-primary mb-2">
//                 {project.title}
//               </h3>

//               <p className="text-sm text-secondary mb-4">
//                 {project.description}
//               </p>

//               {/* TAGS */}
//               <div className="flex flex-wrap gap-2 mt-auto mb-6">
//                 {project.tags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className={`px-3 py-1 text-xs rounded-full
//                       ${
//                         tag.startsWith("+")
//                           ? "bg-white/20 text-secondary font-medium"
//                           : "bg-white/80 text-accent font-medium"
//                       }
//                     `}
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* CTA */}
//               <Link to={`/details/${index}`} className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors border w-auto">
//                 View Details
//                 <span className="text-lg">›</span>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;