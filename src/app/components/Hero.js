"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import v3 from "../assets/v3.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f0]">
      <div className="pointer-events-none absolute -right-36 top-12 h-[28rem] w-[28rem] rounded-full border border-[#e9e3d9] sm:right-[-8rem] sm:top-8" />
      <div className="pointer-events-none absolute -right-16 top-32 h-[20rem] w-[20rem] rounded-full border border-[#e9e3d9] sm:right-[-2rem]" />

      <div className="mx-auto grid min-h-[calc(100svh_-_76px)] max-w-7xl items-center gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4 lg:px-12 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e6ded2] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#625e57]">
            <span className="h-2 w-2 rounded-full bg-[#e76f3c]" />
            Software developer · India
          </div>

          <p className="mb-3 text-lg font-medium text-[#625e57] sm:text-xl">
            Hello, I&apos;m
          </p>
          <h1 className="max-w-3xl text-[clamp(3.75rem,10vw,8rem)] font-semibold leading-[0.88] tracking-[-0.085em] text-[#1d1d1b]">
            Vivek
            <br />
            <span className="text-[#e76f3c]">Madiyan.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-[#625e57] sm:text-lg sm:leading-8">
            I build intuitive interfaces and dependable software—from workflow
            tools to collaborative web applications.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[#1d1d1b] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#e76f3c]"
            >
              Explore my work
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#d9d2c8] px-6 py-3.5 text-sm font-semibold text-[#393733] transition-colors hover:border-[#1d1d1b]"
            >
              Let&apos;s talk
            </a>
          </div>

          <a
            href="#about"
            className="mt-16 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b857c] transition-colors hover:text-[#e76f3c]"
          >
            Scroll to discover <FiArrowDown />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto flex aspect-square w-full max-w-[29rem] items-center justify-center lg:ml-auto"
          aria-hidden="true"
        >
          <div className="absolute inset-[8%] rounded-full bg-[#f1e8dc]" />
          <div className="absolute inset-[14%] rounded-full border border-white/80" />
          <div className="absolute inset-[23%] rounded-full border border-[#e76f3c]/20" />
          <div className="absolute right-[8%] top-[17%] h-4 w-4 rounded-full bg-[#1d1d1b]" />
          <div className="absolute bottom-[18%] left-[12%] h-3 w-3 rounded-full bg-[#e76f3c]" />
          <div className="absolute inset-x-[11%] bottom-[10%] h-[68%] overflow-hidden rounded-t-[48%] bg-[#e76f3c]">
            <img
              src={v3.src}
              alt=""
              className="absolute inset-x-0 bottom-0 h-full w-full object-cover object-top mix-blend-screen opacity-40"
            />
          </div>
          <div className="absolute bottom-[16%] right-[4%] rounded-2xl border border-[#e8e1d8] bg-white/90 p-4 shadow-[0_16px_50px_rgba(29,29,27,0.10)] backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8b857c]">
              Focus
            </p>
            <p className="mt-1 text-sm font-semibold text-[#1d1d1b]">
              Full-stack web
            </p>
          </div>
          <span className="absolute left-[5%] top-[21%] text-xs font-semibold uppercase tracking-[0.2em] text-[#8b857c] [writing-mode:vertical-rl]">
            Code · Create · Iterate
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

