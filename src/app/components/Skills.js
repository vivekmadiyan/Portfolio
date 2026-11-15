"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "SQL"],
    icon: <FaCode />,
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "JointJS", "Tailwind CSS", "HTML", "CSS"],
    icon: <FaLaptopCode />,
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
    icon: <FaServer />,
  },
  {
    category: "Data",
    skills: ["PostgreSQL", "MongoDB", "OpenXML"],
    icon: <FaDatabase />,
  },
  {
    category: "Tools & testing",
    skills: ["Git", "GitHub", "Render", "Vercel", "Figma", "JIRA"],
    icon: <FaTools />,
  },
  {
    category: "Testing & QA",
    skills: ["Playwright", "Manual testing", "SDLC / STLC", "Test case design", "Bug tracking"],
    icon: <FaTools />,
  },
  {
    category: "Core computer science",
    skills: ["Data structures & algorithms", "OOP", "DBMS"],
    icon: <FaCode />,
  },
];

const Skills = () => (
  <section id="skills" className="bg-[#f7f5f0] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#e76f3c]">
            Tools of the trade
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.06em] text-[#1d1d1b] sm:text-5xl">
            My toolkit<span className="text-[#e76f3c]">.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[#77726b] sm:text-base">
          A practical stack for building polished interfaces, scalable
          applications, and reliable product experiences.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.category}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.07 }}
            className="rounded-[1.5rem] border border-[#e9e4dc] bg-white p-6 sm:p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7e6dc] text-[#e76f3c]">
                {group.icon}
              </span>
              <h3 className="font-semibold text-[#292825]">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#eeeae4] bg-[#fbfaf8] px-3 py-1.5 text-xs font-medium text-[#625e57]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
