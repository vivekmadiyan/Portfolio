"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Logo = ({ onClick }) => (
  <motion.div
    onClick={() => onClick("#home", "Home")}
    className="flex items-center gap-2 text-white px-4 py-2 cursor-pointer font-bold tracking-wide"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex">Portfolio</div>
  </motion.div>
);

const NavLink = ({ link, active, onClick }) => (
  <motion.div
    onClick={() => onClick(link.href, link.title)}
    className="relative flex text-white px-4 py-2 cursor-pointer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {active === link.title && (
      <motion.div
        layoutId="active-pill"
        className="absolute inset-0 bg-[#FD853A] rounded-full -z-10"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    )}
    <div className="flex">{link.title}</div>
  </motion.div>
);

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href, title) => {
    setActive(title);
    setIsMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white py-8 sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col">
        <div className="flex items-center bg-black rounded-full h-[60px] px-[6px]">
          {/* Desktop Nav */}
          <div className="hidden md:flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              {navLinks.slice(0, 3).map((link) => (
                <NavLink
                  key={link.title}
                  link={link}
                  active={active}
                  onClick={handleNavClick}
                />
              ))}
            </div>

            <Logo onClick={handleNavClick} />

            <div className="flex items-center gap-2">
              {navLinks.slice(3).map((link) => (
                <NavLink
                  key={link.title}
                  link={link}
                  active={active}
                  onClick={handleNavClick}
                />
              ))}
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex w-full justify-between items-center px-4">
            <Logo onClick={handleNavClick} />
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex text-white cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col bg-black/80 backdrop-blur-md mt-2 rounded-lg py-4"
            >
              <div className="flex flex-col items-center space-y-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.title}
                    link={link}
                    active={active}
                    onClick={handleNavClick}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
