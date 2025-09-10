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
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10">
      
      {/* Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-col flex-[0.75] bg-gray-900 p-8 rounded-2xl"
      >
        <div className="flex flex-col mb-6">
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Get in touch
          </p>
          <h3 className="text-white font-black text-4xl sm:text-5xl md:text-6xl">
            Contact.
          </h3>
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
              className="flex bg-gray-800 py-3 px-5 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium"
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
              className="flex bg-gray-800 py-3 px-5 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium"
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
              className="flex bg-gray-800 py-3 px-5 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium"
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
              className="flex bg-gray-800 py-3 px-5 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 py-3 px-8 rounded-xl text-white font-bold shadow-md"
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
        className="flex xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
