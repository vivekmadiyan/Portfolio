"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiArrowUp, FiMail, FiPhone } from "react-icons/fi";

// --- Social Links Data ---
const socialLinks = [
  { href: "https://github.com/vivekmadiyan", icon: <FaGithub size={24} /> },
  { href: "https://www.linkedin.com/in/vivekmadiyan/", icon: <FaLinkedin size={24} /> },
  { href: "https://www.instagram.com/vivek_.1.1/#", icon: <FaInstagram size={24} /> },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-black text-white font-sans py-12 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col items-center text-center gap-6">
        
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In <span className="text-[#FD853A]">Touch</span>
        </motion.h2>

        {/* Short Intro */}
        <motion.p
          className="text-gray-400 max-w-md text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm open to new opportunities — feel free to drop an email or connect
          on social platforms.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col items-center gap-2 text-gray-300 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <FiMail className="text-[#FD853A]" size={18} />
            <a
              href="mailto:vivekmadiyan3536@gmail.com"
              className="text-[#FD853A] hover:underline"
            >
              vivekmadiyan3536@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="text-[#FD853A]" size={18} />
            <span className="text-[#FD853A]">+91 9084017649</span>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { staggerChildren: 0.2, delay: 0.4 },
          }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FD853A] transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 w-full max-w-4xl pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Vivek Madiyan. All Rights Reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
            <span className="p-2 bg-gray-800 rounded-full group-hover:bg-[#FD853A] transition-colors duration-300">
              <FiArrowUp size={20} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
