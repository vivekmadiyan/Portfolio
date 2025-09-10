"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

// ✅ Import images
import codefusionImg from "@/app/assets/codefusion.png";
import emsImg from "@/app/assets/ems.png";
import weatherImg from "@/app/assets/weather.png";

// --- Projects Data ---
const projectsData = [
  {
    title: "CodeFusion – Real-Time Code Collaboration App",
    description:
      "Built a real-time collaborative code editor with WebSockets & autosave. Features include multi-user sessions, syntax highlighting, and a scalable backend.",
    techStack: ["React.js", "Node.js", "Express.js", "Socket.io"],
    githubLink: "https://github.com/vivekmadiyan/CodeFusion",
    imageSrc: codefusionImg,
  },
  {
    title: "Employee Management System – Web App",
    description:
      "Developed a compact employee & task management system with role-based access, task creation/forwarding, and real-time status tracking. Integrated responsive UI with persistent state using Context API & Local Storage.",
    techStack: ["React.js", "Context API", "Tailwind CSS", "Local Storage"],
    githubLink: "https://github.com/vivekmadiyan/Employment_Management_System",
    imageSrc: emsImg,
  },
  {
    title: "Weather App – Full-Stack Application",
    description:
      "Created a real-time weather app with city-based search & forecasts, deployed on Render with environment-based configuration.",
    techStack: ["React.js", "Node.js", "Express.js", "OpenWeatherMap API"],
    githubLink: "https://github.com/vivekmadiyan/weather-app",
    imageSrc: weatherImg,
  },
];

// --- Framer Motion Variants ---
const cardVariants = (isOdd) => ({
  hidden: { x: isOdd ? -100 : 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, duration: 0.8 },
  },
});

// --- Projects Component ---
const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen bg-white font-sans flex items-center justify-center py-16 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-4 flex flex-col">
        {/* Heading */}
        <div className="text-center text-4xl font-bold text-black md:text-5xl mb-16 flex justify-center">
          <div>
            My <span className="text-[#FD853A]">Projects</span>
          </div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-20">
          {projectsData.map((project, index) => {
            const isOdd = index % 2 !== 0;
            return (
              <motion.div
                key={project.title}
                className="flex flex-col lg:flex-row gap-12 items-center"
                variants={cardVariants(isOdd)}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
              >
                {/* Project Image */}
                <div
                  className={`w-full lg:w-1/2 h-80 rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center ${
                    isOdd ? "lg:order-last" : ""
                  }`}
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    width={600}
                    height={400}
                  />
                </div>

                {/* Project Details */}
                <div
                  className={`flex flex-col lg:w-1/2 ${
                    isOdd ? "lg:items-end text-right" : "lg:items-start text-left"
                  }`}
                >
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-lg">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-6 justify-start lg:justify-start">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-md border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md transition-colors duration-300 hover:bg-[#FD853A]"
                  >
                    <FaGithub className="h-5 w-5" />
                    View on GitHub
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
