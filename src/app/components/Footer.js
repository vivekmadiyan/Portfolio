"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { FiArrowUp, FiMail, FiPhone } from "react-icons/fi";

const socialLinks = [
  {
    href: "https://github.com/vivekmadiyan",
    label: "GitHub",
    icon: <FaGithub size={19} />,
  },
  {
    href: "https://www.linkedin.com/in/vivekmadiyan/",
    label: "LinkedIn",
    icon: <FaLinkedin size={19} />,
  },
  {
    href: "https://portfolio-ycwq.vercel.app",
    label: "Portfolio",
    icon: <FaGlobe size={19} />,
  },
];

const Footer = () => (
  <footer className="bg-[#f7f5f0] px-5 pb-6 sm:px-8 lg:px-12">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#1d1d1b] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#e7a481]">
            Have a project in mind?
          </p>
          <a
            href="mailto:vivekmadiyan3536@gmail.com"
            className="group inline-flex items-end gap-3 text-4xl font-semibold leading-none tracking-[-0.06em] transition-colors hover:text-[#e7a481] sm:text-6xl"
          >
            Let&apos;s connect
            <span className="pb-1 text-[#e76f3c] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
          <div className="mt-8 flex flex-col gap-3 text-sm text-white/60 sm:flex-row sm:gap-6">
            <a
              href="mailto:vivekmadiyan3536@gmail.com"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <FiMail className="text-[#e7a481]" />
              vivekmadiyan3536@gmail.com
            </a>
            <a
              href="tel:+919084017649"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <FiPhone className="text-[#e7a481]" />
              +91 9084017649
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-[#e76f3c] hover:bg-[#e76f3c] hover:text-white"
            >
              {link.icon}
            </a>
          ))}
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="ml-1 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1d1d1b] transition-colors hover:bg-[#e7a481]"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowUp size={19} />
          </motion.button>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Vivek Madiyan</p>
        <p>Designed with intent. Built with care.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
