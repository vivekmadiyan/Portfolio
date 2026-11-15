"use client";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaRegEdit, FaPaperPlane } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";
import { slideIn } from "../../utils/motion";

// Dynamically import EarthCanvas
const EarthCanvas = dynamic(() => import("../components/Earth"), { ssr: false });

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("✅ Thank you. I will get back to you as soon as possible.");
        formRef.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("❌ Something went wrong. Please try again.");
      });
  };

  return (
    <div className="my-12 grid gap-8 overflow-hidden rounded-[2rem] bg-[#1d1d1b] p-5 sm:p-8 lg:my-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:p-12">
      
      {/* Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-col"
      >
        <div className="flex flex-col mb-6">
          <p className="text-[#e7a481] text-xs font-semibold uppercase tracking-[0.2em]">
            Have a good one in mind?
          </p>
          <h3 className="mt-3 text-white font-semibold text-4xl tracking-[-0.06em] sm:text-5xl">
            Let&apos;s talk.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
            Tell me what you&apos;re building. I&apos;d love to hear about it.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Subject */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <FaRegEdit /> Subject
            </label>
            <input
              type="text"
              name="title"
              placeholder="Subject"
              className="flex rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white outline-none transition placeholder:text-white/35 focus:border-[#e76f3c]"
              required
            />
          </div>

          {/* Name */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <FaUser /> Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="What's your good name?"
              className="flex rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white outline-none transition placeholder:text-white/35 focus:border-[#e76f3c]"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <FaEnvelope /> Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="flex rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white outline-none transition placeholder:text-white/35 focus:border-[#e76f3c]"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <FaRegEdit /> Your Message
            </label>
            <textarea
              rows={5}
              name="message"
              placeholder="What do you want to say?"
              className="flex resize-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white outline-none transition placeholder:text-white/35 focus:border-[#e76f3c]"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-[#e76f3c] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d85f30] disabled:cursor-wait disabled:opacity-70"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
              <FaPaperPlane />
            </button>
          </div>
        </form>
      </motion.div>

      {/* Earth Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="hidden min-h-[420px] lg:flex lg:h-auto lg:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
