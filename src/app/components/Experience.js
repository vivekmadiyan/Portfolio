"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const workExperiences = [
  {
    company: "Quale Infotech Private Limited",
    location: "Gurugram, India",
    period: "Mar 2026 — Oct 2026",
    title: "Software Developer Intern",
    description:
      "Built the frontend of an Agentic AI Workflow Platform in JointJS, React.js, and TypeScript. Developed the toolbar, inspector panel, node configuration, and workflow canvas; improved workflow execution through variable handling, memory management, and node-to-node data sharing. Also built an in-house Git server and migrated 50+ Excel activities from ClosedXML to OpenXML.",
  },
  {
    company: "Willow Wave",
    location: "Kanpur, India · Remote",
    period: "Jul 2025 — Sep 2025",
    title: "Frontend Developer Intern",
    description:
      "Built and deployed responsive websites and plugins with Next.js and Tailwind CSS. Developed features such as work report summaries, PDF export, and CRM interface components, and contributed to client projects with UI development and state management.",
  },
];

const Experience = () => (
  <section
    id="experience"
    className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    itemScope
    itemType="https://schema.org/Resume"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 grid gap-5 md:mb-16 md:grid-cols-[1fr_0.7fr] md:items-end">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#e76f3c]">
            Where I&apos;ve been
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.06em] text-[#1d1d1b] sm:text-5xl">
            Experience<span className="text-[#e76f3c]">.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[#77726b] sm:text-base">
          The teams, products, and problems that have shaped the way I build
          software.
        </p>
      </div>

      <ol className="border-t border-[#e9e4dc]">
        {workExperiences.map((experience, index) => (
          <motion.li
            key={experience.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.1 }}
            className="grid gap-5 border-b border-[#e9e4dc] py-8 sm:py-10 md:grid-cols-[0.7fr_1.3fr] md:gap-12"
            itemScope
            itemType="https://schema.org/WorkExperience"
          >
            <div>
              <p className="text-sm font-semibold text-[#e76f3c]" itemProp="startDate">
                {experience.period}
              </p>
              <p className="mt-2 text-sm text-[#8b857c]">
                {experience.company} · {experience.location}
              </p>
            </div>
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1b] sm:text-2xl" itemProp="jobTitle">
                  {experience.title}
                </h3>
                <FiArrowUpRight
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-xl text-[#b8b1a7]"
                />
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6f6a63] sm:text-base" itemProp="description">
                {experience.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
