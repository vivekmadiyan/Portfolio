"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaUsers } from "react-icons/fa";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardInfo = [
    {
      icon: <FaLaptopCode size={40} className="text-[#FD853A]" />,
      title: "Frontend Development",
      description:
        "Expertise in TypeScript and JavaScript, crafting dynamic user experiences with frameworks like React and immersive 3D scenes with Three.js.",
    },
    {
      icon: <FaServer size={40} className="text-[#FD853A]" />,
      title: "Backend & Scalability",
      description:
        "Building efficient and scalable server-side solutions with Node.js, ensuring robust performance for real-world applications.",
    },
    {
      icon: <FaUsers size={40} className="text-[#FD853A]" />,
      title: "Collaborative Solutions",
      description:
        "A quick learner who collaborates closely with clients to create user-friendly products that solve complex problems and bring ideas to life.",
    },
  ];

  return (
    <div
      id="about"
      className="flex flex-col bg-white text-black font-sans py-24 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="flex flex-col container mx-auto max-w-7xl items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.div
          className="flex flex-col mb-4"
          variants={itemVariants}
        >
          <div className="text-3xl md:text-4xl font-bold">
            About <span className="text-[#FD853A]">Me</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="flex max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mb-16"
          variants={itemVariants}
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems.
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          {cardInfo.map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 items-center text-center cursor-pointer flex-1"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-4 flex"
              >
                {card.icon}
              </motion.div>
              <div className="text-xl font-bold mb-3">{card.title}</div>
              <div className="text-gray-600 leading-relaxed">
                {card.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.div
          className="flex mt-16 text-xl text-gray-800 font-medium"
          variants={itemVariants}
        >
          Let's work together to bring your ideas to life!
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
