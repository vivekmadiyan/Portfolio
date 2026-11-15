"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaUsers } from "react-icons/fa";

const strengths = [
  {
    number: "01",
    icon: <FaLaptopCode />,
    title: "Frontend engineering",
    description:
      "Thoughtful, responsive interfaces with React, Next.js, TypeScript, and modern UI tooling.",
  },
  {
    number: "02",
    icon: <FaServer />,
    title: "Product-minded systems",
    description:
      "Reliable APIs and application features that connect the details to the bigger picture.",
  },
  {
    number: "03",
    icon: <FaUsers />,
    title: "Collaborative delivery",
    description:
      "Working closely with teams to turn complex requirements into clear, useful products.",
  },
];

const About = () => (
  <section id="about" className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#e76f3c]">
            A little about me
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.06em] text-[#1d1d1b] sm:text-5xl">
            Engineering with
            <br />
            <span className="text-[#aaa39a]">purpose.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl"
        >
          <p className="text-lg leading-8 text-[#625e57] sm:text-xl sm:leading-9">
            I&apos;m a software developer who enjoys turning complicated
            problems into intuitive products. My experience spans interactive
            workflow designers, collaborative tools, and full-stack web
            applications.
          </p>
          <p className="mt-5 text-base leading-7 text-[#858078]">
            I care about the details—accessible interfaces, maintainable code,
            and the small decisions that make software feel effortless.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-[#ece8e1] bg-[#ece8e1] md:grid-cols-3">
        {strengths.map((strength, index) => (
          <motion.article
            key={strength.number}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#fbfaf8] p-7 sm:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7e6dc] text-[#e76f3c]">
                {strength.icon}
              </span>
              <span className="text-xs font-semibold tracking-[0.18em] text-[#aaa39a]">
                {strength.number}
              </span>
            </div>
            <h3 className="mt-8 text-lg font-semibold tracking-tight text-[#1d1d1b]">
              {strength.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#77726b]">
              {strength.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
