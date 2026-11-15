"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f5f0]/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <a
          href="#home"
          onClick={() => setIsMenuOpen(false)}
          className="text-xl font-black tracking-[-0.06em] text-[#171717]"
        >
          vivek<span className="text-[#e76f3c]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm font-medium text-[#64615c] transition-colors hover:text-[#e76f3c]"
            >
              {link.title}
            </a>
          ))}
          <a
            href="/Vivek_Resume.pdf"
            download="Vivek_Resume.pdf"
            className="rounded-full bg-[#1d1d1b] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e76f3c]"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-[#171717] transition hover:border-black/30 md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <HiX size={23} /> : <HiMenu size={23} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-black/5 bg-[#f7f5f0] md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-[#45433f] transition-colors hover:bg-white hover:text-[#e76f3c]"
                >
                  {link.title}
                </a>
              ))}
              <a
                href="/Vivek_Resume.pdf"
                download="Vivek_Resume.pdf"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-xl bg-[#1d1d1b] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
