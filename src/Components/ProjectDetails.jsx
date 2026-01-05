import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router"; // react-router-dom
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
} from "react-icons/fi";
import Container from "./Container";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("/projects.json")
    .then(res => res.json())
    .then(data => {
      const foundProject = data.find(item => item.id === Number(id)); // <-- important
      setProject(foundProject);
      setLoading(false);
    })
    .catch(err => {
      console.error("Error loading project:", err);
      setLoading(false);
    });
}, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-primary">
        Loading project...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-primary">
        Project not found
      </div>
    );
  }

  return (
    <section className="my-5 md:my-10 lg:my-20">
<Container>
        {/* Back Navigation */}
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent mb-8"
      >
        <FiArrowLeft />
        Back to Projects
      </Link>

      {/* HERO SECTION */}
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {project.name}
          </h1>

          <p className="text-secondary mb-6 max-w-xl">
            {project.briefDescription}
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="common-btn resume-btn flex items-center gap-2"
              >
                Live Demo <FiExternalLink />
              </a>
            )}

            {project.clientRepo && project.clientRepo.length > 0 && (
              <a
                href={project.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="common-btn flex items-center gap-2"
              >
                GitHub (Client) <FiGithub />
              </a>
            )}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="glass-card bg-primary/15! p-4">
          <img
            src={project.image.startsWith("http") ? project.image : `/${project.image}`}
            alt={project.name}
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid lg:grid-cols-3 gap-10">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-10">
          {/* TECHNOLOGY STACK */}
          <div className="glass-card bg-primary/15! p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Main Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-secondary/90 text-accent font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CHALLENGES */}
          <div className="glass-card bg-primary/15! p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Challenges Faced
            </h2>
            <p className="text-secondary leading-relaxed">{project.challenges}</p>
          </div>

          {/* FUTURE PLANS */}
          <div className="glass-card bg-primary/15! p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Future Improvements & Plans
            </h2>
            <p className="text-secondary leading-relaxed">{project.futurePlans}</p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-10">
          {/* PROJECT INFO */}
          <div className="glass-card bg-primary/15! p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Project Overview
            </h2>

            <ul className="space-y-3 text-secondary">
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-accent" />
                Type: Full Stack Project
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-accent" />
                Role: Solo Developer
              </li>
              <li className="flex items-center gap-2 text-success">
                <FiCheckCircle className="text-success" />
                Status: Completed
              </li>
            </ul>
          </div>
        </div>
      </div>
</Container>
    </section>
  );
};

export default ProjectDetails;
