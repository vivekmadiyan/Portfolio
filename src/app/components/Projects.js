"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

import codefusionImg from "@/app/assets/codefusion.png";
import emsImg from "@/app/assets/ems.png";
import agenticImg from "@/app/assets/agentic-workflow.png";

const projectsData = [
  {
    number: "01",
    category: "Enterprise · AI",
    title: "Agentic AI Workflow Platform",
    description:
      "A drag-and-drop workflow designer for an enterprise AI agent platform. Built the visual canvas, node stencil, toolbar, inspector panel, and variable handling for no-code, multi-step workflows.",
    techStack: ["JointJS Plus", "React.js", "Next.js", "TypeScript", "Zustand"],
    githubLink: "https://github.com/vivekmadiyan",
    imageSrc: agenticImg,
    imageAlt: "Agentic AI workflow canvas with connected workflow nodes",
  },
  {
    number: "02",
    category: "Real-time · Collaboration",
    title: "CodeFusion",
    description:
      "A collaborative code editor where users join shared rooms and see edits live. Includes room presence and rejoining, multi-language highlighting, and selectable color themes.",
    techStack: ["React.js", "Node.js", "Express.js", "Socket.io"],
    githubLink: "https://github.com/vivekmadiyan/CodeFusion",
    imageSrc: codefusionImg,
    imageAlt: "CodeFusion collaborative code editor interface",
  },
  {
    number: "03",
    category: "SaaS · Workforce",
    title: "EmployeeMS",
    description:
      "A multi-tenant HR platform with role-based workflows, company-scoped teams, and reporting lines. Includes leave management, reusable onboarding, offboarding checklists, and CSV workforce reports.",
    techStack: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "Playwright",
    ],
    githubLink: "https://github.com/vivekmadiyan/employee-ms",
    imageSrc: emsImg,
    imageAlt: "EmployeeMS workforce task dashboard",
  },
];

const Projects = () => (
  <section id="projects" className="bg-[#f7f5f0] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#e76f3c]">
            Selected work
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.06em] text-[#1d1d1b] sm:text-5xl">
            Things I&apos;ve built<span className="text-[#e76f3c]">.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[#77726b] sm:text-base">
          A few projects that bring together product thinking, engineering, and
          a focus on the details.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <motion.article
            key={project.number}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-[1.65rem] border border-[#e9e4dc] bg-white"
          >
            <div className="relative aspect-[1.38] overflow-hidden bg-[#edeae5] p-3 sm:p-4">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-white">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <span className="absolute left-6 top-6 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#625e57] backdrop-blur">
                {project.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-[#aaa39a]">
                  PROJECT {project.number}
                </span>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e9e4dc] text-[#393733] transition-all hover:border-[#1d1d1b] hover:bg-[#1d1d1b] hover:text-white"
                >
                  <FaGithub size={17} />
                </a>
              </div>

              <h3 className="text-xl font-semibold leading-snug tracking-tight text-[#1d1d1b]">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#77726b]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#f7f5f0] px-2.5 py-1 text-[11px] font-medium text-[#625e57]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#1d1d1b] transition-colors hover:text-[#e76f3c]"
              >
                View project
                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
