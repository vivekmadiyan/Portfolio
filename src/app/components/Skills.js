"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaBug,
  FaBookOpen,
  FaCode
} from 'react-icons/fa';

// --- Skills Data ---
const skillsData = [
  {
    category: "Programming",
    skills: ["Java", "JavaScript"],
    icon: <FaCode size={24} />,
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JointJS", "HTML", "CSS", "Tailwind CSS"],
    icon: <FaLaptopCode size={24} />,
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
    icon: <FaServer size={24} />,
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    category: "Databases",
    skills: ["MongoDB", "SQL"],
    icon: <FaDatabase size={24} />,
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Render", "Figma", "JIRA"],
    icon: <FaTools size={24} />,
    color: "text-teal-500",
    bgColor: "bg-teal-50"
  },
  {
    category: "Testing & QA",
    skills: ["Manual Testing", "SDLC/STLC", "Test Case Design", "Bug Tracking (JIRA)"],
    icon: <FaBug size={24} />,
    color: "text-pink-500",
    bgColor: "bg-pink-50"
  },
  {
    category: "Core CS",
    skills: ["Data Structures & Algorithms", "OOPs", "DBMS"],
    icon: <FaBookOpen size={24} />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50"
  },
];

// --- Animation Variants ---
const sectionTitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 100, damping: 15 },
  }),
  hover: { scale: 1.03, boxShadow: "0 12px 24px rgba(0,0,0,0.1)", transition: { type: 'spring', stiffness: 300 } },
};

const iconVariants = {
  hover: { scale: [1, 1.1, 1], transition: { duration: 0.6, repeat: Infinity } },
};

const pillVariants = {
  hover: { scale: 1.08, backgroundColor: "#FD853A", color: "#ffffff", borderColor: "#FD853A", transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { type: 'spring', stiffness: 300 } },
};

// --- Skills Component ---
const Skills = () => {
  return (
    <div id="skills" className="min-h-screen bg-white font-sans flex items-center justify-center py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col">
        
        {/* Section Title */}
        <motion.div
          className="text-center text-4xl font-bold text-black md:text-5xl mb-16"
          variants={sectionTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <div>Technical <span className="text-[#FD853A]">Skills</span></div>
          </div>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillsData.map((categoryItem, index) => (
            <motion.div
              key={categoryItem.category}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col h-full transition-all duration-300"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              whileHover="hover"
            >
              {/* Category Icon & Title */}
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl shrink-0 ${categoryItem.bgColor} ${categoryItem.color}`}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {categoryItem.icon}
                </motion.div>
                <div className="text-xl font-semibold text-gray-900">{categoryItem.category}</div>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2.5">
                {categoryItem.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-gray-100 text-gray-700 text-sm font-medium px-3.5 py-1.5 rounded-full border border-gray-200 cursor-pointer"
                    variants={pillVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
